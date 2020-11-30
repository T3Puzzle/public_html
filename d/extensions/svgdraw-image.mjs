import {__svgToImageDataB64} from  './svgToImageDataB64.mjs';
import {__artist_hasOne, __artist_one} from  '../artist.mjs';
import {__fetch_upload,__checkif_iOS,__enable_emoji} from  '../utilities.mjs';

// commment 'export if no module supported
export
function setup(app,tag,output,base) {

  let IMAGE = {
    shared: {
      debug: app.debug, // to be update
      root: app.root,
      svg: app.svg,
    },
    hooks: {
      overwrite: ['processSave']
    },
    save: {
      download: null,
      button: null, 
      savedIndex: null, // TODO
    },
  };
  IMAGE.output = output;
  base.insertButton ('image/save','⬇️','image');
  base.bindHook('menu',output,'image/save',processSave,IMAGE.save);
  __enable_emoji(IMAGE.save.button,false);
  base.bindHook('operation', output,'index', processIndex);
  base.exposeHook('image',IMAGE);
  return build;
  
  function build (param) {
    return;
  }
  function processIndex (operation,value) {
    let disabled = '';
    let flag = (value>3);
    if (!flag) {
      disabled = 'disabled';
    }
    let button = IMAGE.save.button;
    button.disabled = disabled;
    __enable_emoji(button,flag);
  }
  function processSave(menu,e) {
      __svgToImageDataB64(IMAGE.shared.svg, param=>{

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
}
