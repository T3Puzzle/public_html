import {__svgdraw_data} from './svgdraw_data.mjs';
import {__svgdraw_init} from './svgdraw_oper.mjs';
import {__enableAnchor,__svgdraw_draw,__svgdraw_save} from './svgdraw_save.mjs';
import {__artist_hasOne, __artist_one} from  './artist.mjs';
(()=>{
  let APP = {
    parent: null,
    svg: null,
    imgdiv: null,
    img: null,
    command: {
      history: [],
      current: { index: 0 },
      handler: null,
      listener: indexUpdated,
    },
    save: {
      download: null,
      anchor: null,
      enabled: false,
      icon: {
        save: '',
        edit: '',
      }
    },
  };
  
  class SvgdrawApp extends HTMLElement {
    connectedCallback() {
      this.style.display = 'block';
      APP.parent = this.attachShadow({mode:'open'});
      setTimeout(()=>processTag(this),0);
      APP.imgdiv = this;
    }
  }
  customElements.define('svgdraw-app',SvgdrawApp);
  return;

  function indexUpdated (index) {
    __enableAnchor(APP.save.anchor,(index>3),APP);
  }
  function processCmd(cmd) {
    let tagName = cmd.tagName;
    let tagText = cmd.innerText;
    let res = wrapAnchor(wrapSpan(tagText,300,0.2));
    if (false) {
    } else if (tagName === 'SVGDRAW-COMMAND-SAVE') {
      __svgdraw_save(cmd,res,APP);
    } else if (tagName === 'SVGDRAW-COMMAND-DRAW') {
      __svgdraw_draw(cmd,res,APP);
      res = null;
    } else if (tagName === 'SVGDRAW-COMMAND-UNDO') {
      APP.command.handler.undo(cmd,res,APP);
    } else if (tagName === 'SVGDRAW-COMMAND-REDO') {
      APP.command.handler.redo(cmd,res,APP);
    }
    return res;
  }
  function createSvgdrawTag(tag) {
    let tagName = tag.tagName;
    let tagText = tag.innerText;
    let res;
    if (false) {
    } else if (tagName.indexOf('SVGDRAW-COMMAND-')===0){
       res = processCmd(tag);
    } else if (tagName === 'SVGDRAW-ANCHOR') {
       res = wrapAnchor(wrapSpan(tagText), tag.getAttribute('href'));
    } else if (tagName === 'SVGDRAW-TEXT') {
       res = wrapSpan(tagText);
    } else {
       res = null;
    }
    return res;
  }
  function wrapSpan(text,_scale,_margin) {
    let scale = 100;
    if (_scale) {
      scale = _scale;
    }
    let margin = 0.2;
    if (_margin) {
      margin = _margin;
    }
    let span = document.createElement('span');
    span.style=`word-wrap: break-word;text-decoration:none;vertical-align:${margin}em;font-size:${scale}%;margin-right:${margin}em;`;
    span.textContent=text;
    return span;
  }
  function wrapAnchor(tag,url) {
    let anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.style['text-decoration'] ='none';
    anchor.style['font-family'] =['Apple Color Emoji', 'Android Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'Noto Sans Emoji', 'Noto Sans Symbols', 'Noto Emoji', 'Gecko Emoji'];
    anchor.style['filter'] ='';
    anchor.appendChild(tag);
    return anchor;
  }
  function processTag(tag) {
    if(moveToEntry (tag)) {
      return;
    }
    {
      let output = document.createElement('output');
      output.innerHTML = __svgdraw_data();
      APP.svg = output.querySelector('svg');
      let width = APP.svg.width.baseVal.value;;
      let height = APP.svg.height.baseVal.value;
      APP.svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
      APP.svg.setAttribute('preserveAspectRatio','xMidYMid meet');
      APP.svg.style.display = 'block';
      APP.svg.style.top = '0';
      APP.svg.style.left = '0';
      APP.svg.style.width = '100%';
      APP.svg.style['max-width'] = `${2*width}px`;
      APP.svg.style.height = '100%';
    }
    APP.parent.appendChild(APP.svg);
    APP.command.handler = __svgdraw_init(APP);
    {
      let menu = tag.querySelector('svgdraw-menu');
      let bgcolor = menu.getAttribute('bgcolor') || '#bbbbbb';
      let output = document.createElement('output');
      for (let i=0;i<menu.children.length;i++) {
        let child = createSvgdrawTag(menu.children[i]);
        if (child) {
          output.appendChild(child);
        }
      }
      output.style = `position:fixed;bottom:0;background-color:${bgcolor};`;
      APP.parent.appendChild(output);
      let download = document.createElement('a');
      APP.save.download = download;
      APP.parent.appendChild(download);
      APP.imgdiv = document.createElement('div');
      APP.img = new Image();
      APP.imgdiv.insertAdjacentElement('afterend',APP.img);
      //APP.imgdiv.style.display = 'none';
      //APP.imgdiv.appendChild(APP.img);
      //APP.parent.appendChild(APP.imgdiv);
    }
  }
  function moveToEntry (tag) {
    let entry = tag.querySelector('svgdraw-entry');
    if (!entry) {
      return false;
    }
    let href = entry.getAttribute('href');
    if (!href) {
      return false;
    }
    if (!__artist_hasOne()) {
      document.location.href = href;
      return true;
    }
    return false;
  }
})();
