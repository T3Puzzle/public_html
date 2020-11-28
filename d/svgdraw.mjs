import {__artist_hasOne, __artist_one} from  './artist.mjs';
import {__enable_emoji} from  './utilities.mjs';
(()=>{
  let APP = {
    root: null,
    svg: null,
    menu: {
      commands:{},
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

  function processCommand(button, command) {
    __enable_emoji(button,true);
    let cmd = command.toLowerCase();
    APP.menu.commands[cmd] = button;
  }
  function processButton(button,bgcolor) {
    button.style['background-color']=bgcolor;
    let command = button.getAttribute('x-cmd');
    if (command) {
       processCommand(button,command);
    }
  }
  function processAnchor(anchor) {
    anchor.target = '_blank';
  }
  function processMenu (menu,output) {
    let bgcolor = menu.getAttribute('bgcolor') || '#bbbbbb';
    let anchors = menu.querySelectorAll('a');
    for (let ai=0;ai<anchors.length;ai++) {
      processAnchor(anchors[ai]);
    }
    let buttons = menu.querySelectorAll('button');
    for (let bi=0;bi<buttons.length;bi++) {
      processButton(buttons[bi],bgcolor);
    }
    output.style = `position:fixed;bottom:0;background-color:${bgcolor};`;
    output.innerHTML = menu.innerHTML;
  }
  function processBoard (board,output){
    let type = board.getAttribute('type') || 'module';
    if (type==='module') {
      importModule (board,output,'./svgdraw_board.mjs',
        build=>{
           initBoard(build,board,output);
        });
    } else {
      // TODO:  support type=svg src
    }
    return;

    function initBoard (build,board,output) {
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
    importModule (operation,output,'./svgdraw_operation.mjs',null);
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
    import(src)
    .then(module=>{
       if (!output.id || output.id.trim().length===0) {
         output.id = src.replace(/\.[^\.]+$/,'').replace(/^\.\//,'').replace(/^extensions\//,'');
       }
console.log(output.id);
       let ret  = module.setup(APP,output);
       if (callback) {
         callback(ret);
       }
    }).catch(e=>{
      console.error(e);
      importFailed(output,callback);
    });

    function importFailed (output,callback) {
      output.remove();
      if (callback) {
        callback(null);
      }
    }
  }
  function processEntry (entry,output) {
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
  function processElement(tag,modifier,callback) {
    let element = tag.querySelector('svgdraw-'+modifier);
    if (!element) {
      return null;
    }
    let output = document.createElement('output');
    output.id = modifier;
    APP.root.appendChild(output);
    if (false) {
    } if (modifier==='entry') {
       processEntry(element, output);
    } if (modifier==='board') {
       processBoard(element, output);
    } if (modifier==='menu') {
       processMenu(element, output);
    } if (modifier==='operation') {
       processOperation(element, output);
    } if (modifier==='extensions') {
       processExtensions(element, output);
    }
    if (callback) {
      callback();
    }
  }
  function processTag(tag) {
    if(processElement(tag,'entry',null)) {
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
