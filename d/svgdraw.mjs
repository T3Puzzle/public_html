import {__artist_hasOne, __artist_one} from  './artist.mjs';
import {__enable_emoji} from  './utilities.mjs';
(()=>{
  let APP = {
    debug: true,
    root: null,
    svg: null,
    commands:{},
    providers: {},
    board: {
      src: './svgdraw-board.mjs', // const
    },
    operation: {
      src: './svgdraw-operation.mjs', // const
    },
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
    let type = '';
    let src = '';
    let innerHTML = '';
    if (board) {
      type = board.getAttribute('type') || type;
      src = board.getAttribute('src') || type;
      innerHTML = board.innerHTML.trim();
    }
    if (type==='' && src==='' && innnerHTML.length>0) {
      // TODO:  innerHTML
    }
    if (type==='') {
      type = 'module';
    }
    if (src==='') {
      src = APP.board.src;
    }
    if (type==='module') {
      importModule (board,output,src,
        build=>{
           buildBoard(build,board,output);
        });
    } else if (type==='svg') {
      // TODO:  support type=svg src
    } else {
      // nop
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
    importModule (operation,output,APP.operation.src,null);
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
    importModuleSub(tag,output,src,callback,e=>{
      console.error(e);
      if (_src!=='' && _src!==src) {
        importModuleSub(tag,output,_src,callback,()=>{});
      } else {
        importFailed(output,callback);
      }
    });
    function importModuleSub (tag,output,src,successCallback,errorCallback) {
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
          bindHook: bindHook,
          unbindHook: unbindHook,
          exposeHook: exposeHook,
          callHooks: callHooks,
        });
        if (successCallback) {
           successCallback(ret);
        }
      }).catch(e=>{
        if (errorCallback) {
           errorCallback(e);
        }
      });
    }
    function callHooks (ENV, key, value) {
      if (!('hooks' in ENV)) {
        return;
      }
      let hooksMap = ENV.hooks.map.values();
      let res = false;
      while(true) {
        let hooks = hooksMap.next();
        if (hooks.done) {
          break;
        } else {
          let hook = hooks.value.get(key);
          if (hook) {
            res = res || hook(value);
          }
        }
      }
      return res;
    }
    function exposeHook (module,ENV) {
      if (!('hooks' in ENV)) {
        ENV.hooks = { map: new Map()};
      }
      if (!('map' in ENV.hooks)) {
        ENV.hooks.map = new Map();
      }
      if (!('overwrite' in ENV.hooks)) {
        ENV.hooks.overwrite = [];
      }
      APP.providers[module] = {
        bind: (obj, subkey, hook,outobj)=>{
          if (ENV.overwrite) {
            if (ENV.hooks.map.size>=1) {
              return false;
            }
          }
          let submap = ENV.hooks.map.get(obj);
          if (!submap) {
            submap = new Map();
            ENV.hooks.map.set(obj,submap);
          }
          submap.set(subkey,hook);
          return true;
        },
        unbind: (obj,subkey)=>{
          if (!subkey) {
            ENV.hooks.map.delete(obj);
          } else {
            let submap = ENV.hooks.map.get(obj);
            if (submap) {
              submap.delete(subkey);
            }
          }
        }
      };
    }
    function bindHook (module,key,subkey,hook,outobj) {
      if (module === 'menu') {
        return bindHookMenu(subkey,hook,outobj);
      } else if (module in APP.providers ) {
        return APP.providers[module].bind(key,subkey,hook);
      }
      return false;
    }
    function unbindHook (key,subkey) {
      if (module in APP.providers ) {
        APP.providers[module].unbind(key,subkey,hook);
      }
    }
    function bindHookMenu(cmd,callback,outobj) {
      let button = APP.commands[cmd];
      if (!button) { return false; }
      button.addEventListener('click',_=>callback(button,_));
      if (outobj) {
        outobj.button = button;
      }
      return true;
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
    let href = entry.getAttribute('href');
    if (!href) {
      let html = entry.innerHTML;
      // TODO: somehow dialog?
      return false;
    }
    if (!__artist_hasOne()) {
      document.location.href = href;
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
