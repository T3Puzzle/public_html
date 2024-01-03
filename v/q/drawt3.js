import {
  deleteShadowByStr,
  setShadow,
  getConsts,
  isT3,
  drawT3,
  colorT3,
  coord,
  toStr,
  parse,
  getDxDy,
  dups,
  deleteT3ByStr,
  ghostT3
} from "https://codepen.io/alytile/pen/xxBGdJJ.js";
//from "./libt3.js";
import {
  addZoomHandler,
  resetZoom
} from "https://codepen.io/alytile/pen/oNVjBEK.js";
//from "./libzoom.js";

const j_zoom = {};
const j_paint = [];
const j_point = [];
let j_down;
const l_cst = getConsts();

function getIJRange(paint) {
  let i_max = -1000,
    i_min = 1000,
    j_max = -1000,
    j_min = 1000;
  for (let pi = 0; pi < paint.length; pi++) {
    const ijk = parse(paint[pi]);
    if (ijk.i > i_max) i_max = ijk.i;
    if (ijk.i < i_min) i_min = ijk.i;
    if (ijk.j > j_max) j_max = ijk.j;
    if (ijk.j < j_min) j_min = ijk.j;
  }
  return { i_min, i_max, j_min, j_max };
}
function mkPath(point) {
  let myPath = new paper.Path();
  myPath.strokeColor = "red";
  myPath.strokeWidth = 10;
  for (let pi = 0; pi < point.length; pi++) {
    myPath.add(point[pi]);
  }
  return myPath;
}
function drawFrame(range, path, fill) {
  let ret = [];
  let all = [];
  for (let i = range.i_min; i < range.i_max + 1; i++) {
    for (let j = range.j_min; j < range.j_max + 1; j++) {
      for (let k = 0; k < 2; k++) {
        const frame = setFrame({ i, j, k });
        all.push(frame);
        if (path.intersects(frame)) {
          ret.push(toStr({ i, j, k }));
          //if (fill) {
          //  frame.fillColor = "#00ff00";
          //}
        } else if (fill) {
          if (path.contains(tap({ i, j, k }))) {
            ret.push(toStr({ i, j, k }));
            //frame.fillColor = "#0000ff";
          }
        }
      }
    }
  }
  for (let ai = 0; ai < all.length; ai++) {
    all[ai].remove();
  }
  path.remove();
  return ret;
}
function setFrame(ijk) {
  const k = ijk.k;
  const { dx, dy } = getDxDy(ijk);
  const frame = new paper.Path.RegularPolygon({
    center: [0, 0],
    pivot: [0, 0],
    sides: 3,
    radius: l_cst.radius,
    strokeColor: "#000000",
    strokeWidth: 3,
    strokeCap: "round",
    opacity: 0.5
  });
  frame.scaling = 1;
  frame.rotation = 30 + 180 * ((k + 1) % 2);
  frame.position = [l_cst.offset.x + dx, l_cst.offset.y + dy];
  return frame;
}
function getFill(paint, point) {
  if (paint.lenth === 0) {
    return;
  }
  const { i_min, i_max, j_min, j_max } = getIJRange(paint);
  const myPath = mkPath(point);

  myPath.smooth();
  return drawFrame({ i_min, i_max, j_min, j_max }, myPath, true);
}

