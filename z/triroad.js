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
        j_place = toStr(ijk);
      }
      j_frame = ghostT3(ijk, s + 3 * (j_count % 2));
      j_lastEvent = {
        drag: false,
        point: event.point,
        item: hitResult.item
      };
    } catch (e) {
      h_warn.textContent = "down:" + e;
    }
  };
  tool.onMouseDrag = function (event) {
    try {
      if (j_frame) j_frame.remove();
      if (j_place) {
        deleteT3ByStr(j_place);
        j_place = null;
      }
      if (!j_lastEvent) return;
      const old = coord(j_lastEvent.point).ijk;
      let { ijk, s } = coord(event.point);

      // not to include outside frame
      if (outOfFrame(ijk)) return;
      j_frame = ghostT3(ijk, s + 3 * (j_count % 2));
      

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

      // not to include outside frame
      if (outOfFrame(ijk)) return;
      
      if (!j_lastEvent.drag) {
        arrangeT3(j_lastEvent.item);
      }
      if (j_count % 2) {
        s += 3;
      }
      j_count++;
      if (!getT3ByStr(toStr(ijk))) {
        drawT3(ijk, s);
      }
    } catch (e) {
      h_warn.textContent = "up:" + e;
    }
  };
});
