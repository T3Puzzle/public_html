export function __svgdraw_init (app) {
  let __parent = app.parent;
  let __current = app.command.current;
  let __history = app.command.history;
  let __svg = app.svg;
  let __color = getColor();
  let __unredo = getUnredo();
  __svg.addEventListener('click',event=>{
    if (__unredo.max!==__unredo.value) {
      __history.length = __unredo.value-1;
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
    if (p===n) {
      return;
    }
    __history.push({i:xid, p:p,n:n});
    __unredo.max = __history.length+1;
    __unredo.value = __unredo.max;
    __current.index = __unredo.max;
  });
  __unredo.addEventListener('change',event=>{
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
  return { undo: __svgdraw_undo , redo: __svgdraw_redo};

function getUnredo () {
  let unredo = document.createElement('input');
  unredo.type = 'range';
  unredo.width = '100%';
  unredo.value = '1';
  unredo.min = '1';
  unredo.max = '1';
  unredo.style = 'display:none;vertical-align:0.3em;margin-right:0.2em;';
  __parent.appendChild(unredo);
  return unredo;
}
function __svgdraw_undo (tag,undo,app) {
  let __current = app.command.current;
  undo.href = '#';
  undo.target = '_self';
  undo.addEventListener('click',_=>processUndo(__current.index-1));
}
function __svgdraw_redo (tag,redo,app) {
  let __current = app.command.current;
  redo.href = '#';
  redo.target = '_self';
  redo.addEventListener('click',_=>processRedo(__current.index));
}
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
 let p0 = __svg.querySelector(`g#${xid} polygon[name=${xname}]`);
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
 let c0 = colbin(__svg.querySelector(`g#${xid} polygon[name=p0]`).style.fill);
 let c1 = colbin(__svg.querySelector(`g#${xid} polygon[name=p1]`).style.fill);
 let c2 = colbin(__svg.querySelector(`g#${xid} polygon[name=p2]`).style.fill);
 let c3 = colbin(__svg.querySelector(`g#${xid} polygon[name=p3]`).style.fill);
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
    return __color;
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
    return __color;
  } else {
    return '#ffffff';
  }
}
function processUndo(i) {
  if (__history.length<i ||(i-1)<0) {
    return;
  }
  let h = __history[i-1];
  setState(h.i,h.p);
  __current.index--;
}
function processRedo(i) {
  if (__history.length<i ||(i-1)<0) {
    return;
  }
  let h = __history[i-1];
  setState(h.i,h.n);
  __current.index++;
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
function getColor () {
  let colorIndex = localStorage.getItem('colorIndex');
  if (colorIndex!==null) {
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
}
