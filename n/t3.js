(() => {
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

    var touchmode = { translate: true, scale: true, rotate: true, tap: true };

    let tapHandler = function (ev, k) {
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
          px.translate(px.at(0, 0), grid.at(i, j));

          px.rotate(
            px.at(XSIZE / 2, ((1 - 2 * k) * YSIZE) / 3),
            pickRandom([0, (Math.PI * 2) / 3, (-Math.PI * 2) / 3])
          );

          let touch = new tapspace.Touchable(view, px);
          touch.start(touchmode);
          touch.on("gesturestart", function () {
            px.bringToFront();
          });
          touch.on("gestureend", function () {
            px.snap(px.atMid(), grid);
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
