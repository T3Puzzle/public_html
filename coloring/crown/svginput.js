(()=>{
let config='svgconfig';
let svgoutput='svgoutput';
let me=document.currentScript;
let name='svginput';
me.insertAdjacentHTML('afterend',`<output class="${name}"></output>`);
document.addEventListener('DOMContentLoaded',()=>{
  let configoptions = document.body.querySelectorAll(`output.${config} select option`);
  if (configoptions.length>0) {
    return;
  }
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`<input name="${name}" type="file" accept=".svg" style="vertical-align:0.5em;margin:0.5em;">`);
  let input = document.querySelector(`input[name=${name}]`);
  input.addEventListener('change',()=>{
    let fr=new FileReader();
    fr.addEventListener('load',()=>{
      document.body.querySelector(`output.${svgoutput}`).insertAdjacentHTML('beforeend',fr.result)});
    fr.readAsText(input.files[0]);
  });
});
})();
