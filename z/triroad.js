import {
  toggleColor,
  getConsts,
  isT3,
  drawT3,
  colorT3,
  resetT3,
  arrangeT3,
  coord,
  toStr,
  parse,
  getDxDy
} from "libt3.js";
import {
  drawBackground,
  drawFrame,
  outOfFrame
} from "libtriroad.js";

const l_cst = getConsts();
const j_paint = [];
let j_count = 0;
let j_target;
let j_lastEvent;

function draw() {
  drawBackground();
  drawFrame();
}
window.addEventListener("load", () => {
  paper.setup(h_canvas);
  const tool = new paper.Tool();
  draw();
  tool.onMouseDown = function (event) {
    try {
      j_target = null;
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

      if (outOfFrame(ijk)) return;
      if (!isT3(hitResult.item)) {
        j_paint.push(toStr(ijk));
      }
      const delta = { x: 0, y: 0 };
      if (j_paint.length === 0) {
        if (isT3(hitResult.item, "top")) {
          j_target = isT3(hitResult.item);
          delta.x = j_target.position.x - event.point.x;
          delta.y = j_target.position.y - event.point.y;
        }
      }
      j_lastEvent = {
        drag: false,
        point: event.point,
        delta: delta,
        item: hitResult.item
      };
    } catch (e) {
      h_warn.textContent = "down:" + e;
    }
  };
  tool.onMouseDrag = function (event) {
    try {
      let old = coord(j_lastEvent.point).ijk;
      let { ijk, s } = coord(event.point);
      if (j_paint.length > 0) {
        // not to include outside frame
        if (outOfFrame(ijk)) return;
        // ignore same pieces
        if (j_paint[j_paint.length - 1] !== toStr(ijk)) {
          j_paint.push(toStr(ijk));
        }
      } else if (j_target) {
        j_target.bringToFront();
        {
          j_target.position = [
            j_lastEvent.delta.x + event.point.x,
            j_lastEvent.delta.y + event.point.y
          ];
        }
        if (outOfFrame(ijk)) {
          colorT3(j_target, "red");
        } else if (toStr(old) !== toStr(ijk) && l_cst.dup[toStr(ijk)]) {
          colorT3(j_target, "red");
        } else {
          colorT3(j_target, "green");
        }
      }
      j_lastEvent.drag = true;
    } catch (e) {
      h_warn.textContent = "drag:" + e;
    }
  };
  tool.onMouseUp = function (event) {
    try {
      let old = coord(j_lastEvent.point).ijk;
      let { ijk, s } = coord(event.point);
      if (j_paint.length > 0) {
        if (j_paint.length === 1 && j_paint[0] === toStr(ijk)) {
          // triroad spepcific
          {
            if (j_count % 2) {
              s += 3;
            }
            j_count++;
          }
          drawT3(ijk, s);
        } else {
          // delete first
          for (let ai = 0; ai < j_paint.length; ai++) {
            if (j_paint[ai] in l_cst.dup) {
              l_cst.dup[j_paint[ai]].remove();
              delete l_cst.dup[j_paint[ai]];
            }
          }
          // draw next
          for (let ai = 0; ai < j_paint.length; ai++) {
            const t = parse(j_paint[ai]);
            //TODO: determine s from j_paint sequence
            if (l_cst.dup[j_paint[ai]]) {
              l_cst.dup[j_paint[ai]].remove();
            }
            drawT3(t, 1);
          }
        }
      } else {
        if (j_lastEvent.drag) {
          if (!j_target) return;
          resetT3(j_target);
          if (outOfFrame(ijk)) {
            j_target.remove();
            delete l_cst.dup[toStr(old)];
            return;
          }
          if (l_cst.dup[toStr(ijk)]) {
            // move back to original place
            ijk.i = old.i;
            ijk.j = old.j;
            ijk.k = old.k;
          } else {
            delete l_cst.dup[toStr(old)];
            l_cst.dup[toStr(ijk)] = j_target;
          }
          if (j_target.data.flip) {
            s += 3;
          }
          j_target.remove();
          l_cst.dup[toStr(ijk)] = drawT3(ijk, s);
        } else {
          const t3 = arrangeT3(j_lastEvent.item);
          t3.bringToFront();
        }
      }
    } catch (e) {
      h_warn.textContent = "up:" + e;
    }
  };
});
