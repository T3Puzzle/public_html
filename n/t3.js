(() => {
  let posHash = {};
  let basestate = {};
  let dirstate = {};
  let prevX = 0;
  let prevY = 0;
  initHtml();
  let space = new tapspace.Space();
  let view = new tapspace.SpaceView(space);
  customElements.define(
    "tapspace-grid",
    class extends HTMLElement {
      connectedCallback() {
        let div = document.createElement("div");
        div.style = getCommonStyle();
        div.insertAdjacentHTML("beforeend", getTriangleStyle());
        let shadow = this.attachShadow({ mode: "open" });
        shadow.append(div);
        view.mount(div);
        let html = ` 
    <div style="transform-origin:50px 28.867513px;transform:scale(0.97);">
         <div class="tr  white">
     </div>
 <div style="transform-origin:0px 0px;transform:scale(0.50);">
     <div class="tr  blue">
     </div>
      </div>
    </div>`;
        process(html, view, shadow);
      }
    }
  );
  function process(tile, view, shadow) {
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

    let gstart = function (pp, px) {
      // console.log(pp._T);
      //px.bringToFront();
      deleteHash(pp, px);
      prevX = pp._T.tx;
      prevY = pp._T.ty;
    };
    let gend = function (pp, px) {
      let dx = -pp._T.tx;
      let dy = -pp._T.ty;
      pp.snap(px.atMid(), grid);
      dx += pp._T.tx;
      dy += pp._T.ty;
      let norm = Math.sqrt(dx * dx + dy * dy);
      console.log(norm);

      if (norm > 50) {
        // console.log(pp._T);

        // revert first
        //pp.rotate(px.at(0,0), Math.PI/2);
        toggleDownsideup(pp);
        // console.log(pp._T);
        pp.snap(px.atMid(), grid);
        // console.log(pp._T);
        
        
        let id = pp.id;
        if (id in dirstate) {
          if (isDownsideup(pp)){
            dirstate[id] = (dirstate[id]+3-1)%3;
          } else {
            dirstate[id] = (dirstate[id]+1)%3;
          }
        } else {
          basestate[id] = 0;
          dirstate[id] = 0;
        }
      px.resetTransform();
      px.rotate(
                px.at(XSIZE / 2, YSIZE / 3),
                [0, (Math.PI * 2) / 3, (-Math.PI * 2) / 3][dirstate[id]]
              );
        
      }

      if (checkHash(pp, px)) {
        console.log("dup" + genKey(pp, px));
        pp._T.tx = prevX;
        pp._T.ty = prevY;
        pp.snap(px.atMid(), grid);

        // TODO: try rotate again
      } else {
        console.log("safe" + genKey(pp, px));
      }
      setHash(pp, px);
    };
    let tapHandler = function (ev, px, idx, px3) {
      let id = ev.item.id;
      if (idx !== 3) {
        if (id in basestate) {
          if (dirstate[id] === idx) {
            basestate[id] = (basestate[id] + 1) % 2;
          } else {
            dirstate[id] = idx;
          }
        } else {
          basestate[id] = 0;
          dirstate[id] = 0;
        }
      }
      console.log(
        "idx=" + idx + "@" + id + "=" + basestate[id] + " " + dirstate[id]
      );
      if (idx!==3) {
      px3.resetTransform();
      px3.rotate(
                px3.at(XSIZE / 2, YSIZE / 3),
                [0, (Math.PI * 2) / 3, (-Math.PI * 2) / 3][dirstate[id]]
              );
        
      }
/*
      px.resetTransform();
      px.rotate(
        px.at(XSIZE / 2, YSIZE / 3),
        [0, (Math.PI * 2) / 3, (-Math.PI * 2) / 3][dirstate[id]]
      );
      */
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

          let tiles = getTiles();
          var pp = new tapspace.SpaceGroup(g);
          var pq = new tapspace.SpaceGroup(pp);
          let px3 = new tapspace.SpaceHTML(tile, pq);

          let px0 = new tapspace.SpaceHTML(tiles[0], pq);
          let px1 = new tapspace.SpaceHTML(tiles[1], pq);
          let px2 = new tapspace.SpaceHTML(tiles[2], pq);

          const { rndi, rndv } = pickRandom([
            0,
            (Math.PI * 2) / 3,
            (-Math.PI * 2) / 3,
            0,
            (Math.PI * 2) / 3,
            (-Math.PI * 2) / 3
          ]);
          let idx = 0;
          [px0, px1, px2, px3].map((px) => {
            px.setSize(0, 0);
            if (idx === 3) {
              // px === px3
              pp.translate(px.atMid(), grid.at(i, j));
              if (k === 1) {
                pp.rotate(px.at(50, 0), Math.PI);
              }

              let touch = new tapspace.Touchable(view, pp);
              touch.start(touchmode);
              touch.on(
                "gesturestart",
                ((pp, px) => () => gstart(pp, px))(pp, px)
              );
              touch.on("gestureend", ((pp, px) => () => gend(pp, px))(pp, px));
              touch.on(
                "tap",
                ((px, idx) => (e) => tapHandler(e, px, idx))(px, idx)
              );
              
              px.rotate(
                px.at(XSIZE / 2, YSIZE / 3),
                rndv
              );
              
              dirstate[pp.id] = rndi % 3;
              basestate[pp.id] = Math.floor(rndi / 3);
              /*
              pq.resetTransform();
              pq.rotate(
                px.at(XSIZE / 2, YSIZE / 3),
                [0, (Math.PI * 2) / 3, (-Math.PI * 2) / 3][dirstate[pp.id]]
              );
              */
              setHash(pp, pq);
            } else {
              let _touch = new tapspace.Touchable(view, px, pp);
              _touch.start({ tap: true });
              _touch.on(
                "tap",
                ((px, idx,px3) => (e) => tapHandler(e, px, idx,px3))(px, idx,px3)
              );
            }
            idx++;
          });
        }
      }
    }
    // Initial view position
    view.fitScale(g);
    view.scale(view.atMid(), 1.618);

    // Make view transformable
    var tView = new tapspace.Touchable(view, view);
    tView.start({ translate: true, rotate: true, scale: true });
  }
  function toggleDownsideup(par) {
    if (par._T.s > 0) {
      par._T.tx += 50;
      par._T.ty += 86.60254037844388;
    } else {
      par._T.tx -= 50;
      par._T.ty -= 86.60254037844388;
    }
    par._T.s *= -1;
  }
  function isDownsideup(par) {
    let br = par._T;
    return Math.abs(br.r - 0) < 0.01 && Math.abs(br.s - -1) < 0.01;
  }
  function genKey(par, obj) {
    let downsideup = isDownsideup(par);
    let ar = obj._T;
    let out = [];
    let prec = 1000;
    let pptx = 150;
    let ppty = 86.60254037844388;
    let xpptx = 100;
    let xppty = 0;
    let ret = {};
    for (let k in ar) {
      let v = ar[k];
      ret[k] = v;
    }
    if (downsideup) {
      outpush(prec, out, [par._T.tx - pptx, par._T.ty - ppty]);
    } else {
      outpush(prec, out, [par._T.tx - xpptx, par._T.ty - xppty]);
    }
    return JSON.stringify([downsideup, out]);
  }
  function outpush(prec, out, val) {
    out.push([Math.round(prec * val[0]), Math.round(prec * val[1])]);
  }
  function checkHash(par, obj) {
    let key = genKey(par, obj);
    return key in posHash;
  }
  function deleteHash(par, obj) {
    let key = genKey(par, obj);
    delete posHash[key];
  }
  function setHash(par, obj) {
    let key = genKey(par, obj);
    posHash[key] = true;
  }
  function pickRandom(arr) {
    const rndi = Math.floor(Math.random() * arr.length);
    const rndv = arr[rndi];
    return { rndi, rndv };
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
  transform-origin: 50px 0px;
  transform: matrix3d(1, 0, 0, 0, 0, 86.60254, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1);
  display: inline-block;
  position: absolute;
}  
div.white {
  background: rgba(255,255,255,1);
}
div.blue {
  background: rgba(68,162,225,1);
}
    </style>`;
  }

  function getTiles() {
    return [
      `
    <div style="transform-origin:50px 28.867513px;transform:scale(0.97);">
    <div style="transform-origin:0px 0px;transform:scale(0.333)">
    <div class="tr"></div>
      </div></div>`,
      `
    <div style="transform-origin:50px 28.867513px;transform:scale(0.97);">
    <div style="transform-origin:100px 0px;transform:scale(0.333)">
    <div class="tr"></div>
    </div></div>`,
      `
    <div style="transform-origin:50px 28.867513px;transform:scale(0.97);">
     <div style="transform-origin:50px 86.60254px;transform:scale(0.333)">
    <div class="tr"></div>
    </div></div>`
    ];
  }
})();
