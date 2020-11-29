import {__svgToImageDataB64} from  './svgToImageDataB64.mjs';
import {__artist_hasOne, __artist_one} from  '../artist.mjs';
import {__fetch_upload,__checkif_iOS,__enable_emoji} from  '../utilities.mjs';

// commment 'export if no module supported
export
function setup(app,tag,output,
               insertButton,bindMenuCallback) {

  let IMAGE = {
    svg: app.svg,
    save: {
      download: null,
      button: null, 
      savedIndex: null,
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
  let url = tag.getAttribute('url');
  if (url) {
    IMAGE.upload.url = url;
    if (url.length===0) {
       IMAGE.upload.enabled = false;
    }
  }
  IMAGE.output = output;

  insertButton ('image/draw','🖍');
  insertButton ('image/save','⬇️');


  IMAGE.save.button = bindMenuCallback('image/save',processSave);
  IMAGE.draw.button = bindMenuCallback('image/draw',processDraw);

  showDrawButton(false);

  __enable_emoji(IMAGE.save.button,false);

  if ('operation' in app.providers ) {
    app.providers.operation.register(output, operationCallback);
  }
  return build;
  
  function showDrawButton(flag) {
    if (flag) {
      IMAGE.save.button.style.display = 'none';
      IMAGE.draw.button.style.display = '';
    } else {
      IMAGE.save.button.style.display = '';
      IMAGE.draw.button.style.display = 'none';
    }
  }
  function build (param) {
    return;
  }
  function operationCallback (key, value) {
    if (key==='index') {
      let disabled = '';
      let flag = (value>3);
      if (!flag) {
        disabled = 'disabled';
      }
      let button = IMAGE.save.button;
      button.disabled = disabled;
      __enable_emoji(button,flag);
    }
  }

  function processDraw(e) {
    if (__checkif_iOS()) {
      showDrawButton(false);
      IMAGE.draw.image.style.display = 'none';
      IMAGE.svg.style.display = 'block';
    }
  }
  function processSave(e) {
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
          image.src = param.dataurl;
          image.style.display = 'block';
          IMAGE.svg.style.display = 'none';
          showDrawButton(true);
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
