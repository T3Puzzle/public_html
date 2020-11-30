export function __enable_emoji(tag,flag) {
  let filter='';
  if (!flag) {
    filter = 'contrast(40%) grayscale(100%)';
  }
  //tag.style['border-style'] = 'none';
  tag.style['background-color'] = 'Transparent';
  tag.style['filter'] =filter;
  tag.style['font-size']='300%';
  tag.style['text-decoration'] ='none';
  tag.style['font-family'] =['Apple Color Emoji', 'Android Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'Noto Sans Emoji', 'Noto Sans Symbols', 'Noto Emoji', 'Gecko Emoji'];
}
export function __checkif_iOS () {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
}
export function __fetch_upload (url,body, successCallback,errorCallback) {
  fetch(url,{
    method: 'POST',
     body: body,
     mode: 'cors',
    redirect: 'follow',
  })
  .then(r=>r.json())
  .then(j=>{
    if (successCallback) {
      console.log('success');
      successCallback(j);
    }
  }).catch(e=>{
    if (errorCallback) {
      errorCallback(e);
    }
  });
}
