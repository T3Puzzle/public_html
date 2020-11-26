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
      successCallback(j);
    }
  }).catch(e=>{
    if (errorCallback) {
      errorCallback(e);
    }
  });
}
