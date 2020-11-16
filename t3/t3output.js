(()=>{
let color = '#000000';
let history=[];
let lastunredo=0;
let config='svgconfig';
let pick='svgpick';
let me=document.currentScript;
let name='svgoutput';
me.insertAdjacentHTML('afterend',`<output class="${name}"></output>`);
let output =null;
document.addEventListener('DOMContentLoaded',()=>{
  color = getColor();
  output = document.body.querySelector(`output.${name}`);
  let svgconfig = document.body.querySelector(`output.${config}`);
  let hidden = 'display:none;';
  svgconfig.insertAdjacentHTML('beforeend',`
<a class="undo" href="#" style="text-decoration:none;vertical-align:0.2em;font-size:300%;margin-right:0.5em;">↩</a>
<a class="redo" href="#" style="text-decoration:none;vertical-align:0.2em;font-size:300%;margin-right:0.5em;">↪</a>
<input class="${name}" type="range" width="100%" value="1" min="1" max="1"  style="${hidden}vertical-align:0.3em;margin-right:0.5em;">
`);
  let picker = document.body.querySelector(`output.${config} input.${pick}`);
  let unredo = document.body.querySelector(`output.${config} input.${name}`);
  let undo = document.body.querySelector(`output.${config} a.undo`);
  let redo = document.body.querySelector(`output.${config} a.redo`);
  output.addEventListener('click',event=>{
    if (unredo.max!==unredo.value) {
      history.length = unredo.value-1;
    }
    let id = getId(event.target);
    let target = event.target;
    let xid = target.parentNode.parentNode.id;
    let xname = target.getAttribute('name');
    if (!xname) {
      return;
    }
    let xindex = parseInt(xname.replace(/[a-zA-Z]/g,''),10);
    let p = getState(xid,target);
    let n = p;
    if (xname==='p3') {
      n = 8;
    } else {
      n = directState(p,xindex);
    }
    setState(xid,n);
    history.push({i:xid, p:p,n:n});
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
function directState(s,index) {
  if (s%4===index) {
    return reverseState(s);
  } else {
    if (s/4<1) {
      return index;
    } else { 
      return index+4;
    }
  }
}
function reverseState(s) {
  return (s+4)%8;
}
function setState(xid,s) {
  setFill(xid,'p3',false,(s/4<1),s);
  setFill(xid,'p0',s%4==0,(s/4<1),s);
  setFill(xid,'p1',s%4==1,(s/4<1),s);
  setFill(xid,'p2',s%4==2,(s/4<1),s);
}
function setFill(xid,xname,v,toggle,s) {
 let p0 = document.body.querySelector(`output.${name} g#${xid} polygon[name=${xname}]`);
 if (s===8) {
   p0.style.fill = '#dddddd';
 } else {
   if (toggle) {
     v = !v;
   }
   p0.style.fill = colval(v);
 }
}
function getState(xid,target){
 let col = colbin(target.style.fill);
 let c0 = colbin(document.body.querySelector(`output.${name} g#${xid} polygon[name=p0]`).style.fill);
 let c1 = colbin(document.body.querySelector(`output.${name} g#${xid} polygon[name=p1]`).style.fill);
 let c2 = colbin(document.body.querySelector(`output.${name} g#${xid} polygon[name=p2]`).style.fill);
 let c3 = colbin(document.body.querySelector(`output.${name} g#${xid} polygon[name=p3]`).style.fill);
 if (c0===c1&&c0===c2&&c0===c3) {
   return 8;
 } else {
   if (c3!==c0) {
     return 0+4*c3;
   } else if (c3!==c1) {
     return 1+4*c3;
   } else if (c3!==c2) {
     return 2+4*c3;
   } else {
     return 3;
   }
 }
}
function colval(val) {
  if (val) {
    return color;
  } else {
    return '#ffffff';
  }
}
function colbin(col) {
  if(colconv(col)==='#ffffff'){
    return 1;
  } else {
    return 0;
  }
}
function colconv(val) {
  if (val.indexOf('#')===0) {
    return val.toLowerCase();
  } else if (val.indexOf('rgb')===0) {
     let vals = val.replace(/rgba*\s*\(/,'').replace(/\s*\)\s*/,'').split(',');
     let r = parseInt(vals[0],10).toString(16).toLowerCase();
     let g = parseInt(vals[1],10).toString(16).toLowerCase();
     let b = parseInt(vals[2],10).toString(16).toLowerCase();
     if (r.length!==2) { r='0'+r;}
     if (g.length!==2) { g='0'+g;}
     if (b.length!==2) { b='0'+b;}
     return '#'+r+g+b;
  }
}
function coleq(col1,col2) {
  return(colconv(col1)===colconv(col2));
}
function coltoggle (col) {
  if (colconv(col)==='#ffffff') {
    return color;
  } else {
    return '#ffffff';
  }
}
function processUndo(i) {
  if (history.length<i ||(i-1)<0) {
    return;
  }
  let h = history[i-1];
  setState(h.i,h.p);
  lastunredo--;
}
function processRedo(i) {
  if (history.length<i ||(i-1)<0) {
    return;
  }
  let h = history[i-1];
  setState(h.i,h.n);
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
function getColor () {
  let colorIndex = localStorage.getItem('colorIndex');
  if (colorIndex) {
    colorIndex = parseInt(colorIndex,10);
    colorIndex = (++colorIndex)%4;
  } else {
    colorIndex = (new Date()).getTime()%4;
  }
  localStorage.setItem('colorIndex',colorIndex);
  if (colorIndex===0) {
    return '#00cc00';
  } else if (colorIndex===1) {
    return '#00ccff';
  } else if (colorIndex===2) {
    return '#88ffdd';
  } else if (colorIndex===3) {
    return '#ff99ff';
  }
}
})();
