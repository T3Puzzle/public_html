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
    touches: [],
    enabled: false
  };
  let ANCHOR = {
    touch: null,
    view: null,
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
    enableReadonly,
    enableAnchored,
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
    //localStorage.setItem("STATE", JSON.stringify(REST));
    //localStorage.setItem('STATE',JSON.stringify(STATE));
    //localStorage.setItem('DUP',JSON.stringify(dupHash));
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
    detailGend(target, prevData);
    gend(e, target);
    top = target.top;
    //
    shareState(target,top.id, detectData(top), prevData);
    //
  }
  function processTap(thand, e, target, idx) {
    let top = target.top;
    let oldData = detectData(top);
    thand(e, target, idx);
    top = target.top;
    //
    shareState(target,top.id, detectData(top), oldData);
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
      puz.adjustTurn(target, data, prevData);
    } else {
      //console.log("DUP =>" +data);
      recreateTarget(target, prevData);
      data = detectData(top);
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
    } else {
      return {
        i: i,
        j: j,
        k: k,
        l: state.l,
        m: state.m
      };
    }
  }
  function renameId(fromId, target) {
    let orgId = null;
    if (fromId in ridHash) {
      orgId = ridHash[fromId];
      //why not?
      //delete ridHash[fromId];
    } else {
      orgId = fromId;
    }
    let toId = target.top.id;
    targetHash[orgId] = target;
    idHash[orgId] = toId;
    ridHash[toId] = orgId;
  }
  function setPartialState(id, state) {
    if (id in STATE) {
      STATE[id].l = state.l;
      STATE[id].m = state.m;
    } else if (id in ridHash) {
      STATE[ridHash[id]].l = state.l;
      STATE[ridHash[id]].m = state.m;
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
  function recreateTarget(target, data) {
    let top = target.top;
    let fromId = top.id;
    let topNode = view.getElementBySpaceItem(top);
    topNode.remove();
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
    shareState(target, top.id, data, {}, opt.local);

    gmid(target, data);

    ////
    let prevData = {};
    // gesture
    let gesture = new tapspace.Touchable(view, top);
    READONLY.touches.push(gesture);
    gesture.start({ translate: true });
    gesture.on("gesturestart", (e) =>
      processGstart(gstart, e, target, prevData)
    );
    gesture.on("gestureend", (e) => processGend(gend, e, target, prevData));
    // tap
    puz.getTapPanels().forEach((panelHtml, idx) => {
      let panel = new tapspace.SpaceHTML(panelHtml, top).setSize(0, 0);
      // tap panel
      let tap = new tapspace.Touchable(view, panel);
      READONLY.touches.push(tap);
      tap.start({ tap: true });
      tap.on("tap", (e) => processTap(thand, e, target, idx));
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
    ANCHOR.touch = new tapspace.Touchable(view, view);
    ANCHOR.touch.start({ translate: true, rotate: true, scale: true });
    ANCHOR.enabled = getDefaultAnchor();
    READONLY.enabled = getDefaultReadonly();
  }
  function flipAll() {
    for (let id in STATE) {
      STATE[id].m = (STATE[id].m + 1) % 2;
      puz.setFace(targetHash[id],STATE[id]);
    }
    shareStateAll();
  }
  function getDefaultReadonly() {
    return me.getAttribute("readonly") !== null;
  }
  function enableReadonly(newValue) {
    let oldValue = READONLY.enabled;
    if (oldValue === newValue) {
      // nop
      return;
    }
    READONLY.enabled = newValue;
    if (READONLY.enabled) {
      READONLY.touches.map((t) => {
        t.stop();
      });
    } else {
      READONLY.touches.map((t) => {
        t.resume();
      });
    }
  }
  function getDefaultAnchor() {
    return me.getAttribute("anchored") !== null;
  }
  function enableAnchored(newValue) {
    let oldValue = ANCHOR.enabled;
    if (oldValue === newValue) {
      // nop
      return;
    }
    ANCHOR.enabled = newValue;
    if (ANCHOR.enabled) {
      ANCHOR.touch.stop();
    } else {
      ANCHOR.touch.resume();
    }
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
