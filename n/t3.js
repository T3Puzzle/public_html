(() => {
  initHtml();

  let space = new tapspace.Space();
  let view = new tapspace.SpaceView(space);
  customElements.define(
    "tapspace-tile",
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
        process(this, template.innerHTML, view);
      }
    }
  );

  function process(element, tile, view) {
    const XSIZE = 100;
    const YSIZE = 86.60254; //XSIZE*Math.sqrt(3)/2;
    const WX = 8;
    const WY = 7;
    let grid = new tapspace.geom.IGrid(
      {
        xStep: XSIZE,
        yStep: XSIZE,
        yRotation: (Math.PI * 2) / 3, // y軸を傾ける
        rotateStep: Math.PI / 2, // ??
        scaleStep: 100000000, // ??
        scalePhase: 1 // ??
      },
      space
    );
    
    let tapHandler = function (ev,k) {
      ev.item.rotate(ev.item.at(XSIZE / 2, k*YSIZE / 3), (Math.PI * 2) / 3);
    };
    let g = new tapspace.SpaceGroup(space);
    for (let i = 0; i < WX; i++) {
      for (let j = 0; j < WY; j++) {
        for (let k = 0; k < 2; k++) {
          if (j===0&&k===1) {
            continue;
          }
          if (j===WY-1&&k===0) {
            continue;
          }
          if (i-j>WX/2) {
            continue;
          }
          if (i-j<-WY/2) {
            continue;
          }
          let _tile = '';
          if (k===0) {
            _tile = tile;
          } else {
            _tile = '<div class="downsideup">'+tile+'</div>';
          }
          let px = new tapspace.SpaceHTML(_tile, g);
          px.setSize(XSIZE / 2, YSIZE / 3);
          //px.translate(px.atMid(), grid.at(i, j));
          px.translate(px.at(0, 0), grid.at(i, j));
          px.rotate(
            px.at(XSIZE / 2, (1-2*k)*YSIZE / 3),
            pickRandom([0, (Math.PI * 2) / 3, (-Math.PI * 2) / 3])
          );
          let touch = new tapspace.Touchable(view, px);
          touch.start({
            tap: true,
            preventDefault: false
          });
          if (k===0) {
            touch.on("tap", (e)=>tapHandler(e,1));
          } else {
            touch.on("tap", (e)=>tapHandler(e,-1));
          }
        }
      }
    }
    view.translate(view.atMid(), g.getHull().atMid());
    var tView = new tapspace.Touchable(view, view);
    tView.start({
      translate: true,
      scale: true,
      rotate: true
    });
    var wheeler = new tapspace.Wheelable(view, view);
    wheeler.start({
      scale: true
    });
    var viewGrid = new tapspace.geom.IGrid(
      {
        rotateStep: Math.PI / 12
      },
      space
    );
    tView.on("gestureend", function () {
      view.snap(view.atMid(), viewGrid);
    });
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
  background: rgb(68,162,225);
  transform-origin: 50px 0px;
  transform: matrix3d(1, 0, 0, 0, 0, 86.60254, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1);
  display: inline-block;
  position: absolute;
}  
div.white {
  background: rgb(255,255,255);
}
div.downsideup {
  transform-origin: 50px 0px;
  transform: rotate(180deg);
}
    </style>`;
  }
})();
