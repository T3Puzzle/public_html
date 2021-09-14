(() => {
  let posHash = {};
  let prevX = 0;
  let prevY = 0;
  initHtml();
  let space = new tapspace.Space();
  let view = new tapspace.SpaceView(space);
  customElements.define(
    "tapspace-grid",
    class extends HTMLElement {
      connectedCallback() {
        let template = this.querySelector("template");
        if (!template) {
          return;
        }
        let div = document.createElement("div");
        div.style = getCommonStyle();
        div.insertAdjacentHTML("beforeend", getTriangleStyle());
        this.attachShadow({ mode: "open" }).append(div);
        view.mount(div);
        process(template.innerHTML, view);
      }
    }
  );
  function process(tile, view) {
    const XSIZE = 100;
    const YSIZE = 86.60254;
    const WX = 8;
    const WY = 7;
    let NUM = 9;
    var grid = new tapspace.geom.IGrid(
      {
        xStep: XSIZE,
        yStep: XSIZE,
        yRotation: (Math.PI * 2) / 3, // y軸を傾け
        rotateStep: Math.PI / 3,
        scaleStep: 10000,
        scalePhase: 1
      },
      space
    );
    var g = new tapspace.SpaceGroup(space);

    var touchmode = { translate: true, tap: true };

    let tapHandler = function (ev, k) {
      //console.log(ev.item._T);
      ev.item.rotate(ev.item.at(XSIZE / 2, (k * YSIZE) / 3), (Math.PI * 2) / 3);
    };
    for (let i = 0; i < WX; i++) {
      for (let j = 0; j < WY; j++) {
        for (let k = 0; k < 2; k++) {
          if (j === 0 && k === 1) {
            continue;
          }
          if (j === WY - 1 && k === 0) {
            continue;
          }
          if (i - j > WX / 2) {
            continue;
          }
          if (i - j < -WY / 2) {
            continue;
          }
          let _tile = "";
          if (k === 0) {
            _tile = tile;
          } else {
            _tile = '<div class="downsideup">' + tile + "</div>";
          }
          let px = new tapspace.SpaceHTML(_tile, g);
          px.setSize(0, 0);
          px.translate(px.atMid(), grid.at(i, j));
          setHash(px);
          
          px.rotate(
            px.at(XSIZE / 2, ((1 - 2 * k) * YSIZE) / 3),
            pickRandom([0, (Math.PI * 2) / 3, (-Math.PI * 2) / 3])
          );

          let touch = new tapspace.Touchable(view, px);
          touch.start(touchmode);
          touch.on("gesturestart", function () {
            px.bringToFront();
            deleteHash(px);
            prevX = px._T.tx;
            prevY = px._T.ty;
          });
          touch.on("gestureend", function () {
            let dx = -px._T.tx;
            let dy = -px._T.ty;
            px.snap(px.atMid(), grid);
            dx += px._T.tx;
            dy += px._T.ty;
            let norm = Math.sqrt(dx * dx + dy * dy);
            //console.log(norm);
            // TODO:
            /*
            if (norm>20){
              // revert first
              px.rotate(px.atMid(), Math.PI/2);
              px.snap(px.atMid(), grid);
            }
            */
            if (checkHash(px)) {
              console.log("dup"+genKey(px));
              px._T.tx = prevX;
              px._T.ty = prevY;
              px.snap(px.atMid(), grid);
            } else {
              console.log("safe"+genKey(px));
            }
            setHash(px);
          });

          if (k === 0) {
            touch.on("tap", (e) => tapHandler(e, 1));
          } else {
            touch.on("tap", (e) => tapHandler(e, -1));
          }
        }
      }
    }
    // Initial view position
    view.fitScale(g);
    view.scale(view.atMid(), 1.618);

    // Make view transformable
    var tView = new tapspace.Touchable(view, view);
    tView.start(touchmode);
  }
  function genKey(obj) {
    let ar = obj._T;
    let downsideup = /downsideup/.test(obj.html);
    let out = [];
    let prec = 1000;
  let a ={
    "s": 1,
    "r": 0,
    "tx": 50.00000000000002,
    "ty": 86.60254037844388,
  };
  let b = {
    "s": -0.4999999999999994,
    "r": 0.8660254037844389,
    "tx": 99.99999999999999,
    "ty": -7.105427357600994e-15,
  };
   let c = {
    "s": -0.4999999999999996,
    "r": -0.8660254037844388,
    "tx": 150.00000000000003,
    "ty": 86.60254037844388,
    };
  let xa = {
    "s": 1,
    "r": 0,
    "tx": 0,
    "ty": 0,
  };
  let xb = {
    "s": -0.4999999999999994,
    "r": 0.8660254037844389,
    "tx": 99.99999999999999,
    "ty": -7.105427357600994e-15,
  };
  let xc = {
    "s": -0.4999999999999996,
    "r": -0.8660254037844388,
    "tx": 50.00000000000014,
    "ty": 86.60254037844388,
    };
  let ret = {};
  for(let k in ar){
    let v = ar[k];
    if (v===-0) {
      v = 0;
    }
    ret[k]=v;
  }
  if (downsideup) {
    if (near(a.s,ret.s,a.r,ret.r)) {
      outpush(prec,out,[ret.tx-a.tx, ret.ty-a.ty]);
    } else if (near(b.s,ret.s,b.r,ret.r)) {
      outpush(prec,out,[ret.tx-b.tx, ret.ty-b.ty]);
    } else if (near(c.s,ret.s,c.r,ret.r)) {
      outpush(prec,out,[ret.tx-c.tx, ret.ty-c.ty]);
    }
  } else {
    if (near(xa.s,ret.s,xa.r,ret.r)) {
      outpush(prec,out,[ret.tx-xa.tx, ret.ty-xa.ty]);
    } else if (near(xb.s,ret.s,xb.r,ret.r)) {
      outpush(prec,out,[ret.tx-xb.tx, ret.ty-xb.ty]);
    } else if (near(xc.s,ret.s,xc.r,ret.r)) {
      outpush(prec,out,[ret.tx-xc.tx, ret.ty-xc.ty]);
    }
  }
    return JSON.stringify([downsideup,out]);
  }
  function outpush (prec,out,val) {
  out.push(Math.round(prec*val[0]),Math.round(prec*val[1]));
}
function near(tx,sx,ty,sy) {
  return((tx-sx)*(tx-sx)+(ty-sy)*(ty-sy)<0.01);

}
  function checkHash(obj) {
    let key = genKey(obj);
    return key in posHash;
  }
  function deleteHash(obj) {
    let key = genKey(obj);
    delete posHash[key];
  }
  function setHash(obj) {
    let key = genKey(obj);
    posHash[key] = true;
  }
  function pickRandom(arr) {
    var i = Math.floor(Math.random() * arr.length);
    return arr[i];
  }
  function getCommonStyle() {
    return `
 margin:0;
 padding:0;
 width:100%;
 height:100%;
 `;
  }
  function initHtml() {
    let commonStyle = getCommonStyle();
    document.querySelector("html").style = commonStyle;
    document.querySelector("body").style = commonStyle;
  }
  function getTriangleStyle() {
    return `<style>
  div.tr {
  width: 100px;
  height: 100px;
  background: rgba(68,162,225,0.5);
  transform-origin: 50px 0px;
  transform: matrix3d(1, 0, 0, 0, 0, 86.60254, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1);
  display: inline-block;
  position: absolute;
}  
div.white {
  background: rgba(255,255,255,0.5);
}
div.downsideup {
  transform-origin: 50px 0px;
  transform: rotate(180deg);
}
    </style>`;
  }
})();
