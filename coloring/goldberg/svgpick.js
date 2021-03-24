(()=>{
let dblclickTimeout = 300;
let height=45;
let width=370;
let head=15;
let inputhidden='display:none;';
let colors = [
{'0':['#ffffff','#000000','#ee4035','#c3a736','#fdf498','#7bc043','#0392cf']},
{'1':['#ffffff','#000000','#ee4035','#c3a736','#fdf498','#7bc043','#0392cf']},
//{'1':['#ffffff','#000000','#ff77aa','#ff99cc','#ffbbee','#ff5588','#ff3377']},
//{'2':['#ffffff','#000000','#a8e6cf','#dcedc1','#ffd3b6','#ffaaa5','#ff8b94']},
//{'3':['#ffffff','#000000','#ebf4f6','#bdeaee','#76b4bd','#58668b','#5e5656']},
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
  if (cols.length>2) {
    return conv(cols[2]);
  } else {
    return conv(cols[1]);
  } 
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
  svg.insertAdjacentHTML('beforeend',`<circle r="${radius}" cy="${radius+padding}" cx="${cx}" style="fill:${color};" class="${name}" id="${id}">`);
  svg.querySelector(`circle#${id}`).addEventListener('click',processClick);
}
let pendingClick=0;
let backupColor=null;
function processClick (e) {
  if (pendingClick) {
    window.clearTimeout(pendingClick);
    pendingClick=0;
  }
  if(e.detail === 1){
    backupColor = conv(picker.value);
    pendingClick=window.setTimeout(()=>{
    },dblclickTimeout);
    picker.value = conv(e.target.style.fill);
  } else if (e.detail === 2) {
    picker.value = backupColor;
    let fill = conv(e.target.style.fill);
    if (true || fill==='#000000' || fill==='#ffffff') {
      return;
    }
    e.target.remove();
    rearrangeCircles();
  }
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
