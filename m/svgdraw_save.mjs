export function __svgdraw_save(tag,anchor,app) {
  let url = tag.getAttribute('api');
  return uploadAsPng(url, anchor, app.svg, app.command.current);

function uploadAsPng(__url,__anchor,__svg,__current) {
  let url='https://script.google.com/macros/s/AKfycby6dVAXJv9HB0Ke7zgXg3rpymLlSDXRmhjxGQmt2Mr2gZiYIPqn/exec';
  if (__url) {
    url = __url;
  }
  let filename = getFileName();
  let form = createForm(url);
  __svg.insertAdjacentElement('afterend',form);
  __anchor.href = '#';
  __anchor.target = '_self';
  __anchor.addEventListener('click',e=>click(e,form,__svg,__current));
  return;

function createForm (url) {
  let form = document.createElement('form');
  form.target='_top';
  form.action=url;
  form.method='post';
  form.style.display='none';
  form.innerHTML =`
<input name="filename" value=${filename}>
<input name="touch">
<input name="type">
<input name="content">
`;
  return form;
}
function svgToImageDataB64(svgElement, callback) {
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
  //canvas.toBlob(callback,type);
  let dataurl = canvas.toDataURL(type);
  let b64 = dataurl.split(',')[1];
  callback(b64);
}
function click(e,form,svg,current) {
  if (current.index<3) {
    //return;
  }
  svgToImageDataB64(svg, data=>{
    form.querySelector(`input[name="filename"]`).value = filename+getDateStr()+'.png';
    if ('ontouchend' in document) {
      form.querySelector(`input[name="touch"]`).value = 'true';
    }
    form.querySelector(`input[name="type"]`).value = 'image/png'; 
    form.querySelector(`input[name="content"]`).value = data;
    form.submit();
    return;
  });
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
  let artist = localStorage.getItem('artist');
  if (!(artist && artist.toString().trim().length>0)) {
    artist = Math.random().toString(32).substring(2);
    localStorage.setItem('artist',artist);
  }
  return artist+'_'+name;
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
}
}
