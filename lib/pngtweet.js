(()=>{
let url='https://script.google.com/macros/s/AKfycbwYsNGW1IVtx7k9on66zCz3F9fOso-9IoR-w01-T7jbPR_UdQM8/exec';
let upload=null;
let filename=null;
let config='svgconfig';
let svgoutput='svgoutput';
let me=document.currentScript;
let src=me.src;
let key=getKey(src);
let name='pngupload';
me.insertAdjacentHTML('afterend',`<output class="${name}"></output>`);
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<a class="${name}" style="text-decoration:none;vertical-align:0.2em;font-size:300%;margin-right:0.5em;">⬆</a>
`);
  let me = document.body.querySelector(`output.${name}`);
  me.insertAdjacentHTML('beforeend',`
<form target="_top" action="${url}" method="post" style="display:none;">
<input name="filename">
<input name="type">
<input name="href">
<input name="content">
<input name="method" value="tweet">
</form>
`);
  upload = output.querySelector(`a.${name}`);
  filename = getFileName();
  upload.href = '#';
  upload.addEventListener('click', click);
});
function svgToImageDataB64(svgElement, callback) {
  let canvas = document.createElement('canvas');
  svgwidth = svgElement.width.baseVal.value;
  svgheight = svgElement.height.baseVal.value;
  canvas.width = 2*svgwidth;
  canvas.height = 2*svgheight;
  let ctx = canvas.getContext('2d');
  let image = new Image();
  image.addEventListener('load',()=>{
    ctx.drawImage(image, 0, 0, svgwidth, svgheight, svgwidth/2, 0, svgwidth, svgheight);
    let type = 'image/png';
    toB64(canvas,callback,type);
  });
  image.addEventListener('error',e=>console.error(e));
  var svgData = new XMLSerializer().serializeToString(svgElement);
  // use of btoa
  image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svgData);
}
function toB64(canvas,callback,type) {
  //canvas.toBlob(callback,type);
  let dataurl = canvas.toDataURL(type);
  let b64 = dataurl.split(',')[1];
  callback(b64);
}
function click(e) {
  localStorge.setItem(key+'Tweet',key);
  let svgElement = document.body.querySelector(`output.${svgoutput} svg`);
  svgToImageDataB64(svgElement, data=>{
  document.querySelector(`output.${name} input[name="filename"]`).value = filename+getDateStr()+'.png';
    document.querySelector(`output.${name} input[name="type"]`).value = 'image/png';
    document.querySelector(`output.${name} input[name="href"]`).value = window.location.href;
    document.querySelector(`output.${name} input[name="content"]`).value = data;
    document.querySelector(`output.${name} form`).submit();
    return;
  });
}
function getFileName() {
  let pathname = document.location.pathname;
  let name = '_';
  if (/([^\/]+)$/.exec(pathname)) {
    pathname = RegExp.$1;
    if (/^([^\?#.]+)/.exec(pathname)) {
       name = RegExp.$1;
    }
  }
  return name;
}
function getDateStr() {
  let date = new Date();
  let millisec = date.getMilliseconds();
  if (millisec<1) {
    millisec = '000';
  } else if (millisec<10) {
    millisec = '00'+millisec;
  } else if (millisec<100) {
    millisec = '0'+millisec;
  }
  let options = { year: 'numeric', month: '2-digit', day: '2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'};
  return date.toLocaleString('ja-JP',options).replace(/(\/|:)/g,'').replace(/ /g,'_')+'_'+millisec;
}
function getKey(src) {
  if (/\?key=([^&#]+)/.test(src)) {
    return RegExp.$1;
  } else {
    return '_';
  }
}
})();
