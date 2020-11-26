import {__svgdraw_data} from './svgdraw_data.mjs';
import {__svgdraw_init} from './svgdraw_oper.mjs';
import {__svgdraw_save} from  './svgdraw_save.mjs';
(()=>{
  let APP = {
    name: 't3',
    parent: null,
    svg: null,
    command: {
      history: [],
      current: { index: 0 },
      handler: null,
    },
  };
  
  class SvgdrawApp extends HTMLElement {
    connectedCallback() {
      APP.parent = this.attachShadow({mode:'open'});
      setTimeout(()=>processTags(this),0);
    }
  }
  customElements.define('svgdraw-app',SvgdrawApp);

  function processCmd(tag) {
    let tagName = tag.tagName;
    let tagText = tag.innerText;
    let res = wrapAnchor(wrapSpan(tagText,300,0.2));
    if (false) {
    } else if (tagName === 'SVGDRAW-COMMAND-SAVE') {
      __svgdraw_save(tag,res,APP);
    } else if (tagName === 'SVGDRAW-COMMAND-UNDO') {
      APP.command.handler.undo(tag,res,APP);
    } else if (tagName === 'SVGDRAW-COMMAND-REDO') {
      APP.command.handler.redo(tag,res,APP);
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
    anchor.style=`text-decoration:none;`;
    anchor.appendChild(tag);
    return anchor;
  }
  function processTags(svgdraw_app) {
    if(moveToEntry (svgdraw_app)) {
      return;
    }
    APP.svg = __svgdraw_data();
    APP.parent.appendChild(APP.svg);//.insertAdjacentElement('afterend',APP.svg);
    APP.command.handler = __svgdraw_init(APP);

    let menu = svgdraw_app.querySelector('svgdraw-menu');
    let bgcolor = menu.getAttribute('bgcolor') || '#bbbbbb';
    let output = document.createElement('output');
    for (let i=0;i<menu.children.length;i++) {
      let child = createSvgdrawTag(menu.children[i]);
      output.appendChild(child);
    }
    output.style = `position:fixed;bottom:0;background-color:${bgcolor};`;
    APP.parent.appendChild(output);//insertAdjacentElement('afterend',output);
  }
  function moveToEntry (svgdraw_app) {
    let entry = svgdraw_app.querySelector('svgdraw-entry');
    if (!entry) {
      return false;
    }
    let href = entry.getAttribute('href');
    if (!href) {
      return false;
    }
    let artist = localStorage.getItem('artist');
    if (!(artist && artist.toString().trim().length>0)) {
      document.location.href = href;
      return true;
    }
    return false;
  }
})();
