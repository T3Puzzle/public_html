export { tileUtil };
function tileUtil() {
  let hasSnap = false;
  let space = null;
  let view = null;
  let grid = null;
  let root = null;
  let puz = null;
  let dupHash = {};
  // TODO : separate storage
  let STATE = {};
  let REST = {
    name: "T3Puzzle",
    title: "Simple",
    author: "Yoshiaki Araki",
    version: 1,
    state: STATE
  };
  let idHash = {};
  let ridHash = {};
  return {
    init,
    initTile,
    placeTile
  };
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
  function shareState(id, data, oldData, local) {
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
      } else {
        //call just after recreated before renameId
        //console.log('never happen:sharer:'+id);
      }
    }
    if (!local) {
      localStorage.setItem("STATE", JSON.stringify(REST));
      //localStorage.setItem('STATE',JSON.stringify(STATE));
      //localStorage.setItem('DUP',JSON.stringify(dupHash));
    }
  }
  function renameId(fromId, toId) {
    let orgId = null;
    if (fromId in ridHash) {
      orgId = ridHash[fromId];
      //why not?
      //delete ridHash[fromId];
    } else {
      orgId = fromId;
    }
    idHash[orgId] = toId;
    ridHash[toId] = orgId;
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
    shareState(top.id, detectData(top), prevData);
    //
  }
  function processTap(thand, e, target, idx) {
    let top = target.top;
    let oldData = detectData(top);
    thand(e, target, idx);
    top = target.top;
    //
    shareState(top.id, detectData(top), oldData);
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
  function recreateTarget(target, data) {
    let top = target.top;
    let fromId = top.id;
    let topNode = view.getElementBySpaceItem(top);
    topNode.remove();
    let _target = puz.getInitTileCallback()(data, { local: false });
    target.top = _target.top;
    target.tile = _target.tile;
    top = target.top;
    let toId = top.id;
    renameId(fromId, toId);
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
    // share local
    shareState(top.id, data, {}, opt.local);

    let tileHtml = puz.getTileHtml();
    let tile = new tapspace.SpaceHTML(tileHtml, top).setSize(0, 0);
    // place tile here
    let target = { top, tile };
    gmid(target, data);

    ////
    let prevData = {};
    // gesture
    let gesture = new tapspace.Touchable(view, top);
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
      tap.start({ tap: true });
      tap.on("tap", (e) => processTap(thand, e, target, idx));
    });

    return target;
  }
  function init(custom, _puz, callback) {
    puz = _puz;
    let shadow = custom.attachShadow({ mode: "open" });
    // style
    let style = document.createElement("style");
    style.innerHTML = puz.getCSS();
    shadow.append(style);
    // mount point
    let div = document.createElement("div");
    div.style = getStyle();
    shadow.append(div);

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
    var tView = new tapspace.Touchable(view, view);
    tView.start({ translate: true, rotate: true, scale: true });
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
