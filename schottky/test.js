(()=>{
  let url = `./?CanvasSeed%5B%5D=0,0,1,1,1&displayMode=iframe&scale=5,1,10&translateX=1&translateY=-0.5`;
  document.body.insertAdjacentHTML('beforeend',`
  <canvas width="100" height="100"></canvas>
  <a href="#" onclick="document.querySelector('iframe').src='${url}';">click me</a>
`);
  let iframe = document.querySelector('iframe');
  iframe.src = url;
  iframe.addEventListener('load',loadIframe);
  return;

  function loadIframe (ev) {
    try {
      let iframewin = document.querySelector('iframe').contentWindow;
      let dst = document.querySelector('canvas');
      let ctx = dst.getContext('2d');
      ctx.fillStyle = 'orange';
      ctx.fillRect(0,0,100,100);
      let data = dst.toDataURL();
      iframewin.changeCanvasSeedTextureURL(data);

      if (/twice/.test(window.location.search)) {
        console.log('twice');
        window.setTimeout(()=>{
          let dst = document.querySelector('canvas#dst');
          let data = dst.toDataURL();
          iframewin.changeCanvasSeedTextureURL(data);
        });
      }
    } catch (e) {
      console.log(e);
    }
    return;
  }
})();
