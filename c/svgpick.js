(()=>{
let dblclickTimeout = 300;
let height=45;
let width=370;
let head=15;
let inputhidden='display:none;';
let colors = [
{'0':['#00cc00','#00ccff','#88ffdd','#ff99ff']},
];
let colorType = null;
let radius= null;
let padding= null;
let picker = null;
let svg=null;
let me=document.currentScript;
let name='svgpick';
let config='svgconfig';
let svgoutput='svgoutput';
me.insertAdjacentHTML('afterend',`<output class="${name}"></output>`);
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  let select = getSelect();
  output.insertAdjacentHTML('beforeend',`
${select}
<input class="${name}" type="color" value="#ff0000"  style="${inputhidden};vertical-align:0.3em;margin-left:0.5em;margin-top:0.3em;">
<svg class="${name}" width="${width}" height="${height}" style="vertical-align:-0.2em;"></svg><br/>
  `); 
  svg = document.body.querySelector(`output.${config} svg.${name}`);
  picker = document.body.querySelector(`input.${name}`);
  let initColor = initCircles();
  picker.value = initColor;
  // TODO: addCircle when actually used.
  picker.addEventListener('change',event=>addCircle(conv(event.target.value)));
});
function initCircles() {
  svg.innerHTML = '';
  let cols = getCols();
  for(let ci=0;ci<cols.length;ci++) {
    addCircle(conv(cols[ci]));
  }   
  return conv(cols[0]);
} 
function getSelect() { 
  // for now
  return ''; 
  if (colors.length<=1){
    return '';
  } 
  let opt=[];
  for(let ci=0;ci<colors.length;ci++) {
    for(let ck in colors[ci]) {
      opt.push(`<option value="${ck}">${ck}</option>`);
      continue;
    }
  }  
  return `<select class="${name}" style="vertical-align:0.6em;margin-left:0.5em;"><`+opt.join('')+'</select>';
}
function getCols2() {
  let colorPallete = localStorage.getItem('colorPallete');
  if (colorPallete && colorPallete.length>0) {
    colorPallete = (parseInt(colorPallete,10)+1)%colors.length;
  } else {
    colorPallete = (new Date()).getTime()%colors.length;
  }
  localStorage.setItem('colorPallete',colorPallete);
  return colors[colorPallete][colorPallete];
}
function getCols() {
  return getCols2();
  if (colorType) {
    for(let ci=0;ci<colors.length;ci++) {
      for(let ck in colors[ci]) {
        if (ck===colorType) {
          return colors[ci][ck];
        }
      }
    }
  }
  if (colors.length>0) {
    for(let ck in colors[0]) {
      return colors[0][ck];
    }
  } else {
    return ['#000000','#ffffff'];
  }
}
function conv(val) {
  if (val.indexOf('#')===0) {
    return val.toLowerCase();
  } else if (val.indexOf('rgb')===0) {
     let vals = val.replace(/rgb\s*\(/,'').replace(/\s*\)\s*/,'').split(',');
     let r = parseInt(vals[0],10).toString(16).toLowerCase();
     let g = parseInt(vals[1],10).toString(16).toLowerCase();
     let b = parseInt(vals[2],10).toString(16).toLowerCase();
     if (r.length!==2) { r='0'+r;}
     if (g.length!==2) { g='0'+g;}
     if (b.length!==2) { b='0'+b;}
     return '#'+r+g+b;
  }
}
function addCircle(color) {
  if (checkColorDup(color)){
    return;
  }
  let cmax = getCircleCount();
  if (cmax > 15 ) {
    return;
  }
  radius = height*0.8/2;
  padding = radius*0.3;
  let cx = getCx(cmax);
  let id = 'c'+color.replace('#','');
  svg.insertAdjacentHTML('beforeend',`<circle r="${radius}" cy="${radius+padding}" cx="${cx}" style="fill:${color};stroke:#ffffff;stroke-width:0" class="${name}" id="${id}">`);
  svg.querySelector(`circle#${id}`).addEventListener('click',processClick);
}
let pendingClick=0;
let backupColor=null;
let backupTarget=null;
let lastTarget=null;
function processClick (e) {
  if (pendingClick) {
    window.clearTimeout(pendingClick);
    pendingClick=0;
  }
  if(e.detail === 1){
    backupColor = conv(picker.value);
    backupTarget = lastTarget;
    lastTarget = e.target;
    pendingClick=window.setTimeout(()=>{
    },dblclickTimeout);
    picker.value = conv(e.target.style.fill);
    setFocus (e.target);
  } else if (e.detail === 2) {
    picker.value = backupColor;
    setFocus (backupTarget);
    let fill = conv(e.target.style.fill);
    if (true || fill==='#000000' || fill==='#ffffff') {
      return;
    }
    e.target.remove();
    rearrangeCircles();
  }
}
function setFocus (target){
  let circles = document.body.querySelectorAll(`output.${config} svg.${name} circle.${name}`);
  for (let ci=0;ci<circles.length;ci++){
    circles[ci].style['stroke-width'] = 0;
  }
  target.style['stroke-width'] = 2.5;
}
function getCx(index) {
  return (2*radius+padding)*(index+1);
}
function rearrangeCircles() {
  let circles = document.body.querySelectorAll(`output.${config} svg.${name} circle.${name}`);
  for (let ci=0;ci<circles.length;ci++) {
    circles[ci].setAttribute('cx',getCx(ci));
  }
}
function checkColorDup(color) {
  let circles = document.body.querySelectorAll(`output.${config} svg.${name} circle.${name}`);
  for (let ci=0;ci<circles.length;ci++) {
    if (conv(circles[ci].style.fill)===color) {
      return true;
    }
  }
  return false;
}
function getCircleCount() {
  let circles = document.body.querySelectorAll(`output.${config} svg.${name} circle.${name}`);
  if (!circles) {
    return 0;
  } else {
    return circles.length;
  }
}
})();
