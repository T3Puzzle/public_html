export { tileUtil };
function tileUtil() {
  return function internal() {
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
    let OFFSET = {
      x: 0,
      y: 0
    };
    let NOALL = {
      noMove: false,
      noFlip: false
    };
    let READONLY = {
      tiles: null,
      enabled: false
    };
    let ANCHOR = {
      ground: null,
      enabled: false
    };
    let LOCK = {
      enabled: false
    };
    let HAND = {
      ground: null,
      enabled: false
    };
    let LASTSTATE = {
      l: 0,
      m: 1, // fujisan by default
      n: 0,
      o: 0,
    }
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
      noMoveAll,
      noFlipAll,
      load,
      fit,
      rotate,
      zoom,
      resetAndloadData,
      VERSION
    };
    function resetAllData() {
      for (let key in targetHash) {
        deleteTarget(targetHash[key]);
      }
      for (let key in dupHash) {
        delete dupHash[key];
      }
      // TODO: remove handlers?
      if (READONLY.tiles) {
        for (let key in READONLY.tiles) {
          READONLY.tiles[key].stop();
        }
        READONLY.tiles = {};
      }
    }
    function resetAndloadData(jsonStr) {
      loadData(jsonStr, resetAllData);
      shareStateAll();
    }
    function loadData(jsonStr, callback) {
      try {
        let data = JSON.parse(jsonStr);
        if (callback) {
          callback();
        }
        if (!data) {
          console.log("load e: data null");
          return false;
        }
        if ("tiles" in data) {
          data.tiles.map((d) => {
            INITTILECALLBACK(
              { i: d[0], j: d[1], k: d[2], l: d[3], m: d[4], n: d[5], o: d[6] },
              { local: true }
            );
          });
          if ("orientation" in data) {
            let angle = parseFloat(data.orientation);
            view.resetTransform();
            fit();
            view.rotate(view.atMid(), angle);
          }
          // not to do initially shareStateAll()
          return true;
        }
      } catch (e) {
        console.log("load e:" + e);
        return false;
      }
    }
    function load(opts, callback) {
      INITTILECALLBACK = callback;
      let dataNode = me.querySelector("grid-data");
      let src = null;
      let jsonStr = dataNode.textContent;
      if (loadData(jsonStr)) {
        return false;
      }
      puz.load(opts, callback);
      // not to do initially shareStateAll()
      return true;
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
        // in local not to share each time but share at once in the end
        shareStateAll();
      }
    }
    function convertStateToJSON() {
      let json = [];
      for (let id in STATE) {
        let s = STATE[id];
        json.push([s.i, s.j, s.k, s.l, s.m, s.n, s.o]);
      }
      return json;
    }
    function shareStateAll() {
      let value = {
        detail: {
          value: {
            orientation: getOrientation(),
            tiles: convertStateToJSON(STATE)
          },
          debug: STATE
        }
      };
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

      let base = top.querySelector("div.tr.tr__base");
      base.classList.remove("cursor--grab");
      base.classList.remove("cursor--nodrop");
      base.classList.add("cursor--grabbing");
    }
    function processGend(gend, e, target, prevData) {
      let top = target.top;
      let imgback = target.imgback;
      imgback.sendToBack();

      if ((HAND.enabled||true) && e.distance === 0 && prevData.o === 0) {
        deleteTarget(target);
        shareStateAll();
      } else {
        if (LOCK.enabled && e.distance === 0) {
          let newo = (prevData.o + 1) % 2;
          prevData.o = newo;
          STATE[getOrgId(top.id)].o = newo;
          // reflect frozen after recreate
        }
        detailGend(target, prevData);
        gend(e, target);
        top = target.top;
        //
        shareState(target, top.id, detectData(top), prevData);
      }
      //
    }
    function processTap(thand, e, target, idx) {
      if (NOALL.noFlip) {
        return;
      }
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
      if (!checkFootprint(data) && !data.o && !NOALL.noMove) {
        //console.log("SAFE=>" + data);
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
        out.i = i; // x
        out.j = j; // y
        out.k = k; // downsideup
        out.l = state.l; // rotate
        out.m = state.m; // flip
        out.n = state.n; // color
        out.o = state.o; // frozen
      } else {
        return {
          i: i,
          j: j,
          k: k,
          l: state.l,
          m: state.m,
          n: state.n,
          o: state.o
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
      if (orgId in STATE) {
        delete STATE[orgId];
      }
      let gkey = "gesture_" + orgId;
      if (gkey in READONLY.tiles) {
        [
          READONLY.tiles[gkey],
          READONLY.tiles["tap0_" + orgId],
          READONLY.tiles["tap1_" + orgId],
          READONLY.tiles["tap2_" + orgId]
        ].map((t) => {
          if (t) {
            t.stop();
          }
        });
      }
    }
    function setPartialState(id, state) {
      if (id in STATE) {
        STATE[id].l = state.l;
        STATE[id].m = state.m;
        STATE[id].n = state.n;
        STATE[id].o = state.o;
      } else if (id in ridHash) {
        STATE[ridHash[id]].l = state.l;
        STATE[ridHash[id]].m = state.m;
        STATE[ridHash[id]].n = state.n;
        STATE[ridHash[id]].o = state.o;
      } else {
        //
        console.log("never happen:set:" + id);
      }
      LASTSTATE.l = state.l;
      LASTSTATE.m = state.m;
      LASTSTATE.n = state.n;
      LASTSTATE.o = state.o;
    }
    function getLastPartialState() {
      return LASTSTATE;
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
      let _target = INITTILECALLBACK(data, { local: false, id: fromId });
      target.top = _target.top;
      target.tile = _target.tile;
      target.imgback = _target.imgback;
      target.img = _target.img;
      target.frozen = _target.frozen;
      ////
      renameId(fromId, target);
    }
    function placeTile(target, data) {
      let top = target.top;
      let tile = target.tile;
      let imgback = target.imgback;
      let img = target.img;
      top.translate(tile.atMid(), grid.at(data.i, data.j));
      imgback.translate(img.atMid(), grid.at(data.i, data.j));
      puz.adjustTransform(data, target);
      top.snap(tile.atMid(), grid);
      puz.setFace(target, data);
    }
    function initTile(data, thand, gstart, gend, gmid, opt) {
      let imgback = new tapspace.SpaceGroup(root);
      imgback.sendToBack();
      let img = new tapspace.SpaceHTML(puz.getImgHtml(), imgback).setSize(0, 0);

      let top = new tapspace.SpaceGroup(root);

      let frozenHtml = puz.getFrozenHtml();
      let frozen = new tapspace.SpaceHTML(frozenHtml, top).setSize(0, 0);

      let tileHtml = puz.getTileHtml();
      let tile = new tapspace.SpaceHTML(tileHtml, top).setSize(0, 0);
      // place tile here
      let target = { top, tile, imgback, img, frozen };
      let flag = true;
      if (flag) {
        gmid(target, data);
        addCursor();
        shareState(target, top.id, data, {}, opt.local);
      }
      ///
      let prevData = {};
      // gesture
      let gesture = new tapspace.Touchable(view, top);

      registerTouchTiles(top.id, "gesture", gesture, opt);

      gesture.start({ translate: true });
      gesture.on("gesturestart", (e) =>
        processGstart(gstart, e, target, prevData)
      );
      gesture.on("gesturemove", (e) => processGmove(null, e, target, prevData));
      gesture.on("gestureend", (e) => processGend(gend, e, target, prevData));
      if (READONLY.enabled) {
        gesture.stop();
      }
      // tap
      puz.getTapPanels().forEach((panelHtml, idx) => {
        let panel = new tapspace.SpaceHTML(panelHtml, top).setSize(0, 0);
        // tap panel
        let tap = new tapspace.Touchable(view, panel);
        registerTouchTiles(top.id, "tap" + idx, tap, opt);
        tap.start({ tap: true });
        tap.on("tap", (e) => processTap(thand, e, target, idx));
        if (READONLY.enabled) {
          tap.stop();
        }
      });
      // workaround
      if (!flag) {
        gmid(target, data);
        addCursor();
        shareState(target, top.id, data, {}, opt.local);
      } else {
        puz.frozeTile(target, data.o);
      }
      return target;
    }
    function registerTouchTiles(_id, head, touchtile, opt) {
      let id = _id;
      if (opt.id) {
        id = opt.id;
      }
      if (!READONLY.tiles) {
        READONLY.tiles = {};
      }
      let key = head + "_" + getOrgId(id);
      if (key in READONLY.tiles) {
        READONLY.tiles[key].stop();
      }
      READONLY.tiles[key] = touchtile;
    }
    /*
  function calcOffset () {
    OFFSET.x = 0;
    OFFSET.y = 0;
    let node = me;//.previousElementSibling;
    let paddingTop ='';
    let marginTop='';
    while (node) {
      if (node && node.style) {
        console.log(node.style.padding);
        console.log(node.style.margin);
        paddingTop = node.style['padding-top'];
        marginTop = node.style['margin-top'];
        if (paddingTop) {
          OFFSET.y += parseInt(paddingTop,10);
        }
        if (marginTop) {
          OFFSET.y += parseInt(marginTop,10);
        }
        node = node.previousElementSibling;
      }
    }
    node = me;
    while (node.tagName !=='BODY') {
      if (!node.style) {
        continue;
      }
      let paddingLeft = node.style['padding-left'];
      let marginLeft = node.style['margin-left'];
      let paddingTop = node.style['padding-top'];
      let marginTop = node.style['margin-top'];
      if (paddingLeft) {
        OFFSET.x += parseInt(paddingLeft,10);
      }
      if (marginLeft) {
        OFFSET.x += parseInt(marginLeft,10);
      }
      if (paddingTop) {
        OFFSET.y += parseInt(paddingTop,10);
      }
      if (marginTop) {
        OFFSET.y += parseInt(marginTop,10);
      }
      node = node.parentNode;
    }
    console.log(OFFSET.x+' '+OFFSET.y);
  }
  */
    function init(_me, _puz, callback) {
      me = _me;
      //calcOffset();
      puz = _puz;
      let src = null;
      let forid = me.getAttribute("for");
      if (forid) {
        src = me.getRootNode().getElementById(forid);
      }
      if (!src) {
        me.attachShadow({ mode: "open" });
        src = me.shadowRoot;
      }
      // style
      let style = document.createElement("style");
      src.append(style);
      style.innerHTML = puz.getCSS() + getCSS();
      // mount point
      let div = document.createElement("div");
      let width = me.getAttribute('width');
      let height = me.getAttribute('height');
      if (width && height) {
        div.style = ` margin:0px;
 padding:0px;
 width:${width};
 height:${height};`;
      } else {
        div.style = getStyle();
      }
      src.append(div);
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

      board = new tapspace.SpaceHTML(
        '<div style="width:0px;height:0px;transform:translate(-2500px,-2500px)"></div>',
        root
      ).setSize(0, 0);

      puz.init(view, { set: setPartialState, get: getState, last: getLastPartialState});
      callback();
      final();
      shareStateAll();
    }
    function rotate(value) {
      let angle = parseFloat(value);
      view.rotate(view.atMid(), angle);
      shareStateAll();
    }
    function zoom(value) {
      let scale = parseFloat(value);
      view.scale(view.atMid(), scale);
      // zoom not associated with STATE
      //shareStateAll();
    }
    function fit() {
      view.fitScale(root);
      view.scale(view.atMid(), 1.618);
    }
    /*
  function convertViewpoint (v) {
    let tx = v[2];
    let ty = v[3];
    let c = v[0];
    let s = v[1];
    let scale = Math.sqrt(c*c+s*s);
    
    return {scale:scale,angle:angle,tx:tx,ty:ty};
  }
  */
    function distillMatrix(item) {
      let node = view.getElementBySpaceItem(item);
      let transformStr = node.style.getPropertyValue("transform");
      let matrix = (a, b, c, d, e, f) => {
        return { s: a, r: b, tx: e, ty: f };
      };
      let val = {s:1,r:0,tx:0,ty:0};
      if (transformStr) {
        try {
          val = eval("(()=>" + transformStr + ")();");
        } catch (e) {
          console.log('e:'+e+' '+transformStr);
        }
      }
      return val;
    }
    function getOrientation() {
      let baseMat = distillMatrix(view.getParent());
      let viewMat = distillMatrix(view);

      let baseAngle = -Math.atan2(baseMat.r, baseMat.s);
      let viewAngle = -Math.atan2(viewMat.r, viewMat.s);
      return baseAngle;
    }
    function final() {
      fit();
      ///
      let viewNode = view.getElementBySpaceItem(view);
      let touchNode = viewNode.parentNode.parentNode;
      startBaseClick(touchNode);
      ///
      let touch = new tapspace.Touchable(view, view);
      touch.start({ translate: true, rotate: true, scale: true });
      touch.on("gestureend", (e) =>{
        let value = { detail: { value: true } };
        me.dispatchEvent(new CustomEvent("click", value));
      });
      if (('ontouchend' in document)) {
        touch.stop();
      }
      ANCHOR.ground = touch;
      HAND.ground = touch;
      if (ANCHOR.enabled) {
        changeMode(null, "anchor");
        ANCHOR.ground.stop();
      } else if (LOCK.enabled) {
        changeMode(null, "lock");
      } else if (HAND.enabled) {
        changeMode(null, "hand");
        HAND.ground.stop();
        startBaseClick();
      } else if (READONLY.enabled) {
        changeMode(null, "readonly");
      } else {
        changeMode(null, null);
      }
    }
    function addCursor() {
      let spaceNode = view.getElementBySpaceItem(space);
      if (ANCHOR.enabled) {
        Array.from(spaceNode.querySelectorAll("div.tr.tr__base")).map((t) => {
          t.classList.add("cursor--grab");
        });
      } else if (READONLY.enabled) {
        // nop
      } else if (LOCK.enabled) {
        Array.from(spaceNode.querySelectorAll("div.tr__base")).map((t) => {
          t.classList.add("cursor--crosshair");
        });
      } else if (HAND.enabled) {
        Array.from(spaceNode.querySelectorAll("div.tr.tr__base")).map((t) => {
          t.classList.add("cursor--nodrop");
        });
      } else {
        Array.from(spaceNode.querySelectorAll("div.tr.tr__base")).map((t) => {
          t.classList.add("cursor--nodrop");
        });
      }
    }
    function changeMode(oldValue, newValue) {
      return;
      let spaceNode;
      let baseNode;
      if (space) {
        spaceNode = view.getElementBySpaceItem(space);
        baseNode = view.getElementBySpaceItem(board);
      }
      if (oldValue === "anchor") {
        enableAnchor(false);
        if (space) {
          baseNode.classList.remove("cursor--default");
          spaceNode.classList.remove("cursor--pointer");
          Array.from(spaceNode.querySelectorAll("div.tr.tr__base")).map((t) => {
            t.classList.remove("cursor--grab");
          });
        }
      } else if (oldValue === "readonly") {
        enableReadonly(false);
        if (space) {
          spaceNode.classList.remove("cursor--move");
        }
      } else if (oldValue === "lock") {
        enableLock(false);
        if (space) {
          baseNode.classList.remove("cursor--move");
          spaceNode.classList.remove("cursor--pointer");
          Array.from(spaceNode.querySelectorAll("div.tr")).map((t) => {
            t.classList.remove("cursor--crosshair");
          });
        }
      } else if (oldValue === "hand") {
        enableHand(false);
        if (space) {
          baseNode.classList.remove("cursor--copy");
          spaceNode.classList.remove("cursor--pointer");
          Array.from(spaceNode.querySelectorAll("div.tr.tr__base")).map((t) => {
            t.classList.remove("cursor--nodrop");
          });
        }
      } else {
        if (space) {
          baseNode.classList.remove("cursor--move");
          spaceNode.classList.remove("cursor--pointer");
          Array.from(spaceNode.querySelectorAll("div.tr.tr__base")).map((t) => {
            t.classList.remove("cursor--grab");
          });
        }
      }
      ////
      if (newValue === "anchor") {
        enableAnchor(true);
        if (space) {
          baseNode.classList.add("cursor--default");
          spaceNode.classList.add("cursor--pointer");
          addCursor();
        }
      } else if (newValue === "readonly") {
        enableReadonly(true);
        if (space) {
          spaceNode.classList.add("cursor--move");
          addCursor();
        }
      } else if (newValue === "lock") {
        enableLock(true);
        if (space) {
          baseNode.classList.add("cursor--move");
          spaceNode.classList.add("cursor--pointer");
          addCursor();
        }
      } else if (newValue === "hand") {
        enableHand(true);
        if (space) {
          baseNode.classList.add("cursor--copy");
          spaceNode.classList.add("cursor--pointer");
          addCursor();
        }
      } else {
        if (space) {
          baseNode.classList.add("cursor--move");
          spaceNode.classList.add("cursor--pointer");
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
          for (let key in READONLY.tiles) {
            let id = null;
            if (/_(\d+)$/.test(key)) {
              id = RegExp.$1;
            }
            if (id) {
              READONLY.tiles[key].stop();
            }
          }
        } else {
          for (let key in READONLY.tiles) {
            let id = null;
            if (/_(\d+)$/.test(key)) {
              id = RegExp.$1;
            }
            if (id) {
              READONLY.tiles[key].resume();
            }
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
    function enableLock(newValue) {
      let oldValue = LOCK.enabled;
      if (oldValue === newValue) {
        // nop
        return;
      }
      LOCK.enabled = newValue;
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
    function endBaseClick (baseNode) {
      let timeout = 500;
      if (('ontouchend' in document)) {
        timeout = 2500;
      }
          window.setTimeout(()=>{
            if (HAND.ok===0) {
              document.body.classList.remove('move');
              if (('ontouchend' in document)) {  
                HAND.ground.stop();
              }     
              baseNode.classList.remove("cursor--move");
              baseNode.classList.add("cursor--copy");
              baseNode.addEventListener("click", baseClick,false);  
            }
          },timeout);
    }
    function startBaseClick(_baseNode) {
      //let baseNode = view.getElementBySpaceItem(space).parentNode;
      let baseNode = view.getElementBySpaceItem(board);
      if (_baseNode) {
        baseNode = _baseNode;
      }
      if (_baseNode) {
        let down = 'mousedown';
        let move = 'mousemove';
        let up = 'mouseup';
        let out = 'mouseout';
        if (('ontouchend' in document)) {
          down = 'touchstart';
          move = 'touchmove';
          up = 'touchend';
          out = 'touchcancel';
        }
        baseNode.addEventListener(down, e=>{
          HAND.ok++;
        });
        
        baseNode.addEventListener(out, e=>{
          HAND.ok--;
          if (HAND.ok<0) {
            HAND.ok = 0;
          }
          endBaseClick (baseNode);
        });
        baseNode.addEventListener(up, e=>{
          HAND.ok--;
          endBaseClick (baseNode);
        },false);
        baseNode.addEventListener(move, e=>{
          if (HAND.ok===1) {
            baseNode.removeEventListener("click", baseClick,false);
            baseNode.classList.add("cursor--move");
            baseNode.classList.remove("cursor--copy");
            document.body.classList.add('move');
            if (('ontouchend' in document)) {
              HAND.ground.resume();
            }
          }
        },false);
      }
      HAND.ok = 0;
      baseNode.classList.remove("cursor--move");
      baseNode.classList.add("cursor--copy");
      baseNode.addEventListener("click", baseClick,false);

      
    }
    function stopBaseClick(_baseNode) {
      let baseNode = view.getElementBySpaceItem(board);
      if (_baseNode) {
        baseNode = _baseNode;
      }
      baseNode.removeEventListener("click", baseClick);
    }
    function baseClick(e) {
      let spaceNode = view.getElementBySpaceItem(space);
      let transformStr = spaceNode.style.getPropertyValue("transform");
      let matrix = (a, b, c, d, e, f) => {
        return { c: a, s: b, tx: e, ty: f };
      };
      let m = eval("(()=>" + transformStr + ")();");
      let scale = Math.sqrt(m.c * m.c + m.s * m.s);
      let theta = Math.atan2(m.s, m.c);
      let cos = Math.cos(-theta);
      let sin = Math.sin(-theta);
      let sx = (e.clientX - OFFSET.x - m.tx) / scale;
      let sy = (e.clientY - OFFSET.y - m.ty) / scale;
      let dx = cos * sx - sin * sy;
      let dy = sin * sx + cos * sy;
      let data = puz.detectPoint(dx, dy);
      if (checkFootprint(data)) {
        // nop
        return;
      }
      let pos = { x: dx, y: dy };
      let target = INITTILECALLBACK(data, { local: true });
      let id = target.top.id;
      STATE[id] = data;
      targetHash[id] = target;
      shareStateAll();
    }
    function noMoveAll(newValue) {
      NOALL.noMove = !!newValue;
    }
    function noFlipAll(newValue) {
      NOALL.noFlip = !!newValue;
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
    }
    div.cursor--crosshair {
      cursor: crosshair;
    }`;
    }
    function getStyle() {
      return `
 margin:0px;
 padding:0px;
 width:100%;
 height:100%;
 `;
    }
  };
}
