document.currentScript.insertAdjacentHTML('afterend',`
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
