import {
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
  getT3ByStr,
  deleteT3ByStr,
  ghostT3
} from "./libt3.js";

const j_paint = [];
let j_lastEvent;
let j_color = 0;

window.addEventListener("load", () => {
  paper.setup(h_canvas);
  const tool = new paper.Tool();
  setBackground();
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
      if (!isT3(hitResult.item)) {
        j_paint.push(toStr(ijk));
      }
      j_color = (j_lastEvent.item.fillColor.red===1);
    } catch (e) {
      h_warn.textContent = "down:" + e;
    }
  };
  tool.onMouseDrag = function (event) {
    try {
      if (!j_lastEvent) return;
      let { ijk, s } = coord(event.point);
      if (j_paint.length > 0) {
        if (j_paint[j_paint.length - 1] !== toStr(ijk)) {
          j_paint.push(toStr(ijk));
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
      if (!j_lastEvent) return;
      let { ijk, s } = coord(event.point);
      if (j_paint.length > 0) {
        if (j_paint.length === 1 && j_paint[0] === toStr(ijk)) {
          drawT3(ijk, s);
        } else {
          let change = [];
          let pnt = [j_paint[0]];
          for (let ai = 1; ai < j_paint.length; ai++) {
            const lt = parse(j_paint[ai - 1]);
            const t = parse(j_paint[ai]);
            if (lt.k !== t.k ) {
              pnt.push(j_paint[ai]);
            } else {
              if (t.k===0) {
                if (lt.j-t.j===1) {
                  pnt.push(toStr({i:lt.i,j:lt.j-1,k:1}));
                } else if (lt.i-t.i===1) {
                  pnt.push(toStr({i:lt.i-1,j:lt.j,k:1}));
                } else if (
                  ((lt.i===t.i)&&(t.j-lt.j===1)) 
                  ||
                  ((lt.j===t.j)&&(t.i-lt.i===1)) 
                ) {
                  pnt.push(toStr({i:lt.i,j:lt.j,k:1}));
                }
              } else {
                if (t.j-lt.j===1) {
                  pnt.push(toStr({i:lt.i,j:lt.j+1,k:0}));
                } else if (t.i-lt.i===1) {
                  pnt.push(toStr({i:lt.i+1,j:lt.j,k:0}));
                } else if (
                  ((t.i===lt.i)&&(lt.j-t.j===1)) 
                  ||
                  ((t.j===lt.j)&&(lt.i-t.i===1)) 
                ) {
                  pnt.push(toStr({i:lt.i,j:lt.j,k:0}));
                }             
              }
              pnt.push(j_paint[ai]);
            }
          }
          for (let ai = 1; ai < pnt.length; ai++) {
            const lt = parse(pnt[ai - 1]);
            const t = parse(pnt[ai]);
            if (lt.k !== t.k ) {
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
            color.push(color[color.length - 1]);
          }
          let mod = 0;
          for (let ai = 0; ai < pnt.length; ai++) {
            if (getT3ByStr(pnt[ai])) {
              deleteT3ByStr(pnt[ai]);
            }

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
    } catch (e) {
      h_warn.textContent = "up:" + e;
    }
  };
});

function setBackground() {
  let background = new paper.Path.Rectangle({
    point: [0, 0],
    size: [paper.view.size.width, paper.view.size.height],
    fillColor: "#cccccc"
  });
  background.sendToBack();
}
