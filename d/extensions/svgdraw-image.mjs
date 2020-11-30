import {__svgToImageDataB64} from  './svgToImageDataB64.mjs';
import {__artist_hasOne, __artist_one} from  '../artist.mjs';
import {__fetch_upload,__checkif_iOS,__enable_emoji} from  '../utilities.mjs';

// commment 'export if no module supported
export
function setup(app,tag,output,base) {

  let IMAGE = {
    svg: app.svg,
    hooks: {
      overwrite: ['processSave']
    },
    save: {
      download: null,
      button: null, 
      savedIndex: null,
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
  base.insertButton ('image/save','⬇️','image');
  IMAGE.save.button = base.bindMenuCallback('image/save',processSave);
  __enable_emoji(IMAGE.save.button,false);
  base.bindHook('operation', output,'index', operationHook);
  base.exposeHook('image',IMAGE);
  return build;
  
  function build (param) {
    return;
  }
  function operationHook (value) {
    let disabled = '';
    let flag = (value>3);
    if (!flag) {
      disabled = 'disabled';
    }
    let button = IMAGE.save.button;
    button.disabled = disabled;
    __enable_emoji(button,flag);
  }
  function processSave(e) {
      __svgToImageDataB64(IMAGE.svg, param=>{

        base.callHooks(IMAGE,'preProcessSave',param);

        if (!base.callHooks(IMAGE,'processSave',param)) {
          if (!IMAGE.download) {
            let download = document.createElement('a');
            IMAGE.download = download;
            IMAGE.output.appendChild(download);
          }
          IMAGE.download.download = param.filename;
          IMAGE.download.href = param.dataurl;
          IMAGE.download.click();
        }

        base.callHooks(IMAGE,'postProcessSave',param);
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
