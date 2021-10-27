(()=>{
function messageIframe () {
  return ()=> {
     test: 2  
  };
function getOrigin (type){
  if (window.location.protocol==='file:') {
    if (type==="sender") {
      return "*";
    } else {
      return "null";
    }
  } else {
    return window.location.origin+window.location.pathname.replace(/\/[^\/]+$/,"")+"/";
  }
}
}
//export {messageIframe};
_export({messageIframe});
function _export(j){document.currentScript.setAttribute("x-module",(()=>{for(let k in j){j[k]=j[k].toString()};return JSON.stringify(j)})())}
})();
