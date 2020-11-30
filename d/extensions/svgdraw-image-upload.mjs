import {__fetch_upload} from  '../utilities.mjs';

// commment 'export if no module supported
export
function setup(app,tag,output,base) {

  let IMAGE_UPLOAD = {
    output: output,
    svg: app.svg,
    enabled: true,
    url: 'https://script.google.com/a/tessellation.jp/macros/s/AKfycbyTAABGkacaN4mBGzA1oO7fYMZukpF_lMt6kUtvrg/exec'
  };
  let url = tag.getAttribute('url');
  if (url) {
    IMAGE_UPLOAD.url = url;
    if (url.length===0) {
       IMAGE_UPLOAD.enabled = false;
    }
  }
  base.bindHook('image',output,'postProcessSave',fetch_upload);
  return build;
  
  function build (param) {
    return;
  }
  function fetch_upload (param) {
    if (IMAGE_UPLOAD.upload.enabled) {
      return;
    }
    let body = new FormData();
    let artist = __artist_one();
    body.append('filename',artist + '_' + param.filename);
    body.append('type',param.type);
    body.append('content',param.content);
    __fetch_upload(IMAGE_UPLOAD.url, body,null,e=>{console.error(e)});
    return true;
  }
}
