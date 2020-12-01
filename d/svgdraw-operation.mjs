// TODO:?? support custom element to recieve event from external nodes?
// comment 'export' if no module supported
export
function setup(app,tag,output,base) {
  if (!app.svg) {
    return;
  }
  let OPERATION = {
    shared: {
      debug: app.debug,
      history: [],
      svg: app.svg,
    },
    current: { index: 0},
    color: '#00cc00',
    undo: {
      button: null,
    },
    redo: {
      button: null,
    },
    hooks: {
      overwrite: ['processTarget','processUndo','processRedo'],
    },
  };
  OPERATION.shared.svg.addEventListener('click',event=>{
    if (OPERATION.shared.history.length < OPERATION.current.index) {
      OPERATION.shared.history.length = OPERATION.current.index-1;
    }
    let target = event.target;

    if (!base.callHooks(OPERATION,'processTarget',target)) {
      OPERATION.shared.history.push({i:target, p:target.style.fill,n:OPERATION.color});
      target.style.fill = OPERATION.color;
    }

    OPERATION.current.index = OPERATION.shared.history.length;
    base.callHooks(OPERATION,'index',OPERATION.current.index);
  });
  base.insertButton('operation/redo','↪️');
  base.insertButton('operation/undo','↩️');
  base.bindHook('menu',output,'operation/redo',(button,e)=>processRedo(null));
  base.bindHook('menu',output,'operation/undo',(button,e)=>processUndo(null));
  base.exposeHook('operation',OPERATION);
  return;

function processUndo() {
  let j=OPERATION.current.index-1;
  if (OPERATION.shared.history.length<=j ||(j)<0) {
    return;
  }
  let h = OPERATION.shared.history[j];

  if (!base.callHooks(OPERATION,'processUndo',h)){
    h.i.style.fill = h.p;
  }
  OPERATION.current.index=j;
  base.callHooks(OPERATION,'index',OPERATION.current.index);
  
}
function processRedo() {
  let j=OPERATION.current.index;
  if (OPERATION.shared.history.length<=j||(j)<0) {
    return;
  }
  let h = OPERATION.shared.history[j];

  if (!base.callHooks(OPERATION,'processRedo',h)){
    h.i.style.fill = h.n;
  }

  OPERATION.current.index=j+1;
  base.callHooks(OPERATION,'index',OPERATION.current.index);
}
}