function neighboring(lp, p) {
  try {
    const lt = parse(lp);
    const t = parse(p);
    if (lt.k === t.k) {
      return false;
    } else {
      if (lt.i === t.i && lt.j === t.j) {
        return true;
      } else if (lt.i === t.i && lt.j + lt.k === t.j + t.k) {
        return true;
      } else if (lt.j === t.j && lt.i + lt.k === t.i + t.k) {
        return true;
      }
      return false;
    }
  } catch (e) {
    console.log("nei:" + e);
  }
}
function findNext(now, array, out, put) {
  try {
    for (let ai = 0; ai < array.length; ai++) {
      const next = array[ai];
      if (next === now) continue;
      // TODO:
      if (out.indexOf(next) !== -1) continue;
      if (neighboring(now, next)) {
        out.push(next);
        put.push(tap(parse(next)));
        return next;
      }
    }
    return null;
  } catch (e) {
    console.log("find:" + e);
  }
}
function interpolatePaint(pa, po, out, put) {
  try {
    if (neighboring(pa.l, pa.n)) {
      out.push(pa.n);
      put.push(po.n);
      return true;
    }
    const { i_min, i_max, j_min, j_max } = getIJRange([pa.l, pa.n]);
    const myPath = mkPath([po.l, po.n]);
    const array = drawFrame({ i_min, i_max, j_min, j_max }, myPath, false);
    let next = findNext(pa.l, array, out, put);
    let cnt = 0;
    const max = 100;
    while (true) {
      if (cnt > max) break;
      if (next === pa.n) break;
      if (!next) break;
      next = findNext(next, array, out, put);
      cnt++;
    }
    return next === pa.n;
  } catch (e) {
    console.log("in:" + e);
  }
  return false;
}
function processShadow(pa, po, paint, point) {
  interpolatePaint(pa, po, paint, point);
  for (let pi = 0; pi < paint.length; pi++) {
    setShadow(parse(paint[pi]), getShadowColor());
  }
}
function tap(ijk) {
  const SQ3 = Math.sqrt(3);
  const xbase = (l_cst.radius * 3) / 2;
  const ybase = l_cst.radius * SQ3;
  let x = l_cst.offset.x + xbase * ijk.j;
  let y = l_cst.offset.y + ybase * ijk.i + (ybase * ijk.j) / 2;
  if (ijk.k === 1) {
    x += xbase / 3;
    y += ybase / 2;
  }
  return [x, y];
}
function processPaint(paint, point, down, up) {
  let change = [];
  for (let ai = 1; ai < paint.length; ai++) {
    const lt = parse(paint[ai - 1]);
    const t = parse(paint[ai]);
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
  /*
  if (circle) {
    if (down.white !== (down.type === "top")) {
      mod = 3;
    }
  } else {
    if (down.white === (down.type === "top")) {
      mod = 3;
    }
  }
  */
  const first_k = parse(paint[0]).k;

  if (color[0] === 0) {
    // left
    if (first_k) mod += 3;
  } else if (color[0] === 1) {
    // right
    if (first_k) mod += 3;
  } else if (color[0] === 2) {
    // top
    if (!first_k) mod += 3;
  }

  if (!down.white) {
    // mod +=3;
  }

  for (let ai = 0; ai < paint.length; ai++) {
    deleteT3ByStr(paint[ai]);
    if (ai > 0) {
      // alternating neighboring colors
      if (
        color[ai - 1] === color[ai] &&
        neighboring(paint[ai - 1], paint[ai])
      ) {
        mod = (mod + 3) % 6;
      }
    }
    drawT3(parse(paint[ai]), color[ai] + mod, getT3Color());
  }
}
function hit(point) {
  return paper.project.hitTest(point, {
    fill: true,
    tolerance: 5,
    segments: false,
    stroke: false
  });
}
function detect(hitResult) {
  let type = "top";
  ["top", "center", "left", "right"].map((t) => {
    if (isT3(hitResult.item, t)) type = t;
  });
  return {
    drag: false,
    type: type,
    white:
      hitResult.item.fillColor.red === 1 &&
      hitResult.item.fillColor.green === 1 &&
      hitResult.item.fillColor.blue === 1
  };
}
window.addEventListener("load", () => {
  paper.setup(h_canvas);
  const tool = new paper.Tool();
  setBackground();
  drawT3(coord(paper.view.center).ijk, 2, getT3Color());
  paper.view.rotation = 30;

  h_rotate.callback = function () {
    paper.view.rotation += 30;
  };
  h_view.callback = function () {
    resetZoom();
    paper.view.rotation = 30;
  };
  addZoomHandler(h_canvas, j_zoom, () => {
    for (let ai = 0; ai < j_paint.length; ai++) {
      deleteShadowByStr(j_paint[ai]);
    }
    j_paint.length = 0;
    j_point.length = 0;
    j_down = null;
  });

  tool.onMouseDown = function (event) {
    try {
      j_down = null;
      let hitResult = hit(event.point);
      if (!hitResult) return;
      let { ijk, s } = coord(event.point);
      j_paint.length = 0;
      j_point.length = 0;
      j_down = detect(hitResult);
      // place new
      j_down.first = !isT3(hitResult.item);
      if (j_down.first) {
        j_paint.push(toStr(ijk));
        j_point.push(event.point);
      }
    } catch (e) {
      h_warn.textContent = "down:" + e;
    }
  };
  tool.onMouseDrag = function (event) {
    try {
      if (!j_down) return;
      if (j_zoom.multitouching) return;
      let { ijk, s } = coord(event.point);
      if (j_paint.length > 0) {
        if (j_paint[j_paint.length - 1] !== toStr(ijk)) {
          processShadow(
            { l: j_paint[j_paint.length - 1], n: toStr(ijk) },
            { l: j_point[j_point.length - 1], n: event.point },
            j_paint,
            j_point
          );
        }
      } else {
        j_paint.push(toStr(ijk));
        j_point.push(event.point);
      }
      j_down.drag = true;
    } catch (e) {
      h_warn.textContent = "drag:" + e;
    }
  };
  tool.onMouseUp = function (event) {
    try {
      if (!j_down) return;
      let { ijk, s } = coord(event.point);
      const mode = getMode();
      // TODO: just in case
      for (let ai = 0; ai < j_paint.length; ai++) {
        deleteShadowByStr(j_paint[ai]);
      }
      if (j_zoom.multitouching) return;
      const white = j_down.white ? 3 : 0;
      if (mode === "Eraser") {
        const to_delete = getFill(j_paint, j_point);
        for (let ai = 0; ai < to_delete.length; ai++) {
          deleteT3ByStr(to_delete[ai]);
        }
      } else {
        if (!j_down.drag) {
          if (j_down.type === "center") {
            deleteT3ByStr(toStr(ijk));
          } else {
            drawT3(ijk, s + white, getT3Color());
          }
        } else {
          if (j_paint.length === 1 && j_paint[0] === toStr(ijk)) {
            // just little drag
            const up = detect(hit(event.point));
            if (j_down.type === up.type) {
              // do nothing
            } else if (j_down.type == "top") {
              if (up.type === "left") {
                drawT3(ijk, ((s + 1) % 3) + white, getT3Color());
              } else if (up.type === "right") {
                drawT3(ijk, ((s + 2) % 3) + white, getT3Color());
              } else {
                // do nothing
              }
            } else if (j_down.type == "left") {
              if (up.type === "right") {
                drawT3(ijk, ((s + 1) % 3) + white, getT3Color());
              } else if (up.type === "top") {
                drawT3(ijk, ((s + 2) % 3) + white, getT3Color());
              } else {
                // do nothing
              }
            } else if (j_down.type == "right") {
              if (up.type === "top") {
                drawT3(ijk, ((s + 1) % 3) + white, getT3Color());
              } else if (up.type === "left") {
                drawT3(ijk, ((s + 2) % 3) + white, getT3Color());
              } else {
                // do nothing
              }
            } else {
              // do nothing
            }
          } else {
            processPaint(j_paint, j_point, j_down, detect(hit()));
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
    return "Paint";
  }
}
function getShadowColor() {
  if (getMode() === "Paint") {
    return "black";
  } else {
    return "red";
  }
}
function getT3Color() {
  return window.getComputedStyle(h_color).getPropertyValue("color");
  //return '#59BCE0';
}
