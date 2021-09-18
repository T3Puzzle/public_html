export { tileUtil };
function tileUtil() {
  let space = null;
  let view = null;
  let grid = null;
  let root = null;
  let puz = null;
  let dupHash = {};
  return {
    checkFootprint,
    wipeFootprint,
    markFootprint,
    init,
    getStyle,
    initTile,
    placeTile,
    final
  };
  function processGstart(gstart,e, top, tile, prevData) {
    
    console.log('startGend');
    wipeFootprint(top);
    
    if (Number.isNaN(top._T.tx)) {
      prevData = { tx: 0, ty: 0, r: 0, s: 1 };
    } else {
      prevData = { tx: top._T.tx, ty: top._T.ty, r: top._T.r, s: top._T.s };
    }
    /*
    puz.loadData(top,prevData);
    */
    gstart(e, top, tile);
  }
  function processGend(gend, e, top, tile, prevData) {
    if (detailGend(top,tile,prevData)){
      return;
    }
    markFootprint(top, tile);
    gend(e, top, tile);
  }
  function detailGend(top,tile,prevData) {
    console.log('detailGend');
    let dx = -top._T.tx;
    let dy = -top._T.ty;
    top.snap(tile.atMid(), grid);
    
    dx += top._T.tx;
    dy += top._T.ty;
    let norm = Math.sqrt(dx * dx + dy * dy);
    console.log("norm:" + norm + " " + top._T.tx + " " + top._T.ty);

    if (!Number.isNaN(norm)) {
      if (norm > puz.XSIZE / 2) {
        console.log("flipping");
        puz.toggleDownsideup(top, tile);
        top.snap(tile.atMid(), grid);
        // rotate after snap ....
        puz.adjustTurn(top, tile);
      }
      if (!checkFootprint(top)) {
        console.log("safe" + puz.getFootprint(top));
        return false;
      }
    } else {
      // workaround
      let topNode = view.getElementBySpaceItem(top); 
      topNode.remove();
      puz.getInitTileCallback()({i:-2,j:-2,k:0,l:0,m:0});
      return true;
    }
    console.log("dup" + puz.getFootprint(top));
    top._T.tx = prevData.tx;
    top._T.ty = prevData.ty;
    top._T.r = prevData.r;
    top._T.s = prevData.s;
    top.snap(tile.atMid(), grid);
    return false;
    /*
    placeTile(top,tile,prevData);
    */
  }
  function placeTile(top, tile, data, nodup) {
    //
    //console.log();
    top.translate(tile.atMid(), grid.at(data.i, data.j));
    puz.adjustTransform(data.k, top, tile);
    top.snap(tile.atMid(), grid);
    // rotate after snap ....
    //tile.rotate(tile.at(puz.XCENTER, puz.YCENTER), puz.ROTATES[data.l]);
    puz.setFace(top, tile, data);
    // huummm. snap changes data...
    puz.storeState(top, data);
    if (!nodup) {
      markFootprint(top, tile);
    }
  }
  
  function initTile(data, tapHandler, gstart, gend, gmid) {
    let top = new tapspace.SpaceGroup(root);
    let tileHtml = puz.getTileHtml();
    let tile = new tapspace.SpaceHTML(tileHtml, top).setSize(0, 0);
    // place tile here
    gmid(top, tile, data);
    // TODO : data => pos ==snap==> data
    // prev
    let prevData = { tx: top._T.tx, ty: top._T.ty, r: top._T.r, s: top._T.s };
    /*let prevData = {};
    puz.loadData(top,prevData);
    */
    // gesture
    let gesture = new tapspace.Touchable(view, top);
    gesture.start({ translate: true });
    gesture.on("gesturestart", (e) => processGstart(gstart,e, top, tile, prevData));
    gesture.on("gestureend", (e) => processGend(gend, e, top, tile, prevData));
    // tap
    puz.getTapPanels().forEach((panelHtml, idx) => {
      let panel = new tapspace.SpaceHTML(panelHtml, top).setSize(0, 0);
      // tap panel
      let tap = new tapspace.Touchable(view, panel);
      tap.start({ tap: true});
      tap.on("tap", (e) => tapHandler(e, top, tile, idx));
    });
  }
  function init(custom, _puz) {
    puz = _puz;
    let shadow = custom.attachShadow({ mode: "open" });
    // style
    let style = document.createElement("style");
    style.innerText = puz.getCSS();
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
    puz.init(view);
  }
  function final() {
    view.fitScale(root);
    view.scale(view.atMid(), 1.618);
    var tView = new tapspace.Touchable(view, view);
    tView.start({ translate: true, rotate: true, scale: true });
  }
  function checkFootprint(top) {
    let fp = puz.getFootprint(top);
    return fp in dupHash;
  }
  function wipeFootprint(top) {
    let fp = puz.getFootprint(top);
    delete dupHash[fp];
  }
  function markFootprint(top) {
    let fp = puz.getFootprint(top);
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
