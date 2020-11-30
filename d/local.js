(()=>{
  if (document.location.href.indexOf('file://')!==0) {
    return;
  }
  let xsrc = document.currentScript.getAttribute('x-src');
  window.addEventListener('error', e=>{
    if (e.target.nodeName === 'SCRIPT') {
      if (e.target.getAttribute('src') === xsrc) {
        alert('Use Safari with local');
      }
    }
  },true);
})();
