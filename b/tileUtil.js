export { tileUtil };
function tileUtil() {
  let me = null;
  let hasSnap = false;
  let space = null;
  let view = null;
  let grid = null;
  let root = null;
  let board = null;
  let puz = null;
  let dupHash = {};
  let INITTILECALLBACK = null;
  let READONLY = {
    tiles: null,
    enabled: false
  };
  let ANCHOR = {
    ground: null,
    enabled: false
  };
  let HAND = {
    ground: null,
    enabled: false
  };
  let STATE = {};
  let targetHash = {};
  let idHash = {};
  let ridHash = {};
  const VERSION = 1.0;
  return {
    init,
    initTile,
    placeTile,
    changeMode,
    flipAll,
    load,
    fit,
    loadData,
    VERSION
  };
  function resetAllData(){
    for(let key in targetHash) {
      deleteTarget(targetHash[key]);
    }
    for(let key in dupHash) {
      delete dupHash[key];
    }
    // TODO: remove handlers?
    if (READONLY.tiles){
      for(let key in READONLY.tiles) {
        READONLY.tiles[key].stop();
      }
    }
    ANCHOR.ground.stop();
  }
  function loadData(jsonStr){

    try {
      let data = JSON.parse(jsonStr);
      resetAllData();
      if (Array.isArray(data)) {
        data.map(d=>{
          INITTILECALLBACK({i:d[0],j:d[1],k:d[2],l:d[3],m:d[4],n:d[5]}, { local: true });
        });
      }
    } catch (e) {
      console.log('load e:'+e);
    }
  }
  function load(opts, callback) {
    INITTILECALLBACK = callback;
    let dataNode = me.querySelector('grid-data');
    let src = null;
    try {
      let jsonStr = dataNode.textContent;
      let data = JSON.parse(jsonStr);
      if (Array.isArray(data)) {
        data.map(d=>{
          INITTILECALLBACK({i:d[0],j:d[1],k:d[2],l:d[3],m:d[4],n:d[5]}, { local: true });
        });
        return;
      }
    } catch (e) {
      console.log('load e:'+e);
    }
    puz.load(opts,callback);  
  }
  function shareState(target, id, data, oldData, local) {
    markFootprint(data);
    if (JSON.stringify(data) == JSON.stringify(oldData)) {
      return;
    }
    let state = JSON.parse(JSON.stringify(data));
    if (id in STATE) {
      STATE[id] = state;
    } else if (id in ridHash) {
      STATE[ridHash[id]] = state;
    } else {
      if (local) {
        STATE[id] = state;
        targetHash[id] = target;
      } else {
        //call just after recreated before renameId
        //console.log('never happen:sharer:'+id);
      }
    }
    if (!local) {
      shareStateAll();
    }
  }
  function convertStateToJSON () {
    let json = [];
    for (let id in STATE) {
      let s = STATE[id];
      json.push([s.i,s.j,s.k,s.l,s.m,s.n]);
    }
    return JSON.stringify(json);
  }
  function shareStateAll() {
    let value = { detail: { value: convertStateToJSON(STATE), debug: STATE } };
    me.value = value;
    me.dispatchEvent(new CustomEvent("change", value));
  }
  function processGstart(gstart, e, target, prevData) {
    let top = target.top;
    let imgback = target.imgback;
    imgback.bringToFront();
    top.bringToFront();
    detectData(top, prevData);
    wipeFootprint(prevData);
    gstart(e, target);
  }
  function processGmove(gmove, e, target, prevData) {
    let top = view.getElementBySpaceItem(target.top);
    let imgback = view.getElementBySpaceItem(target.imgback);
    imgback.style.cssText = top.style.cssText;
    
    let base = top.querySelector('div.tr.tr__base');
    base.classList.remove('cursor--grab');
    base.classList.remove('cursor--nodrop');
    base.classList.add('cursor--grabbing');
  }
  function processGend(gend, e, target, prevData) {
    let top = target.top;
    let imgback = target.imgback;
    imgback.sendToBack();
    if (HAND.enabled && e.distance === 0) {
      deleteTarget(target);
      shareStateAll();
    } else {
      
      detailGend(target, prevData);
      gend(e, target);
      top = target.top;
      
    //
      shareState(target, top.id, detectData(top), prevData);
    }
    //
  }
  function processTap(thand, e, target, idx) {
    let top = target.top;
    let oldData = detectData(top);
    thand(e, target, idx);
    top = target.top;
    //
    shareState(target, top.id, detectData(top), oldData);
    //
  }
  function detailGend(target, prevData) {
    let top = target.top;
    let tile = target.tile;
    let data = detectData(top);
    if (!checkFootprint(data)) {
      //console.log("SAFE=>" + data);
      let fromId = top.id;
      data = detectData(top);
      recreateTarget(target, data);
      //?????
      puz.adjustTurn(target, data, prevData);
    } else {
      //console.log("DUP =>" +data);
      recreateTarget(target, prevData);
    }
  }
  function detectData(top, out) {
    let { i, j, k } = puz.detectPosition(top);
    let id = top.id;
    let state = getState(id);
    if (out) {
      out.i = i;
      out.j = j;
      out.k = k;
      out.l = state.l;
      out.m = state.m;
      out.n = state.n;
    } else {
      return {
        i: i,
        j: j,
        k: k,
        l: state.l,
        m: state.m,
        n: state.n
      };
    }
  }
  function getOrgId(id) {
    let orgId = id;
    if (id in ridHash) {
      orgId = ridHash[id];
    }
    return orgId;
  }
  function renameId(fromId, target) {
    let orgId = getOrgId(fromId);
    let toId = target.top.id;
    targetHash[orgId] = target;
    idHash[orgId] = toId;
    ridHash[toId] = orgId;
    if (fromId in ridHash) {
      //why not?
      delete ridHash[fromId];
    }
  }
  function deleteIdAndSo(id) {
    let orgId = getOrgId(id);
    delete targetHash[orgId];
    delete idHash[orgId];
    if (id in ridHash) {
      delete ridHash[id];
    }
    if (id in STATE) {
      delete STATE[id];
    }
    let gkey = 'gesture_'+orgId;
    if(gkey in READONLY.tiles) {
      READONLY.tiles[gkey].stop();
      // TODO:
      READONLY.tiles['tap0_'+orgId].stop();
      READONLY.tiles['tap1_'+orgId].stop();
      READONLY.tiles['tap2_'+orgId].stop();
    }
  }
  function setPartialState(id, state) {
    if (id in STATE) {
      STATE[id].l = state.l;
      STATE[id].m = state.m;
      STATE[id].n = state.n;
    } else if (id in ridHash) {
      STATE[ridHash[id]].l = state.l;
      STATE[ridHash[id]].m = state.m;
      STATE[ridHash[id]].n = state.n;
    } else {
      //
      console.log("never happen:set:" + id);
    }
  }
  function getState(id) {
    if (id in STATE) {
      return STATE[id];
    } else if (id in ridHash) {
      return STATE[ridHash[id]];
    } else {
      //
      console.log("never happen:get:" + id);
    }
  }
  function deleteTarget(target) {
    let top = target.top;
    let id = top.id;
    deleteIdAndSo(id);
    //let topNode = view.getElementBySpaceItem(top);
    //topNode.remove();
    top.remove();
    target.imgback.remove();
    delete targetHash[id];
  }
  function recreateTarget(target, data) {
    let top = target.top;
    let fromId = top.id;
    //let topNode = view.getElementBySpaceItem(top);
    //topNode.remove();
    top.remove();
    target.imgback.remove();
    let _target = INITTILECALLBACK(data, { local: false });
    target.top = _target.top;
    target.tile = _target.tile;
    target.imgback = _target.imgback;
    target.img0 = _target.img0;
    renameId(fromId, target);
  }
  function placeTile(target, data) {
    let top = target.top;
    let tile = target.tile;
    let imgback = target.imgback;
    let img0 = target.img0;
    top.translate(tile.atMid(), grid.at(data.i, data.j));
    imgback.translate(img0.atMid(), grid.at(data.i, data.j));
    puz.adjustTransform(data, target);
    top.snap(tile.atMid(), grid);
    puz.setFace(target, data);
    
  }
  function initTile(data, thand, gstart, gend, gmid, opt) {
    
    let imgback = new tapspace.SpaceGroup(root);
    imgback.sendToBack();
    let img0 = new tapspace.SpaceHTML(puz.getImgHtml(), imgback).setSize(0, 0);
    
    let top = new tapspace.SpaceGroup(root);

    let tileHtml = puz.getTileHtml();
    let tile = new tapspace.SpaceHTML(tileHtml, top).setSize(0, 0);
    // place tile here
    let target = { top, tile, imgback, img0 };
    gmid(target, data);
    addCursor();
    shareState(target, top.id, data, {}, opt.local);
    ////
    let prevData = {};
    // gesture
    let gesture = new tapspace.Touchable(view, top);
    registerTouchTiles(top.id,'gesture',gesture);
   
      gesture.start({ translate: true });
    gesture.on("gesturestart", (e) =>
      processGstart(gstart, e, target, prevData));
    gesture.on("gesturemove",(e)=>
              processGmove(null,e,target,prevData));
    gesture.on("gestureend", (e) => processGend(gend, e, target, prevData));
    if (READONLY.enabled) {
      gesture.stop();
    }
    // tap
    puz.getTapPanels().forEach((panelHtml, idx) => {
      let panel = new tapspace.SpaceHTML(panelHtml, top).setSize(0, 0);
      // tap panel
      let tap = new tapspace.Touchable(view, panel); 
      registerTouchTiles(top.id,'tap'+idx,tap);
      tap.start({ tap: true });
      tap.on("tap", (e) => processTap(thand, e, target, idx));
      if (READONLY.enabled) {
        tap.stop();
      }
    });
    return target;
  }
  function registerTouchTiles(id,head,touchtile) {
    if(!READONLY.tiles){
      READONLY.tiles = {};
    }
    let key = head+'_'+getOrgId(id);
    if (key in READONLY.tiles) {
      READONLY.tiles[key].stop();
    }
    READONLY.tiles[key] = touchtile;
  }
  function init(_me, _puz, callback) {
    me = _me;
    puz = _puz;
    me.attachShadow({ mode: "open" });
    // style
    let style = document.createElement("style");
    me.shadowRoot.append(style);
    style.innerHTML = puz.getCSS()+getCSS();
    // mount point
    let div = document.createElement("div");
    div.style = getStyle();
    me.shadowRoot.append(div);
    let commonStyle = getStyle();
    document.querySelector("html").style = commonStyle;
    document.querySelector("body").style = commonStyle;
    space = new tapspace.Space();
    view = new tapspace.SpaceView(space);
    
    view.mount(div);
    grid = new tapspace.geom.IGrid(
      {
        xStep: puz.XSIZE,
        yStep: puz.XSIZE,
        yRotation: puz.GRID__YROTATION,
        rotateStep: puz.GRID__ROTATESTEP,
        scaleStep: 10000,
        scalePhase: 1
      },
      space
    );
    root = new tapspace.SpaceGroup(space);
    
    board = new tapspace.SpaceHTML('<div style="width:5000px;height:5000px;transform:translate(-2500px,-2500px)"></div>', root).setSize(0, 0);
    
    puz.init(view, { set: setPartialState, get: getState });
    callback();
    final();
  }
  function fit () {
    view.fitScale(root);
    view.scale(view.atMid(), 1.618);
    exposeViewpoint ();
  }
  function exposeViewpoint () {
    let baseNode = view.getElementBySpaceItem(view.getParent());
    let transformStr = baseNode.style.getPropertyValue("transform");
    let matrix = (a, b, c, d, e, f) => {
      return { s: a, r:b, tx: e, ty: f };
    };
    let mat = eval("(()=>" + transformStr + ")();");
    me.setAttribute('viewpoint',JSON.stringify([mat.s,mat.r,mat.tx,mat.ty]));
  }
  function final() {
    fit();
    let touch = new tapspace.Touchable(view, view);
    touch.start({ translate: true, rotate: true, scale: true });
    touch.on("gestureend", (e) => exposeViewpoint(view));
    ANCHOR.ground = touch;
    HAND.ground = touch;
    if (ANCHOR.enabled) {
      changeMode(null,'anchor');
      ANCHOR.ground.stop();
    } else if (HAND.enabled) {
      changeMode(null,'hand');
      HAND.ground.stop();
      startBaseClick();
    } else if (READONLY.enabled) {
      changeMode(null,'readonly');
    } else {
      changeMode(null,null);
    }
  }
  function addCursor() {
    let spaceNode = view.getElementBySpaceItem(space);
    if (ANCHOR.enabled) {
      Array.from(spaceNode.querySelectorAll('div.tr.tr__base')).map(t=>{
        t.classList.add('cursor--grab');
      });
    } else if (READONLY.enabled) {
      // nop
    } else if (HAND.enabled) {
      Array.from(spaceNode.querySelectorAll('div.tr.tr__base')).map(t=>{
        t.classList.add('cursor--nodrop');
      });
    } else {
      Array.from(spaceNode.querySelectorAll('div.tr.tr__base')).map(t=>{
        t.classList.add('cursor--grab');
      });
    }
  }
  function changeMode (oldValue,newValue) {
    let spaceNode;
    let baseNode;
    if (space){
      spaceNode = view.getElementBySpaceItem(space);
      baseNode = view.getElementBySpaceItem(board);
    }
    if (oldValue==='anchor') {
      enableAnchor(false);
      if (space) {
        baseNode.classList.remove('cursor--default');
        spaceNode.classList.remove('cursor--pointer');
        Array.from(spaceNode.querySelectorAll('div.tr.tr__base')).map(t=>{
          t.classList.remove('cursor--grab');
        });
      }
    } else if (oldValue==='readonly') {
      enableReadonly(false);
      if (space) {
        spaceNode.classList.remove('cursor--move');
      }
    } else if (oldValue==='hand') {
      enableHand(false);
      if (space) {
        baseNode.classList.remove('cursor--copy');
        spaceNode.classList.remove('cursor--pointer');
        Array.from(spaceNode.querySelectorAll('div.tr.tr__base')).map(t=>{
          t.classList.remove('cursor--nodrop');
        });
      }
    } else {
      if (space) {
        baseNode.classList.remove('cursor--move');
        spaceNode.classList.remove('cursor--pointer');
        Array.from(spaceNode.querySelectorAll('div.tr.tr__base')).map(t=>{
          t.classList.remove('cursor--grab');
        });
      }
    }
    ////
    if (newValue==='anchor') {
      enableAnchor(true);
      if (space) {
        baseNode.classList.add('cursor--default');
        spaceNode.classList.add('cursor--pointer');
        addCursor();
      }
    } else if (newValue==='readonly') {
      enableReadonly(true);
      if (space) {
        spaceNode.classList.add('cursor--move');
        addCursor();
      }
    } else if (newValue==='hand') {
      enableHand(true);
      if (space) {
        baseNode.classList.add('cursor--copy');
        spaceNode.classList.add('cursor--pointer');
        addCursor();
      }
    } else {
      if (space) {
        baseNode.classList.add('cursor--move');
        spaceNode.classList.add('cursor--pointer');
        addCursor();
      }
    }
  }
  function enableReadonly(newValue) {
    let oldValue = READONLY.enabled;
    if (oldValue === newValue) {
      // nop
      return;
    }
    READONLY.enabled = newValue;
    if (READONLY.tiles) {
      if (READONLY.enabled) {  
        for(let key in READONLY.tiles) {
          READONLY.tiles[key].stop();
        }
      } else {
        for(let key in READONLY.tiles) {
          READONLY.tiles[key].resume();
        }
      }
    }
  }
  function enableAnchor(newValue) {
    let oldValue = ANCHOR.enabled;
    if (oldValue === newValue) {
      // nop
      return;
    }
    ANCHOR.enabled = newValue;
    if (ANCHOR.ground) {
      if (ANCHOR.enabled) {
        ANCHOR.ground.stop();
      } else {
        ANCHOR.ground.resume();
      }
    }
  }
  function enableHand(newValue) {
    let oldValue = HAND.enabled;
    if (oldValue === newValue) {
      // nop
      return;
    }
    HAND.enabled = newValue;
    if (HAND.ground) {
      if (HAND.enabled) {
        HAND.ground.stop();
        startBaseClick();
      } else {
        stopBaseClick();
        HAND.ground.resume();
      }
    }
  }
  function startBaseClick() {
    //let baseNode = view.getElementBySpaceItem(space).parentNode;
    let baseNode = view.getElementBySpaceItem(board);
    baseNode.addEventListener("click", baseClick);
  }
  function stopBaseClick() {
    //let baseNode = view.getElementBySpaceItem(space).parentNode;
    let baseNode = view.getElementBySpaceItem(board);
    baseNode.removeEventListener("click", baseClick);
  }
  function baseClick(e) {
    let spaceNode = view.getElementBySpaceItem(space);
    let transformStr = spaceNode.style.getPropertyValue("transform");
    let matrix = (a, b, c, d, e, f) => {
      return { c: a, s: b, tx: e, ty: f };
    };
    let m = eval("(()=>" + transformStr + ")();");
    let scale = Math.sqrt(m.c*m.c+m.s*m.s);
    let theta = Math.atan2(m.s,m.c);
    let cos = Math.cos(-theta);
    let sin = Math.sin(-theta);
    let sx = (e.clientX - m.tx)/scale;
    let sy = (e.clientY - m.ty)/scale;
    let dx = cos * sx - sin * sy;
    let dy = sin * sx + cos * sy; 
    let data = puz.detectPoint(dx,dy);
    if (checkFootprint(data) ) {
      // nop
      return;
    }
    let pos = { x: dx , y: dy };
    let target = INITTILECALLBACK(data, { local: true });
    let id = target.top.id;
    STATE[id] = data;
    targetHash[id] = target;
    shareStateAll();
  }
  function flipAll() {
    for (let id in STATE) {
      STATE[id].m = (STATE[id].m + 1) % 2;
      puz.setFace(targetHash[id], STATE[id]);
    }
    shareStateAll();
  }
  function checkFootprint(data) {
    let fp = JSON.stringify([data.i, data.j, data.k]);
    //console.log("check:" + fp);
    return fp in dupHash;
  }
  function wipeFootprint(data) {
    let fp = JSON.stringify([data.i, data.j, data.k]);
    //console.log("wipe:" + fp);
    delete dupHash[fp];
  }
  function markFootprint(data) {
    let fp = JSON.stringify([data.i, data.j, data.k]);
    //console.log("mark:" + fp);
    dupHash[fp] = true;
  }
  function getCSS() {
    return `
    div.cursor--default {
      cursor: default;
    }
    div.cursor--move {
      cursor: move;
    }
    div.cursor--grab{
      cursor: grab;
    }
    div.cursor--grabbing{
      cursor: grabbing;
    }
    div.cursor--copy {
      cursor: copy;
    }
    div.cursor--pointer {
      cursor: pointer;
    }
    div.cursor--nodrop {
      cursor: no-drop;
    }`; 
  }
  function getStyle() {
    return `
 margin:0;
 padding:0;
 width:100%;
 height:100%;
 `;
  }
}
