(()=>{
let urls = [
{'crown':'./crown2.svg'},
];
let me=document.currentScript;
let name='svgconfig';
me.insertAdjacentHTML('afterend',`<output class="${name}" style="position:fixed;bottom:0;background-color:#dddddd;"></output>`);
document.addEventListener('DOMContentLoaded',()=>{
   document.body.querySelector(`output.${name}`).insertAdjacentHTML('beforeend',getHtml());
});
function getHtml() {
  let hidden = 'style="display:none;"';
  let options = [''];
  if (urls.length===1) {
    for(let uk in urls[0]) {
      options.push(`<option value="${urls[0][uk]}" selected></option>`);
    }
  } else if (urls.length>1) {
    hidden = '';
    for(let ui=0;ui<urls.length;ui++) {
      for(let uk in urls[ui]) {
        options.push(`<option value="${urls[ui][uk]}">${uk}</option>`);
      }
    }
  }
  return `<select name="${name}" ${hidden} style="vertical-align:0.6em;margin-left:0.5em;">${options.join('')}</select>`;
}
})();
