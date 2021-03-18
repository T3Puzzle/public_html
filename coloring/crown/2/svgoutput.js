(()=>{
let history=[];
let lastunredo=0;
let config='svgconfig';
let pick='svgpick';
let me=document.currentScript;
let name='svgoutput';
me.insertAdjacentHTML('afterend',`<output class="${name}"></output>`);
let output =null;
document.addEventListener('DOMContentLoaded',()=>{
  output = document.body.querySelector(`output.${name}`);
  let svgconfig = document.body.querySelector(`output.${config}`);
  let hidden = 'display:none;';
  svgconfig.insertAdjacentHTML('beforeend',`
<a class="undo" href="#" style="display:none;text-decoration:none;vertical-align:0.2em;font-size:300%;margin-right:0.5em;">↩</a>
<a class="redo" href="#" style="display:none;text-decoration:none;vertical-align:0.2em;font-size:300%;margin-right:0.5em;">↪</a>
<input class="${name}" type="range" width="100%" value="1" min="1" max="1"  style="${hidden}vertical-align:0.3em;margin-right:0.5em;">
`);
  let unredo = document.body.querySelector(`output.${config} input.${name}`);
  let undo = document.body.querySelector(`output.${config} a.undo`);
  let redo = document.body.querySelector(`output.${config} a.redo`);
  output.addEventListener('click',event=>{
    if (unredo.max!==unredo.value) {
      history.length = unredo.value-1;
    }
    let id = getId(event.target);
    let currentColor = getColor(event.target.style.fill);
    let nextColor = toggleColor(currentColor);
console.log(currentColor+' '+nextColor);
    history.push({i:id, p:currentColor,n:nextColor});
    event.target.style.fill = nextColor;
    unredo.max = history.length+1;
    unredo.value = unredo.max;
    lastunredo = unredo.max;
  });
  unredo.addEventListener('change',event=>{
    let nowunredo = event.target.value;
    if (nowunredo===lastunredo) {
      // nop
    } else if (nowunredo<lastunredo) {
      for (let i=lastunredo-1;i>=nowunredo;i--) {
        processUndo(i);
      }
    } else if (nowunredo>lastunredo) {
      for (let i=lastunredo;i<nowunredo;i++) {
        processRedo(i);
      }
    }
  });
  undo.addEventListener('click',event=>processUndo(lastunredo-1));
  redo.addEventListener('click',event=>processRedo(lastunredo));
  let svgconfigselect = document.body.querySelector(`output.${config} select[name=${config}]`);
  let svgconfigopts = svgconfigselect.querySelectorAll('option');
  if (svgconfigopts.length===1) {
    loadSvg(getFirstUrl(svgconfigselect));
  } else if (svgconfigopts.length>1) {
    svgconfig.addEventListener('change',event=>
      loadSvg(e.target.value)
    );
  }
});
function getColor (c) {
  c = c.replace(/ /g,'');
  if (c!=='#000000' && c!=='rgb(0,0,0)') {
    return '#ffffff';
  }
  return c;
}
function toggleColor (c) {
  c = c.replace(/ /g,'');
  if (c==='#000000' || c==='rgb(0,0,0)') {
    return '#ffffff';
  } else {
    return '#000000';
  }
}
function processUndo(i) {
  if (history.length<i ||(i-1)<0) {
    return;
  }
  let h = history[i-1];
  let t = output.querySelector('#'+h.i);
  t.style.fill = h.p;
  lastunredo--;
}
function processRedo(i) {
  if (history.length<i ||(i-1)<0) {
    return;
  }
  let h = history[i-1];
  let t = output.querySelector('#'+h.i);
  t.style.fill = h.n;
  lastunredo++;
}
function getId(target) {
  let id = target.id;
  if (id) {
    return id;
  } else {
    target.id = 's'+new Date().getTime();
    return target.id;
  }
}
function getFirstUrl(svgconfigselect) {
  return svgconfigselect.querySelector('option').value;
}
function loadSvg(url) {
    fetch(url)
    .then(response => response.text())
    .then(svg => output.insertAdjacentHTML('beforeend',svg));
}
})();
