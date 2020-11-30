export function runApp(tag) {
  fetch('./svgdraw-local.js')
  .then(r=>r.text())
  .then(t=>{
console.log(t);
     let func = eval(t);
     func(tag);
  });
}
