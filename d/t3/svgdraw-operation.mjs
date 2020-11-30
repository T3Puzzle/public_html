// comment 'export' if no module supported
export function setup(app,tag,output,base) {
  let OPERATION = {
    current: { index: 0},
    history: [],
    svg: app.svg,
    color: '#000000',
    undo: {
      button: null,
    },
    redo: {
      button: null,
    }
  };
  OPERATION.color = getColor();
  OPERATION.svg.addEventListener('click',event=>{
    if (OPERATION.history.length < OPERATION.current.index) {
      OPERATION.history.length = OPERATION.current.index-1;
    }
    let target = event.target;
    let id = getId(target);
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
    OPERATION.history.push({i:xid, p:p,n:n});
    OPERATION.current.index = OPERATION.history.length;
    base.callHooks(OPERATION,'index',OPERATION.current.index);
  });
  base.insertButton('operation/redo','↪️');
  base.insertButton('operation/undo','↩️');
  base.bindHook('menu',output,'operation/redo',(build)=>processRedo(null));
  base.bindHook('menu',output,'operation/undo',(build)=>processUndo(null));
  base.exposeHook('operation',OPERATION);
  return build;

function build (param) {
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
 let p0 = OPERATION.svg.querySelector(`g#${xid} polygon[name=${xname}]`);
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
 let g = OPERATION.svg.querySelector(`g#${xid}`);
 let c0 = colbin(g.querySelector(`polygon[name=p0]`).style.fill);
 let c1 = colbin(g.querySelector(`polygon[name=p1]`).style.fill);
 let c2 = colbin(g.querySelector(`polygon[name=p2]`).style.fill);
 let c3 = colbin(g.querySelector(`polygon[name=p3]`).style.fill);
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
    return OPERATION.color;
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
    return OPERATION.color;
  } else {
    return '#ffffff';
  }
}
function processUndo(i) {
  let j=i;
  if (!j) {
    j=OPERATION.current.index-1;
  }
  if (OPERATION.history.length<=j ||(j)<0) {
    return;
  }
  let h = OPERATION.history[j];
  setState(h.i,h.p);
  OPERATION.current.index--;
  base.callHooks(OPERATION,'index',OPERATION.current.index);
  
}
function processRedo(i) {
  let j=i;
  if (!j) {
    j=OPERATION.current.index;
  }
  if (OPERATION.history.length<=j||(j)<0) {
    return;
  }
  let h = OPERATION.history[j];
  setState(h.i,h.n);
  OPERATION.current.index++;
  base.callHooks(OPERATION,'index',OPERATION.current.index);
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
