export { t3Util };

function t3Util() {
  const XSIZE = 100;
  const YSIZE = 86.60254;
  const GRID__YROTATION = (Math.PI * 2) / 3;
  const GRID__ROTATESTEP = Math.PI / 3;
  const ROTATES = [0,GRID__YROTATION,-GRID__YROTATION];
  const XCENTER = XSIZE / 2;
  const YCENTER = YSIZE / 3;
  let basestate = {};
  let dirstate = {};
  let view = null;
  let initTileCallback = null;
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
    toggleDownsideup,
    getFootprint,
    load,
    adjustTransform,
    setFace,
    switchFace,
    adjustTurn,
    storeState,
    init,
    loadData,
    getInitTileCallback,
  };
  function getInitTileCallback(){
    return initTileCallback;
  }
  function loadData(top,out) {
    let id = top.id;
    let ijk = getFoot(top);
   
    out.i = ijk[0];
    out.j = ijk[1];
    out.k = ijk[1];
    out.l = dirstate[id];
    out.m = basestate[id];
  }
  function storeState(top, data) {
    let id = top.id;
    setState(id,data.l,data.m);
  }
  function setState(id,dir,base) {
    dirstate[id] = dir;
    basestate[id] = base;
  }
  function rotate(tile,id) {
    let angle = ROTATES[dirstate[id]];
    tile.resetTransform();
    tile.rotate(tile.at(XCENTER, YCENTER), angle);
    // no snap
  }
  function setFace(top,tile,data) {
    let id = top.id;
    let topNode = view.getElementBySpaceItem(top); 
    setState(id,data.l,data.m);
    rotate(tile,id);
    setColor(topNode,id) ;
  }
  function switchFace(top, tile, idx) {
    let topNode = view.getElementBySpaceItem(top); 
    console.log(idx);
    let id = top.id;
    let dir = 0;
    let base = 0; 
    if (id in basestate) {
      dir = dirstate[id];
      base = basestate[id];
      if (dir === idx) {
        base = (base + 1) % 2;
        toggleColor(topNode);
      } else {
        dir = idx;
      }
    }
    setState(id,dir,base);
    rotate(tile,id);
  }
  function adjustTurn(top,tile) {
    let id = top.id;
    let dir = 0;
    let base = 0; 
    if (id in dirstate) {
      dir = dirstate[id];
      base = basestate[id];
      if (isDownsideup(top)) {
        dir = (dir + 3 + 1) % 3;
      } else {
        dir = (dir - 1) % 3;
      }
    }
    setState(id,dir,base);
    rotate(tile,id);
  }
  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function adjustTransform(k, top, tile) {
    // TODO: t3specific
    if (k === 1) {
      toggleDownsideup(top,tile);
    }
  }
  function load(opts,callback) {
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

          callback({ i, j, k, l, m });
        }
      }
    }
  }
  function toggleDownsideup(top,tile) {
    top.rotate(tile.at(XSIZE / 2, YSIZE/2), Math.PI);
    return;
    /*
    if (top._T.s > 0) {
      top._T.tx += XSIZE / 2;
      top._T.ty += YSIZE;
    } else {
      top._T.tx -= XSIZE / 2;
      top._T.ty -= YSIZE;
    }
    top._T.s *= -1;
    */
  }
  function isDownsideup(top) {
    let br = top._T;
    return Math.abs(br.r) < 0.01 && Math.abs(br.s+1) < 0.01;
  }
  function getFootprint(top) {
    return JSON.stringify(getFoot(top));
  }
  function getFoot(top) {
    let downsideup = isDownsideup(top);
    let prec = 1000;
    let i = 0;
    let j = 0;
    let k = downsideup?1:0;
    if (downsideup) {
      j = Math.round((top._T.ty - YSIZE)/YSIZE);
      i = Math.round((top._T.tx + (j-1)*XSIZE/2)/XSIZE);
    } else {
      j = Math.round((top._T.ty)/YSIZE);
      i = Math.round((top._T.tx + j*XSIZE/2)/XSIZE);
    } 
    return [i,j,k];
  }
  function setColor(topNode, id) {
    let m = basestate[id];
    let base = topNode.querySelector("div.tr__base");
    let tip = topNode.querySelector("div.tr__tip");
    if (m===0) {
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
  function init(_view) {
    view = _view;
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
}
