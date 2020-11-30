// comment 'export' if no module supported
export
function setup(app,tag,output,base) {
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
    {
      OPERATION.history.push({i:target, p:target.style.fill,n:OPERATION.color});
      target.style.fill = OPERATION.color;
    }
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
function processUndo(i) {
  let j=i;
  if (!j) {
    j=OPERATION.current.index-1;
  }
  if (OPERATION.history.length<=j ||(j)<0) {
    return;
  }
  let h = OPERATION.history[j];
  {
    h.i.style.fill = h.p;
  }
  OPERATION.current.index=j;
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
  {
    h.i.style.fill = h.n;
  }
  OPERATION.current.index=j+1;
  base.callHooks(OPERATION,'index',OPERATION.current.index);
}
function getColor () {
  return '#00cc00';
}
}
