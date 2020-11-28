import {__artist_hasOne, __artist_one} from  './artist.mjs';
import {__fetch_upload} from  './utilities.mjs';

(()=>{
  let APP = {
    parent: null,
    filename: '',
    type: 'image/png',
    body: null,
    canvas: null,
    button: null,
    url: 'https://script.google.com/a/tessellation.jp/macros/s/AKfycbyTAABGkacaN4mBGzA1oO7fYMZukpF_lMt6kUtvrg/exec'
  };
  class ImgUpload extends HTMLElement {
    connectedCallback() {
       APP.parent = this.attachShadow({mode:'open'}); 
       setTimeout(()=>processTag(this),0);
    }
  }
  customElements.define('img-upload',ImgUpload);
  return;

  function processTag (tag) {
    let fileinput = document.createElement('input');
    fileinput.type = 'file';
    fileinput.accept = 'image/*';
    APP.parent.appendChild(fileinput);
    APP.parent.appendChild(document.createElement('br'));
    let canvas = document.createElement('canvas');
    APP.canvas = canvas;
    APP.parent.appendChild(canvas);
    let button = document.createElement('button');
    APP.button = button;
    APP.parent.appendChild(document.createElement('br'));
    button.innerText = 'アップロード開始';
    button.disabled = 'disabled';
    button.style = `appearance: none;
  display:none;
  border: 0;
  border-radius: 5px;
  background: #4676D7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;`;

    APP.parent.appendChild(button);
    fileinput.addEventListener('change', 
      e=>drawImage(e,canvas,setBody));
    button.addEventListener('click',
      doPost);
  }
  function setBody(canvas) {
    let dataurl = canvas.toDataURL(APP.type);
    let body = new FormData();
    body.append('content',dataurl.split(',')[1]);
    body.append('filename',APP.filename);
    body.append('type',APP.type);
    APP.body = body;
    APP.button.style.display = '';
    APP.button.disabled = '';
  }
  function doPost () {
    APP.button.disabled = 'disabled';
    APP.button.innerText = 'アップロード中…';
    __fetch_upload(APP.url, APP.body,
      j=>{
	APP.button.innerText = 'アップロード完了';
      },
      e=>{
        console.error(e);
        APP.button.innerText = 'アップロード失敗';
      }
    );
  }
  function convWidthHeight(image) {
    let max = 400;
    let width = image.width;
    let height = image.height;
    if (width<height) {
      width *= max/height;
      height = max;
    } else {
      height *= max/width;
      width = max;
    }
    return {width:width,height:height};
  }
  function drawImage(e,disp,callback) {
    let image = new Image();
    image.addEventListener('load', function() {
      let wh = convWidthHeight(image);
      disp.setAttribute('width',wh.width);
      disp.setAttribute('height',wh.height);
      disp.getContext('2d').drawImage(this, 0, 0, disp.width, disp.height);
      callback(disp);
    });
    let reader = new FileReader();
    reader.addEventListener('load',function(e) {
      image.src = e.target.result;
    });
    reader.readAsDataURL(e.target.files[0]);
    let filename = __artist_one()+'_'+e.target.files[0].name;
    APP.filename = filename.replace(/\.[^\.]+$/,'.png');
  }
})();
