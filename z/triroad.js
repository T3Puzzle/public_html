import {
  toggleColor,
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
import {
  drawBackground,
  drawFrame,
  setFrame,
  outOfFrame
} from "./libtriroad.js";

let j_place;
let j_count = 0;
let j_target;
let j_lastEvent;
let j_frame;

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
      if (j_frame) j_frame.remove();
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
      j_place = null;

      if (outOfFrame(ijk)) return;
      if (isT3(hitResult.item)) {
        j_frame = setFrame(ijk);
      } else {
        j_place = toStr(ijk);
        j_frame = ghostT3(ijk, s + 3 * (j_count % 2));
      }
      const delta = { x: 0, y: 0 };
      if (!j_place) {
        if (isT3(hitResult.item, "top")) {
          j_target = isT3(hitResult.item);
          delta.x = j_target.position.x - event.point.x;
          delta.y = j_target.position.y - event.point.y;
        } else {
          j_place = toStr(ijk);
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
      if (j_frame) j_frame.remove();
      if (!j_lastEvent) return;
      const old = coord(j_lastEvent.point).ijk;
      let { ijk, s } = coord(event.point);
      if (j_place) {
        // not to include outside frame
        if (outOfFrame(ijk)) return;
        j_place = toStr(ijk);
        if (getT3ByStr(toStr(ijk))) {
          j_frame = setFrame(ijk);
        } else {
          j_frame = ghostT3(ijk, s + 3 * (j_count % 2));
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
        } else if (toStr(old) !== toStr(ijk) && getT3ByStr(toStr(ijk))) {
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
      if (j_frame) j_frame.remove();
      if (!j_lastEvent) return;
      const old = coord(j_lastEvent.point).ijk;
      let { ijk, s } = coord(event.point);
      if (j_place) {
        if (j_count % 2) {
          s += 3;
        }
        j_count++;
        if (!getT3ByStr(toStr(ijk))) {
          drawT3(ijk, s);
        }
      } else {
        if (j_lastEvent.drag) {
          if (!j_target) return;
          deleteT3ByStr(toStr(old));
          if (outOfFrame(ijk)) {
            return;
          }
          if (j_target.data.flip) {
            s += 3;
          }
          if (toStr(old) !== toStr(ijk) && getT3ByStr(toStr(ijk))) {
            drawT3(old, s);
          } else {
            drawT3(ijk, s);
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
