(()=>{
let once=0;
let download=null;
let filename=null;
let config='svgconfig';
let svgoutput='svgoutput';
let me=document.currentScript;
let name='pngdownload';
me.insertAdjacentHTML('afterend',`<output class="${name}"></output>`);
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<a class="${name}" style="vertical-align:0.2em;font-size:300%;margin-right:0.5em;">⬇</a>
`);
  download = output.querySelector(`a.${name}`);
  filename = getFileName();
  download.href = '#';
  download.addEventListener('click', click,{passive:false});

});
function svgToImageData(svgElement, callback) {
  let canvas = document.createElement('canvas');
  canvas.width = svgElement.width.baseVal.value;
  canvas.height = svgElement.height.baseVal.value;
  let ctx = canvas.getContext('2d');
  let image = new Image();
  image.addEventListener('load',()=>{
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    let type = 'image/png';
    toBlob(canvas,callback,type);
  });
  image.addEventListener('error',e=>console.error(e));
  var svgData = new XMLSerializer().serializeToString(svgElement);
  // use of btoa
  image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svgData);
}
function toBlob(canvas,callback,type) {
  //canvas.toBlob(callback,type);
  let dataurl = canvas.toDataURL(type);
  let bin = atob(dataurl.split(',')[1]);
  let buffer = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) {
    buffer[i] = bin.charCodeAt(i);
  }
  let blob = new Blob([buffer.buffer], {type: type});
  callback(blob);
}
function click(e) {
  if (once===0) {
    e.preventDefault();
  }
  once++;
  download.download = filename + getDateStr() + '.png';
  let svgElement = document.body.querySelector(`output.${svgoutput} svg`);
  svgToImageData(svgElement, blob=>{
    e.target.href = window.URL.createObjectURL(blob);
    if (once===1) {
      window.setTimeout(()=>{
        e.target.click();
        window.setTimeout(()=>once=0,1000);
      },1000);
    }
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
})();
