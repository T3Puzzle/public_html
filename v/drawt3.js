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
} 
from "./libt3.js";

const j_paint = [];
let j_lastEvent;
let j_white = false;
let j_top = false;

window.addEventListener("load", () => {
  paper.setup(h_canvas);
  const tool = new paper.Tool();
  setBackground();
  drawT3({ i: 3, j: 3, k: 0 }, 2);
  drawT3({ i: 3, j: 2, k: 1 }, 5);
      document.addEventListener('touchmove', e => e.preventDefault(), {
      passive: false
    });
    document.addEventListener('mousewheel', e => e.preventDefault(), {
      passive: false
    });
  
  tool.onMouseDown = function (event) {
    try {
      if (getMode()==='View') return;
        
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
      if (getMode()==='View') {
		    paper.view.center = paper.view.center.subtract(event.point.subtract(event.downPoint));
        return;
      }
      if (!j_lastEvent) return;
      let { ijk, s } = coord(event.point);
      if (j_paint.length > 0) {
        if (j_paint[j_paint.length - 1] !== toStr(ijk)) {
          if (j_paint.length === 1) {
            setShadow(parse(j_paint[0]),getShadowColor());
          }
          j_paint.push(toStr(ijk));
          setShadow(ijk,getShadowColor());
        }
      } else {
        j_paint.push(toStr(ijk));
        j_lastEvent.drag = true;
      }
    } catch (e) {
      h_warn.textContent = "drag:" + e;
    }
  };
  tool.onMouseUp = function (event) {
    try {
      if (getMode()==='View') return;
      
      if (!j_lastEvent) return;
      let { ijk, s } = coord(event.point);
      const mode = getMode();

      for (let ai = 0; ai < j_paint.length; ai++) {
        deleteShadowByStr(j_paint[ai]);
      }
      if (mode === "Eraser") {
        for (let ai = 0; ai < j_paint.length; ai++) {
          deleteT3ByStr(j_paint[ai]);
        }
      } else {
        if (j_paint.length > 0) {
          if (j_paint.length === 1 && j_paint[0] === toStr(ijk)) {
            drawT3(ijk, s);
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
              drawT3(parse(pnt[ai]), color[ai] + mod);
            }
          }
        } else {
          arrangeT3(j_lastEvent.item);
        }
      }
    } catch (e) {
      h_warn.textContent = "up:" + e;
    }
  };
});

function setBackground() {
  const size=100;
  let background = new paper.Path.Rectangle({
    point: [-paper.view.size.width*size/2, -paper.view.size.height*size/2],
    size: [paper.view.size.width*size, paper.view.size.height*size],
    fillColor: "#cccccc"
  });
  background.sendToBack();
}
function getMode() {
  if((' '+h_button.className+' ').indexOf(' c_eraser ') > -1){
    return 'Eraser';
  } else {
    if (h_button.textContent==='✏️') {
      return 'Paint';
    } else if (h_button.textContent==='🔍') {
      return 'View';
    }
    return null;
  }
}
function getShadowColor( ) {
  if (getMode()==='Paint') {
    return 'black';
  } else {
    return 'red';
  }
}
