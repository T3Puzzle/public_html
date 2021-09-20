export { t3Util };

function t3Util() {
  const XSIZE = 100;
  const YSIZE = 86.60254;
  const GRID__YROTATION = (Math.PI * 2) / 3;
  const GRID__ROTATESTEP = Math.PI / 3;
  const ROTATES = [0, GRID__YROTATION, -GRID__YROTATION];
  const XCENTER = XSIZE / 2;
  const YCENTER = YSIZE / 3;
  let view = null;
  let initTileCallback = null;
  let stateAccess = null;

  return {
    XSIZE,
    YSIZE,
    GRID__YROTATION,
    GRID__ROTATESTEP,
    ROTATES,
    XCENTER,
    YCENTER,
    getTileHtml,
    getCSS,
    getTapPanels,
    load,
    adjustTransform,
    setFace,
    switchFace,
    adjustTurn,
    init,
    getInitTileCallback,
    detectPosition
  };
  function rotateTile(tile, dir) {
    let angle = ROTATES[dir];
    tile.resetTransform();
    tile.rotate(tile.at(XCENTER, YCENTER), angle);
  }
  function setFace(target, data) {
    let top = target.top;
    let tile = target.tile;
    let id = top.id;
    let topNode = view.getElementBySpaceItem(top);
    rotateTile(tile, data.l);
    setColor(topNode, data.m);
  }
  function switchFace(target, idx) {
    let top = target.top;
    let tile = target.tile;
    let topNode = view.getElementBySpaceItem(top);
    //console.log(idx);
    let id = top.id;
    let state = stateAccess.get(id);
    let dir = state.l;
    let base = state.m;

    if (dir === idx) {
      base = (base + 1) % 2;
      toggleColor(topNode);
    } else {
      dir = idx;
    }

    stateAccess.set(id, { l: dir, m: base });
    rotateTile(tile, dir);
  }
  function adjustTurn(target, data, prevData) {
    if (prevData.k === data.k) {
      return;
    }
    let top = target.top;
    let tile = target.tile;
    let id = top.id;
    let state = stateAccess.get(id);
    let dir = state.l;
    let base = state.m;
    if (state.k) {
      dir = (dir + 3 - 1) % 3;
    } else {
      dir = (dir + 3 + 1) % 3;
    }
    stateAccess.set(id, { l: dir, m: base });
    rotateTile(tile, dir);
  }
  function adjustTransform(data, target) {
    let top = target.top;
    let tile = target.tile;
    // TODO: t3specific
    if (data.k === 1) {
      top.rotate(tile.at(XSIZE / 4, YSIZE / 2), Math.PI);
    }
  }
  function detectPosition(top) {
    let topNode = view.getElementBySpaceItem(top);
    let transformStr = topNode.style.transform;
    let matrix = (a, b, c, d, e, f) => {
      return { s: a, tx: e, ty: f };
    };
    let mat = eval("(()=>" + transformStr + ")();");
    let i = 0;
    let j = 0;
    let k = 0;
    let pk = 0;
    if (mat.s < 0) {
      k = 1;
      pk = 1;
      mat.s *= -1;
      mat.tx -= XSIZE / 2;
      mat.ty -= YSIZE;
    }
    let dy = mat.ty / YSIZE;
    let pj = Math.round(dy);
    let dx = pj / 2 + mat.tx / XSIZE;
    let xx = ((Math.sign(dx) * dx) % 1) - 1 / 2;
    let yy = ((Math.sign(dy) * dy) % 1) - 1 / 3;
    let norm = Math.sqrt(xx * xx + yy * yy);
    //console.log(norm);
    if (norm < 1 / 3) {
      i = Math.round(dx + 1 / 2);
      j = Math.round(dy - 1 / 2);
      k = (pk + 1) % 2;
    } else {
      i = Math.round(dx);
      j = Math.round(dy);
      k = (pk + 0) % 2;
    }
    if (pk === 1 && k === 0) {
      i -= 1;
      j += 1;
    }
    if (i === -0) {
      i = 0;
    }
    if (j === -0) {
      j = 0;
    }
    return { i, j, k };
  }
  function load(opts, callback) {
    initTileCallback = callback;
    // TODO: load from storage etc.
    const WX = 8;
    const WY = 6;
    for (let i = 0; i < WX; i++) {
      for (let j = 0; j < WY; j++) {
        for (let k = 0; k < 2; k++) {
          if (k === 0) {
            if (j-i-1>WY/3) {
              continue;
            } else if (i-j+1>=WX-WY/3) {
              continue;
            }
          } else{
            if (j-i-1>=WY/3) {
              continue;
            } else if (i-j+1>WX-WY/3) {
              continue;
            }
          }
          let l = randomInt(3);
          let m = randomInt(2);

          callback({ i, j, k, l, m }, { local: true });
        }
      }
    }
  }
  function setColor(topNode, m) {
    let base = topNode.querySelector("div.tr__base");
    let tip = topNode.querySelector("div.tr__tip");
    if (m === 0) {
      base.classList.remove("white");
      tip.classList.remove("blue");
      base.classList.add("blue");
      tip.classList.add("white");
    } else {
      base.classList.remove("blue");
      tip.classList.remove("white");
      base.classList.add("white");
      tip.classList.add("blue");
    }
  }
  function toggleColor(topNode) {
    let base = topNode.querySelector("div.tr__base");
    let tip = topNode.querySelector("div.tr__tip");
    base.classList.toggle("blue");
    base.classList.toggle("white");
    tip.classList.toggle("blue");
    tip.classList.toggle("white");
  }
  function getInitTileCallback() {
    return initTileCallback;
  }
  function init(_view, _stateAccess) {
    view = _view;
    stateAccess = _stateAccess;
  }
  function getCSS() {
    return `
  div.tr {
  width: ${XSIZE}px;
  height: ${XSIZE}px;
  transform-origin: ${XSIZE / 2}px 0px;
  transform: matrix3d(1, 0, 0, 0, 0, ${YSIZE}, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1);
  display: inline-block;
  position: absolute;
}  
/* TODO */
div.white {
  background: rgba(255,255,255,1);
}
div.blue {
  background: rgba(68,162,225,1);
}
`;
  }
  function getTileHtml() {
    return `<div style="transform-origin:${XCENTER}px ${YCENTER}px;transform:scale(0.97);">
         <div class="tr tr__base">
     </div>
 <div style="transform-origin:0px 0px;transform:scale(0.50);">
     <div class="tr tr__tip">
     </div>
      </div>
    </div>
    `;
  }
  function getTapPanels() {
    return [
      `
    <div style="transform-origin:${XCENTER}px ${YCENTER}px;transform:scale(0.97);">
    <div style="transform-origin:0px 0px;transform:scale(0.333)">
    <div class="tr"></div>
      </div></div>`,
      `
    <div style="transform-origin:${XCENTER}px ${YCENTER}px;transform:scale(0.97);">
    <div style="transform-origin:100px 0px;transform:scale(0.333)">
    <div class="tr"></div>
    </div></div>`,
      `
    <div style="transform-origin:${XCENTER}px ${YCENTER}px;transform:scale(0.97);">
     <div style="transform-origin:${
       XSIZE / 2
     }px ${YSIZE}px;transform:scale(0.333)">
    <div class="tr"></div>
    </div></div>`
    ];
  }
  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
