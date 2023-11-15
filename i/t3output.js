(()=>{
let g_color = '#000000';
let history=[];
let lastunredo=0;
localStorage.setItem('lastunredo',lastunredo);
let config='svgconfig';
let pick='svgpick';
let me=document.currentScript;
let name='svgoutput';
me.insertAdjacentHTML('afterend',`<output class="${name}"></output>`);
let output =null;
document.addEventListener('DOMContentLoaded',()=>{
  g_color = getColor();
  output = document.body.querySelector(`output.${name}`);
  let svgconfig = document.body.querySelector(`output.${config}`);
  let hidden = 'display:none;';
  svgconfig.insertAdjacentHTML('beforeend',`
<a class="undo" href="#" style="display:none;text-decoration:none;vertical-align:0.2em;font-size:300%;margin-right:0.2em;">↩</a>
<a class="redo" href="#" style="display:none;text-decoration:none;vertical-align:0.2em;font-size:300%;margin-right:0.2em;">↪</a>
<input class="${name}" type="range" width="100%" value="1" min="1" max="1"  style="${hidden}vertical-align:0.3em;margin-right:0.2em;">
`);
  let picker = document.body.querySelector(`output.${config} input.${pick}`);
  let unredo = document.body.querySelector(`output.${config} input.${name}`);
  let undo = document.body.querySelector(`output.${config} a.undo`);
  let redo = document.body.querySelector(`output.${config} a.redo`);
  output.addEventListener('click',event=>{
    setColor(picker.value);
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
    let p = getState(xid);
    let lastColorIndex = colorIndexFromState(p);
    let colorChanged = (lastColorIndex!==getColIndex(g_color));
    let n = p;
    if (xname==='p3' && n%9 === 8) {
      let xxname = target.getAttribute('xxname');
      xindex = parseInt(xxname,10);
    }
    if (xname==='p3' && n%9 !== 8) {
      n = 8;
    } else if (colorChanged) {
      n = xindex + 9*getColIndex(g_color);
    } else {
      n = directState(p,xindex);
    }
console.log(xid);
    if (/^([a-z]+)(\d+)_\d+$/.test(xid)) {
      let w = RegExp.$1;
      let d = parseInt(RegExp.$2,10)%3;
      for (let i=0;i<8;i++) {
        for (let j=-1;j<6;j++) {
          let dd = 3*j+d;
          setState(w+dd+"_"+i,n);
          if (w==='a') {
            setState("c"+(3*j+(d+1+6)%6)+"_"+i,n);
          } else if (w==='c') {
            setState("a"+(3*j+(d-1+6)%6)+"_"+i,n);
          } else if (w==='b') {
            setState("d"+(3*j+(d+2+6)%6)+"_"+i,n);
          } else if (w==='d') {
            setState("b"+(3*j+(d-2+6)%6)+"_"+i,n);
          }
        }
      }
    }
    if (p===n) {
      return;
    }
    history.push({i:xid, p:p,n:n});
    unredo.max = history.length+1;
    unredo.value = unredo.max;
    lastunredo = unredo.max;
    localStorage.setItem('lastunredo',lastunredo);
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
  let ret = 0;
  let ss = s%9;
  if (ss===8) {
    ret = index;
  } else if (ss%4===index) {
    ret = reverseState(ss);
  } else {
    if (ss/4<1) {
      ret = index;
    } else {
      ret = index+4;
    }
  }
//console.log(ret+' '+colorIndexFromState(s));
  return ret + colorIndexFromState(s)*9;

  function reverseState(s) {
    return (s+4)%8;
  }
}
function colorIndexFromState(s) {
  return Math.floor(s/9);
}
function setState(xid,s) {
  setColor(getColorByIndex(colorIndexFromState(s)));
  let ss = s%9;
  let empty = ((ss)===8);
  let toggle = ((ss)/4<1);
  setFill(xid,'p3',false,toggle,empty);
  setFill(xid,'p0',(ss)%4==0,toggle,empty);
  setFill(xid,'p1',(ss)%4==1,toggle,empty);
  setFill(xid,'p2',(ss)%4==2,toggle,empty);
}
function setFill(xid,xname,_v,toggle,empty) {
 let p0s = document.body.querySelectorAll(`output.${name} g#${xid} polygon[name=${xname}]`);
 let v = _v;
 for (let pi=0;pi<p0s.length;pi++) {
   let p0 = p0s[pi];
   if (empty) {
     p0.style.fill = '#dddddd';
   } else {
     if (toggle) {
       v = !_v;
     }
     p0.style.fill = colval(v);
   }
 }
}
function getState(xid){
 let t0 = document.body.querySelector(`output.${name} g#${xid} polygon[name=p0]`).style.fill;
 let t1 = document.body.querySelector(`output.${name} g#${xid} polygon[name=p1]`).style.fill;
 let t2 = document.body.querySelector(`output.${name} g#${xid} polygon[name=p2]`).style.fill;
 let t3 = document.body.querySelector(`output.${name} g#${xid} polygon[name=p3]`).style.fill;
 let colorIndex = getColorIndex(t0,t1,t2,t3);
 let c0 = colbin(t0);
 let c1 = colbin(t1);
 let c2 = colbin(t2);
 let c3 = colbin(t3);
 let ret = 8;
 if (c0===c1&&c0===c2&&c0===c3) {
   ret = 8;
 } else {
   if (c3!==c0) {
     ret = 0+4*c3;
   } else if (c3!==c1) {
     ret = 1+4*c3;
   } else if (c3!==c2) {
     ret = 2+4*c3;
   } else {
     ret = 3;
   }
 }
 return ret+ colorIndex*9;
}
function colval(val) {
  if (val) {
    return '#ffffff';
  } else {
    return g_color;
  }
}
function colbin(col) {
  if(colconv(col)==='#ffffff'){
    return 0;
  } else {
    return 1;
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
    return g_color;
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
  localStorage.setItem('lastunredo',lastunredo);
}
function processRedo(i) {
  if (history.length<i ||(i-1)<0) {
    return;
  }
  let h = history[i-1];
  setState(h.i,h.n);
  lastunredo++;
  localStorage.setItem('lastunredo',lastunredo);
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
function setColor (value) {
  g_color = value;
}
function getColor () {
  let colorIndex = localStorage.getItem('colorIndex');
  if (colorIndex!==null) {
    colorIndex = (++colorIndex)%4;
  } else {
    colorIndex = (new Date()).getTime()%4;
  }
  localStorage.setItem('colorIndex',colorIndex);
  return getColorByIndex(colorIndex);
}
function getColorByIndex(colorIndex) {
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
function getColorIndex (t0,t1,t2,t3) {
  t0 = colconv(t0);
  t1 = colconv(t1);
  t2 = colconv(t2);
  t3 = colconv(t3);
  let ret = 0;
  if (t0!=='#ffffff') {
    ret = getColIndex(t0);
  } else if (t1!=='#ffffff') {
    ret = getColIndex(t1);
  } else if (t2!=='#ffffff') {
    ret = getColIndex(t2);
  } else if (t3!=='#ffffff') {
    ret = getColIndex(t3);
  }
  return ret;
}
function getColIndex (t) {
  if (t==='#00cc00') {
    return 0;
  } else if (t==='#00ccff') {
    return 1;
  } else if (t==='#88ffdd') {
    return 2;
  } else if (t==='#ff99ff') {
    return 3;
  }
  return 0;
}
})();
