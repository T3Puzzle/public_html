// comment 'export' if no module supported
export
function setup(app,tag,output,base) {
  let OPERATION_T3 = {
     shared: {
       debug: app.debug,
       root: app.root,
       svg: app.svg, 
     },
     color: '#00cc00',
  };
  OPERATION_T3.color = getColor();
  base.bindHook('operation',output,'processTarget',processTarget);
  base.bindHook('operation',output,'processUndo',processUndo);
  base.bindHook('operation',output,'processRedo',processRedo);
  return build;

function build (param) {
  return;
}
function processTarget (operation,target) {
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
  operation.history.push({i:xid, p:p,n:n});
}
function processUndo(operation,h) {
  setState(h.i,h.p);
}
function processRedo(operation,h) {
  setState(h.i,h.n);
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
 let p0 = OPERATION_T3.shared.svg.querySelector(`g#${xid} polygon[name=${xname}]`);
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
 let g = OPERATION_T3.shared.svg.querySelector(`g#${xid}`);
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
    return OPERATION_T3.color;
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
    return OPERATION_T3.color;
  } else {
    return '#ffffff';
  }
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
