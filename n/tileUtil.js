export { tileUtil };
function tileUtil() {
  let me = null;
  let hasSnap = false;
  let space = null;
  let view = null;
  let grid = null;
  let root = null;
  let puz = null;
  let dupHash = {};
  let READONLY = {
    tiles: [],
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
  let REST = {
    name: "T3Puzzle",
    title: "Simple",
    author: "Yoshiaki Araki",
    version: 1,
    state: STATE
  };
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
    VERSION
  };
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
  function shareStateAll() {
    let value = { detail: { state: STATE } };
    me.value = value;
    me.dispatchEvent(new CustomEvent("change", value));
  }
  function processGstart(gstart, e, target, prevData) {
    let top = target.top;
    let tile = target.tile;
    top.bringToFront();
    detectData(top, prevData);
    wipeFootprint(prevData);
    gstart(e, target);
  }
  function processGend(gend, e, target, prevData) {
    let top = target.top;
    let tile = target.tile;
    if (HAND.enabled) {
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
  function renameId(fromId, target) {
    let orgId = fromId;
    if (fromId in ridHash) {
      orgId = ridHash[fromId];
    }
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
    let orgId = id;
    if (id in ridHash) {
      orgId = ridHash[id];
    }
    delete targetHash[orgId];
    delete idHash[orgId];
    if (id in ridHash) {
      delete ridHash[id];
    }
    if (id in STATE) {
      delete STATE[id];
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
  }
  function recreateTarget(target, data) {
    let top = target.top;
    let fromId = top.id;
    //let topNode = view.getElementBySpaceItem(top);
    //topNode.remove();
    top.remove();
    let _target = puz.getInitTileCallback()(data, { local: false });
    target.top = _target.top;
    target.tile = _target.tile;
    renameId(fromId, target);
  }
  function placeTile(target, data) {
    let top = target.top;
    let tile = target.tile;
    top.translate(tile.atMid(), grid.at(data.i, data.j));
    puz.adjustTransform(data, target);
    top.snap(tile.atMid(), grid);
    puz.setFace(target, data);
  }
  function initTile(data, thand, gstart, gend, gmid, opt) {
    let top = new tapspace.SpaceGroup(root);

    let tileHtml = puz.getTileHtml();
    let tile = new tapspace.SpaceHTML(tileHtml, top).setSize(0, 0);
    // place tile here
    let target = { top, tile };
    // share local
    gmid(target, data);
    shareState(target, top.id, data, {}, opt.local);
    ////
    let prevData = {};
    // gesture
    let gesture = new tapspace.Touchable(view, top);
    READONLY.tiles.push(gesture);
      gesture.start({ translate: true });
    gesture.on("gesturestart", (e) =>
      processGstart(gstart, e, target, prevData)
    );
    gesture.on("gestureend", (e) => processGend(gend, e, target, prevData));
    if (READONLY.enabled) {
      gesture.stop();
    }
    // tap
    puz.getTapPanels().forEach((panelHtml, idx) => {
      let panel = new tapspace.SpaceHTML(panelHtml, top).setSize(0, 0);
      // tap panel
      let tap = new tapspace.Touchable(view, panel);
      READONLY.tiles.push(tap);
      tap.start({ tap: true });
      tap.on("tap", (e) => processTap(thand, e, target, idx));
      if (READONLY.enabled) {
        tap.stop();
      }
    });
    return target;
  }
  function init(_me, _puz, callback) {
    me = _me;
    puz = _puz;
    me.attachShadow({ mode: "open" });
    /*
    let parent = document.createElement("div");
    parent.id = 'parent';
    me.shadowRoot.append(parent);
    */
    // style
    let style = document.createElement("style");
    //parent.append(style);
    me.shadowRoot.append(style);
    style.innerHTML = puz.getCSS();
    // mount point
    let div = document.createElement("div");
    div.style = getStyle();
    //parent.append(div);
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
    puz.init(view, { set: setPartialState, get: getState });
    callback();
    final();
  }
  function final() {
    view.fitScale(root);
    view.scale(view.atMid(), 1.618);

    let touch = new tapspace.Touchable(view, view);
    touch.start({ translate: true, rotate: true, scale: true });
    ANCHOR.ground = touch;
    HAND.ground = touch;
    if (ANCHOR.enabled) {
      ANCHOR.ground.stop();
    }
    if (HAND.enabled) {
      HAND.ground.stop();
      startBaseClick();
    }
  }
  function changeMode (oldValue,newValue) {
    if (!oldValue){
      // nop
    } else if (oldValue==='anchor') {
      enableAnchor(false);
    } else if (oldValue==='readonly') {
      enableReadonly(false);
    } else if (oldValue==='hand') {
      enableHand(false);
    }   
    if (!newValue){
      // nop
    } else if (newValue==='anchor') {
      enableAnchor(true);
    } else if (newValue==='readonly') {
      enableReadonly(true);
    } else if (newValue==='hand') {
      enableHand(true);
    }
  }
  function enableReadonly(newValue) {
    let oldValue = READONLY.enabled;
    if (oldValue === newValue) {
      // nop
      return;
    }
    READONLY.enabled = newValue;
    if (READONLY.enabled) {
      if (READONLY.tiles) {
        READONLY.tiles.map((t) => {
          t.stop();
        });
      }
    } else {
      READONLY.tiles.map((t) => {
        t.resume();
      });
    }
  }
  function enableAnchor(newValue) {
    let oldValue = ANCHOR.enabled;
    if (oldValue === newValue) {
      // nop
      return;
    }
    ANCHOR.enabled = newValue;
    if (ANCHOR.enabled) {
      if (ANCHOR.ground) {
        ANCHOR.ground.stop();
      }
    } else {
      ANCHOR.ground.resume();
    }
  }
  function enableHand(newValue) {
    let oldValue = HAND.enabled;
    if (oldValue === newValue) {
      // nop
      return;
    }
    HAND.enabled = newValue;
    if (HAND.enabled) {
      if (HAND.ground) {
        HAND.ground.stop();
        startBaseClick();
      }
    } else {
      stopBaseClick();
      HAND.ground.resume();
    }
  }
  function startBaseClick() {
    let viewNode = view.getElementBySpaceItem(view);
    let baseNode = view.getElementBySpaceItem(space).parentNode;
    baseNode.addEventListener("click", baseClick);
  }
  function stopBaseClick() {
    let baseNode = view.getElementBySpaceItem(space).parentNode;
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
    let target = puz.getInitTileCallback()(data, { local: false });
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
  function getStyle() {
    return `
 margin:0;
 padding:0;
 width:100%;
 height:100%;
 `;
  }
}
