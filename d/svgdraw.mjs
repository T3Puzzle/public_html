import {__artist_hasOne, __artist_one} from  './artist.mjs';
import {__enable_emoji} from  './utilities.mjs';
(()=>{
  let APP = {
    debug: true,
    root: null,
    svg: null,
    commands:{},
    providers: {},
  };
  
  class SvgdrawApp extends HTMLElement {
    connectedCallback() {
      APP.root = this.attachShadow({mode:'open'});
      setTimeout(()=>processTag(this),0);
      // unhide shadowdom
      this.style.display = 'block';
    }
  }
  customElements.define('svgdraw-app',SvgdrawApp);
  return;

  function processCommand(button, className, command) {
    __enable_emoji(button,true);
    let cmd = command.toLowerCase();
    APP.commands[cmd] = button;
    if (!button.classList.contains(className)){
      button.classList.add(className);
    }
  }
  function processButton(button) {
    let command = button.getAttribute('x-cmd');
    if (/^([^\/]+)\//.test(command)) {
      let className = RegExp.$1; 
      processCommand(button,className,command);
    }
  }
  function processAnchor(anchor) {
    anchor.target = '_blank';
  }
  function processMenu (menu,output) {
    let bgcolor = '#bbbbbb';
    if (menu) {
      bgcolor = menu.getAttribute('bgcolor') || bgcolor;
      let anchors = menu.querySelectorAll('a');
      for (let ai=0;ai<anchors.length;ai++) {
        processAnchor(anchors[ai]);
      }
      let buttons = menu.querySelectorAll('button');
      for (let bi=0;bi<buttons.length;bi++) {
        processButton(buttons[bi]);
      }
    }
    output.style = `position:fixed;bottom:0;background-color:${bgcolor};`;
    output.innerHTML = menu.innerHTML;
  }
  function processBoard (board,output){
    let type = 'module';
    if (board) {
      type = board.getAttribute('type') || type;
    }
    if (type==='module') {
      importModule (board,output,'./svgdraw-board.mjs',
        build=>{
           buildBoard(build,board,output);
        });
    } else {
      // TODO:  support type=svg src
    }
    return;

    function buildBoard (build,board,output) {
      // TODO:  support to read svgdraw-t3-board
      let param ={x:30}; 
      output.innerHTML = build(param);
      let svg = output.querySelector('svg');
      let width = svg.width.baseVal.value;;
      let height = svg.height.baseVal.value;
      svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
      svg.setAttribute('preserveAspectRatio','xMidYMid meet');
      svg.style.display = 'block';
      svg.style.top = '0';
      svg.style.left = '0';
      svg.style.width = '100%';
      svg.style['max-width'] = `${2*width}px`;
      svg.style.height = '100%';
      APP.svg = svg;
    }
  }
  function processExtensions (extensions,output) {
    if (!extensions) {
      return;
    }
    for (let ei=0;ei<extensions.children.length;ei++) {
      let ext = extensions.children[ei];
      let exoutput = document.createElement('output');
      output.appendChild(exoutput);
      if (ext.tagName.toLowerCase()==='svgdraw-extension') {
        importModule (ext,exoutput,null,null);
      }
    }
  }
  function processOperation (operation,output) {
    importModule (operation,output,'./svgdraw-operation.mjs',null);
  }
  function importModule (tag,output,_src,callback) {
    let ret  = true; 
    let src = tag.getAttribute('src');
    if (!src) {
      if( _src) {
        src = _src;
      } else {
        importFailed(output,callback);
        return;
      }
    }
    if (APP.debug) {
      src += '?'+Date.now();
    }
    import(src)
    .then(module=>{
       if (!output.id || output.id.trim().length===0) {
         output.id = src.replace(/\.[^\.]+$/,'').replace(/^\.\//,'').replace(/^extensions\/svgdraw-/,'');
       }
       let ret  = module.setup(APP,tag,output, {
	 insertButton: insertButton,
         bindMenuCallback: bindMenuCallback,
         bindHook: bindHook,
         unbindHook: unbindHook,
         exposeHook: exposeHook,
         callHooks: callHooks,
       }
       );
       if (callback) {
         callback(ret);
       }
    }).catch(e=>{
      console.error(e);
      importFailed(output,callback);
    });

    function callHooks (ENV, key, value, once) {
      if (!('hooks' in ENV)) {
        ENV.hooks = new Map();
      }
      let hooks = ENV.hooks.values();
      let res = false;
      while(true) {
        let callback = hooks.next();
        if (callback.done) {
          break;
        } else {
          res = res || callback.value(key, value);
          if (res && once) {
            return true;
          }
        }
      }
      return res;
    }
    function exposeHook (module,ENV) {
      if (!('hooks' in ENV)) {
          ENV.hooks = new Map();
      }
      APP.providers[module] = {
        bind: (obj, hook)=>{
          ENV.hooks.set(obj,hook);
        },
        unbind: (obj)=>{
          ENV.hooks.delete(obj);
        }
      };
    }
    function bindHook (module,outout,hook) {
      if (module in APP.providers ) {
        APP.providers[module].bind(output,hook);
      }
    }
    function unbindHook () {
      if (module in APP.providers ) {
        APP.providers[module].unbind(output,hook);
      }
    }
    function bindMenuCallback(cmd,callback) {
      let button = APP.commands[cmd];
      if (!button) { return null; }
      button.addEventListener('click',_=>callback(button,_));
      return button;
    }
    function insertButton (cmd, emoji, className, append) {
      if (!(cmd in APP.commands)) {
        let button = document.createElement('button');
        __enable_emoji(button,true);
        button['x-cmd'] = cmd;
        button.innerHTML = emoji;
        APP.commands[cmd] = button;
        if (className) {
          button.className = className;
        }
        let position = 'afterbegin';
        if (append) {
          position = 'beforeend';
        }
        APP.root.querySelector('output#menu').insertAdjacentElement(position,button);
      }
    }

    function importFailed (output,callback) {
      output.remove();
      if (callback) {
        callback(null);
      }
    }
  }
  function processEntry (entry) {
    if (!entry) {
      return false;
    }
    let src = entry.getAttribute('src');
    if (!src) {
      let html = entry.innerHTML;
      // TODO: somehow dialog?
      return false;
    }
    if (!__artist_hasOne()) {
      document.location.href = src;
      return true;
    }
    return false;
  }
  function processElement(tag,modifier,cascadeCall) {
    let element = tag.querySelector('svgdraw-'+modifier);
    if (!element) {
      return null;
    }
    if (modifier==='entry') {
      return processEntry(element);
    }
    let output = document.createElement('output');
    output.id = modifier;
    APP.root.appendChild(output);
    if (false) {
    } if (modifier==='board') {
       processBoard(element, output);
    } if (modifier==='menu') {
       processMenu(element, output);
    } if (modifier==='operation') {
       processOperation(element, output);
    } if (modifier==='extensions') {
       processExtensions(element, output);
    }
    if (cascadeCall) {
      cascadeCall();
    }
  }
  function processTag(tag) {
    if(processElement(tag,'entry')){
      return;
    }
    processElement(tag,'board',()=>
      processElement(tag,'menu',()=>
        processElement(tag,'operation',()=>
          processElement(tag,'extensions',()=>{})
        )
      )
    );
  }
})();
