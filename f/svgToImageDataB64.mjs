export function __svgToImageDataB64(svgElement, callback) {
  let canvas = document.createElement('canvas');
  let svgwidth = svgElement.width.baseVal.value;
  let svgheight = svgElement.height.baseVal.value;
  canvas.width = svgwidth;
  canvas.height = svgheight;
  let ctx = canvas.getContext('2d');
  let image = new Image();
  image.addEventListener('load',()=>{
    ctx.drawImage(image, 0, 0, svgwidth, svgheight);
    let type = 'image/png';
    toB64(canvas,callback,type);
  });
  image.addEventListener('error',e=>console.error(e));
  var svgData = new XMLSerializer().serializeToString(svgElement);
  // use of btoa
  image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svgData);
}
function toB64(canvas,callback,type) {
  let dataurl = canvas.toDataURL(type);
  callback(getFormData(dataurl));
}
function getFormData (dataurl) {
  return {
    filename: getFileName(),
    type: 'image/png',
    content: dataurl.split(',')[1],
    dataurl: dataurl,
  };
}
function getFileName() {
  let pathname = document.location.pathname;
  let name = '';
  if (/([^\/]+)$/.exec(pathname)) {
    pathname = RegExp.$1;
    if (/^([^\?#.]+)/.exec(pathname)) {
       name = RegExp.$1;
    }
  }
  return name+getDateStr()+'.png';
}
function getDateStr() {
  let date = new Date();
  let millisec = date.getMilliseconds();
  if (millisec<10) {
    millisec = '00'+millisec;
  } else if (millisec<100) {
    millisec = '0'+millisec;
  }
  let options = { year: 'numeric', month: '2-digit', day: '2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'};
  return date.toLocaleString('ja-JP',options).replace(/(\/|:)/g,'').replace(/ /g,'_')+'_'+millisec;
}
