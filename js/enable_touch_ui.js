(()=>{
    document.currentScript.insertAdjacentHTML('afterend',`
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<style>
    body {
      user-select: none;
      touch-action: none;
      -webkit-user-select: none;
    }
</style>
`);

document.addEventListener("DOMContentLoaded", () => {  
  // bodyPreventMove
  ['touchmove','mousewheel'].map(n=>document.addEventListener(n, e=> e.preventDefault(),{passive: false}));
  // disable PC menu
  if ("ontouchend" in document) {
    Array.from(document.querySelectorAll('.ui__pc')).map(u=>u.style['display']='none');
  }
});
})();
