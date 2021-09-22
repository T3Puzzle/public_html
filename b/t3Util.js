export { t3Util };

function t3Util() {
  const XSIZE = 100;
  const YSIZE = 86.60254;
  const IMGS = ['https://www.t3puzzle.com/n/t30.png','https://www.t3puzzle.com/n/t31.png'];
  const GRID__YROTATION = (Math.PI * 2) / 3;
  const GRID__ROTATESTEP = Math.PI / 3;
  const ROTATES = [0, GRID__YROTATION, -GRID__YROTATION];
  const XCENTER = XSIZE / 2;
  const YCENTER = YSIZE / 3;
  let TILECOLOR_NOW = 0;
  let view = null;
  let initTileCallback = null;
  let stateAccess = null;
  const COLORS = ['blue',
                  'pink',
                  'green',
                  'mint'
  ];
      return {
    XSIZE,
    YSIZE,
    IMGS,
    GRID__YROTATION,
    GRID__ROTATESTEP,
    ROTATES,
    XCENTER,
    YCENTER,
    getTileHtml,
    getImgHtml,
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
    setNowColor,
  };
  function setNowColor (color){
    let idx = COLORS.indexOf(color);
    if (idx===-1) {
      idx = 0;
    }
    TILECOLOR_NOW = idx;
  }
  function rotateTile(tile, dir) {
    let angle = ROTATES[dir];
    tile.resetTransform();
    tile.rotate(tile.at(XCENTER, YCENTER), angle);
  }
  function setFace(target, data) {
    let top = target.top;
    let tile = target.tile;
    let img0 = target.img0;
    rotateTile(tile, data.l);
    rotateTile(img0, data.l);
    setFaceColor(target, data);
  }
  function switchFace(target, idx) {
    let top = target.top;
    let tile = target.tile;
    let img0 = target.img0;
    //console.log(idx);
    let id = top.id;
    let state = stateAccess.get(id);
    let dir = state.l;
    let base = state.m;
    let color = TILECOLOR_NOW;
    
    if (dir === idx) {
      base = (base + 1) % 2;
    } else {
      dir = idx;
    }
    setFaceColor(target,{m:base, n:color});

    stateAccess.set(id, { l: dir, m: base, n: color });
    rotateTile(tile, dir);
    rotateTile(img0, dir);
  }
  function adjustTurn(target, data, prevData) {
    if (prevData.k === data.k) {
      return;
    }
    let top = target.top;
    let tile = target.tile;
    let img0 = target.img0;
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
    rotateTile(img0, dir);
  }
  function adjustTransform(data, target) {
    let top = target.top;
    let tile = target.tile;
    // TODO: t3specific
    if (data.k === 1) {
      top.rotate(tile.at(XSIZE / 4, YSIZE / 2), Math.PI);
    }
    let imgback = target.imgback;
    let img0 = target.img0;
    // TODO: t3specific
    if (data.k === 1) {
      imgback.rotate(img0.at(XSIZE / 4, YSIZE / 2), Math.PI);
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
    let n=TILECOLOR_NOW;
    let f0,f1,f2;
    if (k===0) {
      f1 = sq(ox,oy);
      f0 = sq(1-ox,1-oy);
      f2 = sq(1-ox,oy);
    } else {
      f0 = sq(ox,oy);
      f1 = sq(1-ox,1-oy);
      f2 = sq(ox,1-oy);
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
          let n = TILECOLOR_NOW;

          callback({ i, j, k, l, m,n }, { local: true });
        }
      }
    }
  }
  function setFaceColor(target, data) {
    let imgbackNode = view.getElementBySpaceItem(target.imgback);
    let m = data.m;
    let n = data.n;
    let img0 = imgbackNode.querySelector('img.img0');
    let img1 = imgbackNode.querySelector('img.img1');
    [img0,img1].map(i=>{
      i.classList.remove('hide');
      COLORS.map(c=>{
        i.classList.remove(c);
      })
    });
    let imgn = null;
    let imgm = null;
    if (m===0) {
      imgn = img0;
      imgm = img1;
    } else {
      imgn = img1;
      imgm = img0;
    }
    imgn.classList.add('hide');
    imgm.classList.add(COLORS[n]);
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
img.hide {
  display:none;
}
/*
https://developer.mozilla.org/ja/docs/Web/CSS/filter-function/hue-rotate()
*/
img.blue { filter:brightness(1.05)saturate(120%) hue-rotate(100deg)drop-shadow(0 0 0.12rem rgba(100,100,100,0.7));
}
img.pink {
  filter: saturate(140%) hue-rotate(230deg)drop-shadow(0 0 0.12rem rgba(100,100,100,0.7));
}
img.green {
  filter:brightness(1.05) saturate(120%) hue-rotate(20deg)drop-shadow(0 0 0.12rem rgba(100,100,100,0.7));
}
img.mint {
  filter:brightness(1.20) saturate(130%) hue-rotate(70deg)drop-shadow(0 0 0.12rem rgba(100,100,100,0.7));
}
`;
  }
  function getImgHtml() {
    return `<div style="transform-origin:${XCENTER}px ${YCENTER}px;transform:scale(0.97);">
     <img src="${IMGS[0]}" class="img0" width="${XSIZE}" height="${YSIZE}">
     <img src="${IMGS[1]}" class="img1" width="${XSIZE}" height="${YSIZE}">
    </div>
    `;
  }
  function getTileHtml() {
    return `<div style="transform-origin:${XCENTER}px ${YCENTER}px;transform:scale(0.97);">
         <div class="tr tr__base">
     </div>
 <div style="transform-origin:${
       XSIZE / 2
     }px ${YSIZE}px;transform:scale(0.50);">
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
     <div style="transform-origin:${
       XSIZE / 2
     }px ${YSIZE}px;transform:scale(0.333)">
    <div class="tr"></div>
    </div></div>`,
  `
    <div style="transform-origin:${XCENTER}px ${YCENTER}px;transform:scale(0.97);">
    <div style="transform-origin:0px 0px;transform:scale(0.333)">
    <div class="tr"></div>
      </div></div>`,     `
    <div style="transform-origin:${XCENTER}px ${YCENTER}px;transform:scale(0.97);">
    <div style="transform-origin:100px 0px;transform:scale(0.333)">
    <div class="tr"></div>
    </div></div>`,
    ];
  }
  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
