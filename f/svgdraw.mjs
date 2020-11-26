import {__svgdraw_data} from './svgdraw_data.mjs';
import {__svgdraw_init} from './svgdraw_oper.mjs';
import {__svgToImageDataB64} from  './svgToImageDataB64.mjs';
(()=>{
  let APP = {
    parent: null,
    svg: null,
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
    url: 'https://script.google.com/a/tessellation.jp/macros/s/AKfycbyTAABGkacaN4mBGzA1oO7fYMZukpF_lMt6kUtvrg/exec',
  };
  
  class SvgdrawApp extends HTMLElement {
    connectedCallback() {
      APP.parent = this.attachShadow({mode:'open'});
      setTimeout(()=>processTag(this),0);
    }
  }
  customElements.define('svgdraw-app',SvgdrawApp);

  function indexUpdated (index) {
    console.log(index);
    enableAnchor(APP.save.anchor,(index>3));
  }
  function svgdraw_draw(tag,anchor) {
    APP.save.icon.draw = tag.innerText;
  }
  function enableAnchor (anchor,flag) {
    APP.save.enabled = flag;
    if (flag) {
      anchor.style.filter = '';
      anchor.disabled = '';
    } else {
      anchor.style.filter = 'contrast(40%) grayscale(100%)';
      anchor.disabled = 'disabled';
    }
  }
  function isiOS () {
     const ua = window.navigator.userAgent.toLowerCase();
     return ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
  }
  function svgdraw_save(tag,anchor) {
    APP.save.anchor = anchor;
    APP.save.icon.save = tag.innerText;
    anchor.href = '#';
    anchor.target = '_self';
    anchor.addEventListener('click',e=>click(e,APP.svg));
    enableAnchor(anchor,false);
    return;

    function click(e,svg) {
      if (APP.command.current.index<3) {
        return false;
      }
      if (!APP.save.enabled) {
        return false;
      }
      let artist = localStorage.getItem('artist');
      if (!(artist && artist.toString().trim().length>0)) {
        artist = Math.random().toString(32).substring(2);
        localStorage.setItem('artist',artist);
      }
      __svgToImageDataB64(svg, formData=>{
        if (!isiOS()) {
          APP.save.download.download = formData.filename;
          APP.save.download.href = formData.dataurl;
          APP.save.download.click();
        }

        let body = new FormData();
        body.append('filename',artist + '_' + formData.filename);
        body.append('type',formData.type);
        body.append('content',formData.content);
        fetch(APP.url,{
          method: 'POST',
          body: body,
          mode: 'cors',
          redirect: 'follow',
        })
        .then(r=>r.json())
        .then(j=>{
          console.log('sucess');
          if (isiOS()) {
            APP.svg.style.display = 'none';
            APP.img.src = j.url;
            APP.img.style.display = 'block';
alert(3);
          }
        }).catch(e=>{
          console.error(e);
        });
        return;
      });
    }
  }
  function processCmd(cmd) {
    let tagName = cmd.tagName;
    let tagText = cmd.innerText;
    let res = wrapAnchor(wrapSpan(tagText,300,0.2));
    if (false) {
    } else if (tagName === 'SVGDRAW-COMMAND-SAVE') {
      svgdraw_save(cmd,res);
    } else if (tagName === 'SVGDRAW-COMMAND-DRAW') {
      svgdraw_draw(cmd,res);
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
      APP.img = new Image();
      APP.img.addEventListener('error',()=>alert(333));
      APP.img.style.display = 'none';
      APP.parent.appendChild(APP.img);
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
