import {__svgToImageDataB64} from  './svgToImageDataB64.mjs';
import {__artist_hasOne, __artist_one} from  './artist.mjs';
import {__fetch_upload,__checkif_iOS} from  './utilities.mjs';

let SAVE = {
  fetch: {
    enabled: true,
    url: 'https://script.google.com/a/tessellation.jp/macros/s/AKfycbyTAABGkacaN4mBGzA1oO7fYMZukpF_lMt6kUtvrg/exec'
  }
};
export function __svgdraw_draw(tag,anchor,app) {
  app.save.icon.draw = tag.innerText;
}
export function __enableAnchor (anchor,flag,app) {
  app.save.enabled = flag;
  if (flag) {
    anchor.style.filter = '';
    anchor.disabled = '';
  } else {
    anchor.style.filter = 'contrast(40%) grayscale(100%)';
    anchor.disabled = 'disabled';
  }
}
export function __svgdraw_save(tag,anchor,app) {
    app.save.anchor = anchor;
    app.save.icon.save = tag.innerText;
    anchor.href = '#';
    anchor.target = '_self';
    anchor.addEventListener('click',e=>click(e,app.svg));
    __enableAnchor(anchor,false,app);
    return;

    function click(e,svg) {
      if (app.command.current.index<3) {
        return false;
      }
      if (!app.save.enabled) {
        return false;
      }
      __svgToImageDataB64(svg, param=>{
        if (!__checkif_iOS()) {
          app.save.download.download = param.filename;
          app.save.download.href = param.dataurl;
          app.save.download.click();
        } else {
          app.svg.style.display = 'none';
          app.img.src = param.dataurl;
          app.imgdiv.style.display = '';
        }
        if (SAVE.fetch.enabled) {
          fetch_upload(param);
        }
        return;
      });
    }
}
function fetch_upload (param) {
  let body = new FormData();
  let artist = __artist_one();
  body.append('filename',artist + '_' + param.filename);
  body.append('type',param.type);
  body.append('content',param.content);
  __fetch_upload(SAVE.fetch.url, body,null,e=>{console.error(e)});
}
