(()=>{ 

if (document.currentScript) {
   document.currentScript.export = testt;
}
return  testt;
function testt (tag) {
  alert(222);
}
})();
