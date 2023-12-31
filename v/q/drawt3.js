import {
  deleteShadowByStr,
  setShadow,
  getConsts,
  isT3,
  drawT3,
  colorT3,
  arrangeT3,
  coord,
  toStr,
  parse,
  getDxDy,
  dups,
  deleteT3ByStr,
  ghostT3
} from "./libt3.js";

const j_paint = [];
let j_lastEvent;
let j_white = false;
let j_top = false;
let j_m0 = null, j_m1=null;
let j_last = new paper.Matrix(1,0,0,1,0,0);
let j_multitouching = false;

window.addEventListener("load", () => {
  paper.setup(h_canvas);
  const tool = new paper.Tool();
  setBackground();
  drawT3({ i: 3, j: 3, k: 0 }, 2,getT3Color());
  drawT3({ i: 3, j: 2, k: 1 }, 5,getT3Color());
  paper.view.rotation = 30;
  
  h_rotate.callback = function () {
    paper.view.rotation += 30;
  };
  h_canvas.getCTM = function () {
    return j_last;
  }
  h_canvas.callback = function (multi,type,m0,m1) {
      if (m0!==null) {
       j_m0 = new paper.Matrix(m0.a,m0.b,m0.c,m0.d,m0.tx,m0.ty);
      }
      if (m1!==null) {
        j_m1 = new paper.Matrix(m1.a,m1.b,m1.c,m1.d,m1.tx,m1.ty);
      }
      let g = j_m0.appended(j_m1);
      paper.view.matrix = g;
      j_last = g;
  }
  // zoom/pan/rotate
  if ('ontouchstart' in window) {
    const offset = {
      r: 0,
      s: 1
    };
    h_canvas.addEventListener('touchstart', e => {
      if (e.touches.length !== 2) return;
      {
        j_multitouching = true;
        for (let ai = 0; ai < j_paint.length; ai++) {
          deleteShadowByStr(j_paint[ai]);
        }
        j_paint.length=0;
        h_warn.textContent = 'touchStart:multi=true';
      }
      e.preventDefault();
      const u = update(e, null);
      Object.assign(offset, {
        r: u.r,
        s: u.s
      });
      const m = h_canvas.getCTM();
      h_canvas.callback(true, 'touchstart', {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: u.cx,
        ty: u.cy
      }, {
        a: m.a,
        b: m.b,
        c: m.c,
        d: m.d,
        tx: m.tx - u.cx,
        ty: m.ty - u.cy
      });
    });
    h_canvas.addEventListener('touchmove', e => {
      if (e.touches.length !== 2) return;
      e.preventDefault();
      const u = update(e, offset);
      let tt = u.r * Math.PI / 180;
      let cc = Math.cos(tt);
      let ss = Math.sin(tt);
      let aa = u.s * cc;
      let bb = u.s * ss;
      h_canvas.callback(true, 'touchmove', {
        a: aa,
        b: bb,
        c: -bb,
        d: aa,
        tx: u.cx,
        ty: u.cy
      }, null);
    });
    h_canvas.addEventListener('touchend', e => {
      if (!multitouching) return;
      
      const u = update(e, offset);
      Object.assign(offset, {
        r: 0,
        s: 1
      });
      const m = h_canvas.getCTM();
      h_canvas.callback(true, 'touchend', m, {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
      });
      j_multitouching = false;
      h_warn.textContent = 'touchEnd:multi=false';
    });

    function update(e, offset) {
      const cx = (e.touches[0].pageX + e.touches[1].pageX) / 2;
      const cy = (e.touches[0].pageY + e.touches[1].pageY) / 2;
      const o = {
        r: 0,
        s: 1
      };
      offset ? Object.assign(o, {
        r: offset.r,
        s: offset.s
      }) : null;
      const dx = e.touches[1].pageX - e.touches[0].pageX;
      const dy = e.touches[1].pageY - e.touches[0].pageY;
      const r = Math.atan2(dy, dx) * 180 / Math.PI - o.r;
      const s = Math.sqrt(dx * dx + dy * dy) / o.s;
      return {
        cx,
        cy,
        r,
        s
      };
    }
  }  
  document.addEventListener(
    "mousewheel",
    (event) => {
      const oldZoom = paper.view.zoom;
      let beta = 0.95;
      if (event.deltaY > 0) beta = 1.05;
      let mpos = paper.view.viewToProject([event.offsetX, event.offsetY]);
      let ctr = paper.view.center;
      let pc = mpos.subtract(ctr);
      paper.view.zoom /= beta;
      paper.view.center = mpos.subtract(pc.multiply(beta));
      event.preventDefault();
    },
    {
      passive: false
    }
  );
  tool.onMouseDown = function (event) {
    try {
      j_lastEvent = null;
      let hitResult = paper.project.hitTest(event.point, {
        fill: true,
        tolerance: 5,
        segments: false,
        stroke: false
      });
      if (!hitResult) return;
      let { ijk, s } = coord(event.point);
      j_paint.length = 0;
      j_lastEvent = {
        drag: false,
        item: hitResult.item
      };
      j_top = !!isT3(hitResult.item, "top");
      j_white = j_lastEvent.item.fillColor.red === 1;
      if (!isT3(hitResult.item)) {
        j_paint.push(toStr(ijk));
      }
    } catch (e) {
      h_warn.textContent = "down:" + e;
    }
  };
  tool.onMouseDrag = function (event) {
    try {
      if (!j_lastEvent) return;
      h_warn.textContent = 'drag:multi='+j_multitouching;
      if (j_multitouching) return;
      if (getMode() === "Place") {
        paper.view.center = paper.view.center.subtract(
          event.point.subtract(event.downPoint)
        );
        j_last = paper.view.matrix;
      } else {
        let { ijk, s } = coord(event.point);
        if (j_paint.length > 0) {
          if (j_paint[j_paint.length - 1] !== toStr(ijk)) {
            if (j_paint.length === 1) {
              setShadow(parse(j_paint[0]), getShadowColor());
            }
            j_paint.push(toStr(ijk));
            setShadow(ijk, getShadowColor());
          }
        } else {
          j_paint.push(toStr(ijk));
        }
      }
      j_lastEvent.drag = true;
    } catch (e) {
      h_warn.textContent = "drag:" + e;
    }
  };
  tool.onMouseUp = function (event) {
    try {
      if (!j_lastEvent) return;
      h_warn.textContent = 'up:multi='+j_multitouching;
      if (j_multitouching) return;
      let { ijk, s } = coord(event.point);
      const mode = getMode();
      // just in case
      for (let ai = 0; ai < j_paint.length; ai++) {
        deleteShadowByStr(j_paint[ai]);
      }
      if (mode === "Place") {
        if (j_paint.length === 0 && !j_lastEvent.drag) {
          arrangeT3(j_lastEvent.item);
        } else if (j_paint.length === 1 && !j_lastEvent.drag) {
          drawT3(ijk, s, getT3Color());
        }
      } else if (mode === "Eraser") {
        for (let ai = 0; ai < j_paint.length; ai++) {
          deleteT3ByStr(j_paint[ai]);
        }
      } else {
        if (j_paint.length === 0) {
          arrangeT3(j_lastEvent.item);
        } else {
          if (j_paint.length === 1 && j_paint[0] === toStr(ijk)) {
            drawT3(ijk, s, getT3Color());
          } else {
            let change = [];
            let pnt = [j_paint[0]];
            for (let ai = 1; ai < j_paint.length; ai++) {
              const lt = parse(j_paint[ai - 1]);
              const t = parse(j_paint[ai]);
              if (lt.k !== t.k) {
                pnt.push(j_paint[ai]);
              } else {
                if (t.k === 0) {
                  if (lt.j - t.j === 1) {
                    pnt.push(toStr({ i: lt.i, j: lt.j - 1, k: 1 }));
                  } else if (lt.i - t.i === 1) {
                    pnt.push(toStr({ i: lt.i - 1, j: lt.j, k: 1 }));
                  } else if (
                    (lt.i === t.i && t.j - lt.j === 1) ||
                    (lt.j === t.j && t.i - lt.i === 1)
                  ) {
                    pnt.push(toStr({ i: lt.i, j: lt.j, k: 1 }));
                  }
                } else {
                  if (t.j - lt.j === 1) {
                    pnt.push(toStr({ i: lt.i, j: lt.j + 1, k: 0 }));
                  } else if (t.i - lt.i === 1) {
                    pnt.push(toStr({ i: lt.i + 1, j: lt.j, k: 0 }));
                  } else if (
                    (t.i === lt.i && lt.j - t.j === 1) ||
                    (t.j === lt.j && lt.i - t.i === 1)
                  ) {
                    pnt.push(toStr({ i: lt.i, j: lt.j, k: 0 }));
                  }
                }
                pnt.push(j_paint[ai]);
              }
            }
            for (let ai = 1; ai < pnt.length; ai++) {
              const lt = parse(pnt[ai - 1]);
              const t = parse(pnt[ai]);
              if (lt.k !== t.k) {
                if (lt.i === t.i && lt.j === t.j) {
                  change.push("R");
                } else if (lt.j === t.j && Math.abs(lt.i - t.i) === 1) {
                  change.push("L");
                } else if (lt.i === t.i && Math.abs(lt.j - t.j) === 1) {
                  change.push("M");
                } else {
                  change.push("X");
                }
              } else {
                change.push("X");
              }
            }
            let circle = false;
            let circlev = 0;
            let color = [];
            if (change.length === 1) {
              if (change[0] === "L") {
                color = [2, 2];
              } else if (change[0] === "M") {
                color = [1, 1];
              } else if (change[0] === "R") {
                color = [0, 0];
              }
            } else {
              for (let ci = 1; ci < change.length; ci++) {
                if ((change[ci - 1] + change[ci]).indexOf("R") == -1) {
                  color.push(2);
                } else if ((change[ci - 1] + change[ci]).indexOf("L") == -1) {
                  color.push(1);
                } else if ((change[ci - 1] + change[ci]).indexOf("M") == -1) {
                  color.push(0);
                }
              }
              color.unshift(color[0]);

              if (color.length >= 3) {
                let c3 = color[color.length - 3];
                let cc = [
                  change[change.length - 1],
                  change[change.length - 2],
                  change[change.length - 3]
                ];
                cc.sort();
                // circle
                if (cc.sort().join("") === "LMR") {
                  circle = true;
                  circlev = c3;
                }
              }
              if (circle) {
                color.push(circlev);
              } else {
                color.push(color[color.length - 1]);
              }
            }
            let mod = 0;
            if (circle) {
              if (j_white !== j_top) {
                mod = 3;
              }
            } else {
              if (j_white === j_top) {
                mod = 3;
              }
            }
            for (let ai = 0; ai < pnt.length; ai++) {
              deleteT3ByStr(pnt[ai]);
              if (ai > 0) {
                if (color[ai - 1] === color[ai]) {
                  mod = (mod + 3) % 6;
                }
              }
              drawT3(parse(pnt[ai]), color[ai] + mod, getT3Color());
            }
          }
        }
        return;
      }
    } catch (e) {
      h_warn.textContent = "up:" + e;
    }
  };
});

function setBackground() {
  const size = 100;
  let background = new paper.Path.Rectangle({
    point: [
      (-paper.view.size.width * size) / 2,
      (-paper.view.size.height * size) / 2
    ],
    size: [paper.view.size.width * size, paper.view.size.height * size],
    fillColor: "#dfdfdf"
  });
  background.sendToBack();
}
function getMode() {
  if ((" " + h_button.className + " ").indexOf(" c_eraser ") > -1) {
    return "Eraser";
  } else {
    if (h_button.textContent === "✏️") {
      return "Paint";
    } else if (h_button.textContent === "👆") {
      return "Place";
    }
    return null;
  }
}
function getShadowColor() {
  if (getMode() === "Paint") {
    return "black";
  } else {
    return "red";
  }
}
function getT3Color () {
  return window.getComputedStyle(h_color).getPropertyValue("color");
  //return '#59BCE0';
}
