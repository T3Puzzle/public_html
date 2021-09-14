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

     let gstart = function(pp,px) {
       console.log(pp._T);
            px.bringToFront();
            deleteHash(pp,px);
           prevX = pp._T.tx;
           prevY = pp._T.ty;
    }
    let gend = function (pp,px) {
            let dx = -pp._T.tx;
            let dy = -pp._T.ty;
            pp.snap(px.atMid(), grid);
            dx += pp._T.tx;
            dy += pp._T.ty;
            let norm = Math.sqrt(dx * dx + dy * dy);
            console.log(norm);
            
            if (norm>50){
              console.log(pp._T);
              
              // revert first
              //pp.rotate(px.at(0,0), Math.PI/2);
              toggleDownsideup(pp);
              console.log(pp._T);
              pp.snap(px.atMid(), grid);
              console.log(pp._T);
            }
            
            if (checkHash(pp,px)) {
              console.log("dup"+genKey(pp,px));
              pp._T.tx = prevX;
              pp._T.ty = prevY;
              pp.snap(px.atMid(), grid);
              
              // TODO: try rotate again
              
            } else {
              console.log("safe"+genKey(pp,px));
            }
            setHash(pp,px);
    }
    let tapHandler = function (ev, px) {
      px.resetTransform();
      // TODO:
      px.rotate(
            px.at(XSIZE / 2, YSIZE / 3),
            pickRandom([0, (Math.PI * 2) / 3, (-Math.PI * 2) / 3])
          );
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
          var pp = new tapspace.SpaceGroup(g);
          let px = new tapspace.SpaceHTML(tile, pp);
          px.setSize(0, 0);
          pp.translate(px.atMid(), grid.at(i, j));
          if (k===1) {
            pp.rotate(px.at(50,0),Math.PI);
          }
          px.rotate(
            px.at(XSIZE / 2, YSIZE / 3),
            pickRandom([0, (Math.PI * 2) / 3, (-Math.PI * 2) / 3])
          );
          setHash(pp,px);

          let touch = new tapspace.Touchable(view, pp);
          touch.start(touchmode);
          touch.on("gesturestart", ((pp,px)=>() => gstart(pp,px)
          )(pp,px));
          touch.on("gestureend", ((pp,px)=>()=>gend(pp,px)
          )(pp,px));
          touch.on("tap", (px=>(e)=>tapHandler(e,px)
          )(px));
        }
      }
    }
    // Initial view position
    view.fitScale(g);
    view.scale(view.atMid(), 1.618);

    // Make view transformable
    var tView = new tapspace.Touchable(view, view);
    tView.start( { translate: true, rotate: true, scale: true });
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
    return(Math.abs(br.r-0)<0.01 && Math.abs(br.s-(-1))<0.01);
  }
  function genKey(par,obj) {
    let downsideup = isDownsideup(par);
    let ar = obj._T;
    let out = [];
    let prec = 1000;
  let pptx = 150;
  let ppty = 86.60254037844388;
  let xpptx = 100;
  let xppty = 0;
  let ret = {};
  for(let k in ar){
    let v = ar[k];
    ret[k]=v;
  }
  if (downsideup) {
      outpush(prec,out,[par._T.tx-pptx, par._T.ty-ppty]);
  } else {
      outpush(prec,out,[par._T.tx-xpptx, par._T.ty-xppty]);
  }
    return JSON.stringify([downsideup,out]);
  }
  function outpush (prec,out,val) {
  out.push([Math.round(prec*val[0]),Math.round(prec*val[1])]);
}
  function checkHash(par,obj) {
    let key = genKey(par,obj);
    return key in posHash;
  }
  function deleteHash(par,obj) {
    let key = genKey(par,obj);
    delete posHash[key];
  }
  function setHash(par,obj) {
    let key = genKey(par,obj);
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
    </style>`;
  }
})();



