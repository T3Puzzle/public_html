(()=>{
  if (document.currentScript===null) {
    import('./svgdraw-module.mjs')
    .then(module=>{
      init(module.runApp);
    });
  } else {
    let s = document.createElement('script');
    s.src = './svgdraw-local.js';
    s.addEventListener('load',(e)=>init(s.export),false);
    document.currentScript.insertAdjacentElement('afterend',s);
  }
  function init(callback) {
    class SvgdrawApp extends HTMLElement {
      connectedCallback() {
        callback(this);
      }
    }
    customElements.define('svgdraw-app',SvgdrawApp);
  }
})();
