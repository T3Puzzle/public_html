export { t3Util };

function t3Util() {
  const XSIZE = 100;
  const YSIZE = 86.60254;
  const GRID__YROTATION = (Math.PI * 2) / 3;
  const GRID__ROTATESTEP = Math.PI / 3;
  const ROTATES = [0, GRID__YROTATION, -GRID__YROTATION];
  const XCENTER = XSIZE / 2;
  const YCENTER = YSIZE / 3;
  const TILECOLOR_WHITE = 'color--white';
  const TILECOLOR_ALL = [TILECOLOR_WHITE,'color--blue','color--pink','color--green','color--mint'];
  let TILECOLOR_NOW = 'color--blue';
  let view = null;
  let initTileCallback = null;
  let stateAccess = null;
  const COLORS = ['color--blue',
                  'color--pink',
                  'color--green',
                  'color--mint'
  ];
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
    detectPoint,
    detectPosition,
    setTileColor,
  };
  function getColorIndex(){
    if (TILECOLOR_NOW === 'color--blue') {
      return 0;
    } else if (TILECOLOR_NOW === 'color--pink') {
      return 1;
    } else if (TILECOLOR_NOW === 'color--green') {
      return 2;
    } else if (TILECOLOR_NOW === 'color--mint') {
      return 3;     
    }
    return 0;
  }
  function setTileColor (color){
    if ('blue'===color) {
      TILECOLOR_NOW = 'color--blue';
    } else if ('pink'===color) {
      TILECOLOR_NOW = 'color--pink';
    } else if ('green'===color) {
      TILECOLOR_NOW = 'color--green';
    } else if ('mint'===color) {
      TILECOLOR_NOW = 'color--mint';
    } else {
      // ignore unknowns
    }
  }
  function rotateTile(tile, dir) {
    let angle = ROTATES[dir];
    tile.resetTransform();
    tile.rotate(tile.at(XCENTER, YCENTER), angle);
  }
  function setFace(target, data) {
    let top = target.top;
    let tile = target.tile;
    let topNode = view.getElementBySpaceItem(top);
    rotateTile(tile, data.l);
    setFaceColor(topNode, data);
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
    let color = getColorIndex();
    
    if (dir === idx) {
      base = (base + 1) % 2;
      setFaceColor(topNode,{m:base, n:color});
    } else {
      dir = idx;
    }

    stateAccess.set(id, { l: dir, m: base, n: color });
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
    let color = state.n;
    if (state.k) {
      dir = (dir + 3 - 1) % 3;
    } else {
      dir = (dir + 3 + 1) % 3;
    }
    stateAccess.set(id, { l: dir, m: base, n: color });
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
    let transformStr = topNode.style.getPropertyValue("transform");
    let matrix = (a, b, c, d, e, f) => {
      return { s: a, tx: e, ty: f };
    };
    let mat = eval("(()=>" + transformStr + ")();");
    let {dx,dy,pk} = detectPositionPoint(mat.tx, mat.ty, mat.s);
    
    let xx = ((Math.sign(dx) * dx) % 1) - 1 / 2;
    let yy = ((Math.sign(dy) * dy) % 1) - 1 / 3;
 
    let i,j,k;
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
    return {i,j,k};
  }
  function detectPoint (tx,ty) {
    let i = 0;
    let j = 0;
    let k = 0;  
    let {dx,dy,pk} = detectPositionPoint(tx,ty);
    i = Math.floor(dx);
    j = Math.floor(dy);
    if (i === -0) {
      i = 0;
    }
    if (j === -0) {
      j = 0;
    }
    let ox = dx-i;
    let oy = dy-j;
    if (ox<oy) {
      k = 1;
    }
    let l=0;
    let m=1; // default
    let n=getColorIndex();
    let f0,f1,f2;
    if (k===0) {
      f0 = sq(ox,oy);
      f2 = sq(1-ox,1-oy);
      f1 = sq(1-ox,oy);
    } else {
      f2 = sq(ox,oy);
      f0 = sq(1-ox,1-oy);
      f1 = sq(ox,1-oy);
    }
    if (f0<=f1 && f0<=f2) {
      l = 0;
    }
    if (f1<=f0 && f1<=f2) {
      l = 1;
    }
    if (f2<=f0 && f2<=f1) {
      l = 2;
    }
    // TODO: l,m too.
    return {i,j,k,l,m,n};
  }
  function sq (x,y){
    return x*x+y*y;
  }
  function detectPositionPoint (tx,ty,s) {
    let i = 0;
    let j = 0;
    let k = 0;
    let pk = 0;
    if ( s !==null && s < 0) {
      pk = 1;
      s *= -1;
      tx -= XSIZE / 2;
      ty -= YSIZE;
    }
    let dy = ty / YSIZE;
    let pj = Math.round(dy);
    let dx = pj / 2 + tx / XSIZE;
    return { dx, dy, pk };
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
          let n = getColorIndex();

          callback({ i, j, k, l, m,n }, { local: true });
        }
      }
    }
  }
  function setFaceColor(topNode, data) {
    let m = data.m;
    let n = data.n;
    let base = topNode.querySelector("div.tr__base");
    let tip = topNode.querySelector("div.tr__tip");
    TILECOLOR_ALL.map(c=>{
      base.classList.remove(c);
      tip.classList.remove(c);
    });
    if (m === 0) {
      base.classList.add(COLORS[n]);
      tip.classList.add(TILECOLOR_WHITE);
    } else {
      base.classList.add(TILECOLOR_WHITE);
      tip.classList.add(COLORS[n]);
    }
  }
  function toggleFaceColor(topNode) {
    let base = topNode.querySelector("div.tr__base");
    let tip = topNode.querySelector("div.tr__tip");
    if (base.classList.contains(TILECOLOR_WHITE)) {
      TILECOLOR_ALL.map(c=>{
        base.classList.remove(c);
        tip.classList.remove(c);
      });
      base.classList.add(TILECOLOR_NOW);
      tip.classList.add(TILECOLOR_WHITE);
    } else {
      TILECOLOR_ALL.map(c=>{
        base.classList.remove(c);
        tip.classList.remove(c);
      });
      base.classList.add(TILECOLOR_WHITE);
      tip.classList.add(TILECOLOR_NOW);
    }
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
div.color--white {
  background: rgba(255,255,255,1);
}
div.color--blue {
  background: rgba(68,162,225,1);
}
div.color--pink {
  background: rgba(255,122,190,1);
}
div.color--green {
  background: rgba(54,210,102,1);
}
div.color--mint {
  background: rgba(100,225,230,1);
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
