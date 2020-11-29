import {__svgToImageDataB64} from  './svgToImageDataB64.mjs';
import {__artist_hasOne, __artist_one} from  '../artist.mjs';
import {__fetch_upload,__checkif_iOS,__enable_emoji} from  '../utilities.mjs';

// commment 'export if no module supported
export
function setup(app,output,
               insertButton,bindMenuCallback) {

console.log(1111);
  let IMAGE = {
    svg: app.svg,
    save: {
      download: null,
      button: null, 
    },
    upload: {
      enabled: true,
      url: 'https://script.google.com/a/tessellation.jp/macros/s/AKfycbyTAABGkacaN4mBGzA1oO7fYMZukpF_lMt6kUtvrg/exec'
    },
    draw: {
      image: null,
      button: null,
    },
  };
  IMAGE.output = output;

  insertButton ('image/draw','🖍');
  insertButton ('image/save','⬇️');

  IMAGE.save.button = bindMenuCallback('image/save',click);
  IMAGE.draw.button = bindMenuCallback('image/draw',null);

  bindOperationCallback(app.menu.commands);
  return build;
  
  function build (param) {
    return;
  }
  function bindOperationCallback (key, value) {
    if (key==='index') {
      let disabled = '';
      if (value<3) {
        disabled = 'disabled';
      }
      IMAGE.save.button.disabled = disabled;
    }
  }

  function click(e) {
      if (!IMAGE.enabled) {
        return false;
      }
      __svgToImageDataB64(IMAGE.svg, param=>{
        if (!__checkif_iOS()) {
          if (!IMAGE.download) {
            let download = document.createElement('a');
            IMAGE.download = download;
            IMAGE.output.appendChild(download);
          }
          IMAGE.download.download = param.filename;
          IMAGE.download.href = param.dataurl;
          IMAGE.download.click();
        } else {
          let image = IMAGE.draw.image;
          if (!image) {
            image = new Image();
            IMAGE.draw.image = image;
            image.style.display = 'none';
            IMAGE.output.appendChild(image);
          }
          image,src = param.dataurl;
          image.style.display = 'block';
          IMAGE.svg.style.display = 'none';
        }
        if (IMAGE.upload.enabled) {
          fetch_upload(param);
        }
        return;
      });
  }
  function fetch_upload (param) {
    let body = new FormData();
    let artist = __artist_one();
    body.append('filename',artist + '_' + param.filename);
    body.append('type',param.type);
    body.append('content',param.content);
    __fetch_upload(IMAGE.upload.url, body,null,e=>{console.error(e)});
  }
}
