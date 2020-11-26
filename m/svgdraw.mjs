import {__svgdraw_data} from './svgdraw_data.mjs';
import {__svgdraw_init} from './svgdraw_oper.mjs';
import {__svgToImageDataB64} from  './svgToImageDataB64.mjs';
(()=>{
  let APP = {
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
      setTimeout(()=>processTag(this),0);
    }
  }
  customElements.define('svgdraw-app',SvgdrawApp);

  function __svgdraw_save(tag,anchor,app) {
    // TODO: API
    let url = tag.getAttribute('api');
    return uploadAsPng(url, anchor, app.svg,
      ()=>(app.command.current.index>2)
    );

    function uploadAsPng(__url,__anchor,__svg,__callback) {
      let url='https://script.google.com/macros/s/AKfycby6dVAXJv9HB0Ke7zgXg3rpymLlSDXRmhjxGQmt2Mr2gZiYIPqn/exec';
    if (__url) {
      url = __url;
    }
    let form = createForm(url);
    __svg.insertAdjacentElement('afterend',form);
    __anchor.href = '#';
    __anchor.target = '_self';
    __anchor.addEventListener('click',e=>click(e,form,__svg,__callback));
    return;

  function click(e,form,svg,callback) {
    if (callback && !callback()) {
      return;
    }
    __svgToImageDataB64(svg, formData=>{
      form.querySelector(`input[name="filename"]`).value = formData.filename;
      form.querySelector(`input[name="type"]`).value = formData.type;
      form.querySelector(`input[name="touch"]`).value = formData.touch;
      form.querySelector(`input[name="content"]`).value = formData.content;
      form.submit();
      return;
    });
  }
  function createForm (url) {
    let form = document.createElement('form');
    form.target='_top';
    form.action=url;
    form.method='post';
    form.style.display='none';
    form.innerHTML =`
<input name="filename">
<input name="touch">
<input name="type">
<input name="content">
`;
  return form;
      }
    }
  }
  function processCmd(cmd) {
    let tagName = cmd.tagName;
    let tagText = cmd.innerText;
    let res = wrapAnchor(wrapSpan(tagText,300,0.2));
    if (false) {
    } else if (tagName === 'SVGDRAW-COMMAND-SAVE') {
      __svgdraw_save(cmd,res,APP);
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
        output.appendChild(child);
      }
      output.style = `position:fixed;bottom:0;background-color:${bgcolor};`;
      APP.parent.appendChild(output);
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
    let artist = localStorage.getItem('artist');
    if (!(artist && artist.toString().trim().length>0)) {
      document.location.href = href;
      return true;
    }
    return false;
  }
})();
