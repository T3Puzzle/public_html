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
} from "./libt3.js";
import {
  addZoomHandler,
  resetZoom
} from "./libzoom.js";

const j_zoom = {};
const j_paint = [];
const j_point = [];
const j_hex = [];
const j_hex_ss = [];
const j_hex_colors = [];
let j_downHex;
let j_lastHex;
let j_down;
const l_cst = getConsts();
const SQ3 = Math.sqrt(3);
const xbase = (l_cst.radius * 3) / 2;
const ybase = l_cst.radius * SQ3;

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
  let trimExtrapolated = false;
  // extrapolate
  if (point.length === 2) {
    const dx = point[1].x - point[0].x;
    const dy = point[1].y - point[0].y;
    const norm = Math.sqrt(dx * dx + dy * dy);
    const extra = (l_cst.radius * 2) / norm;
    const _p = {
      x: point[1].x + extra * dx,
      y: point[1].y + extra * dy
    };
    interpolatePaint(
      { l: paint[paint.length - 1], n: toStr(coord(_p).ijk) },
      { l: point[point.length - 1], n: _p },
      paint,
      point
    );
    trimExtrapolated = point.length > 2;
  }
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
  console.log(change);
  let color = [];

  for (let ci = 1; ci < change.length; ci++) {
    if ((change[ci - 1] + change[ci]).indexOf("R") == -1) {
      color.push(2);
    } else if ((change[ci - 1] + change[ci]).indexOf("L") == -1) {
      color.push(1);
    } else if ((change[ci - 1] + change[ci]).indexOf("M") == -1) {
      color.push(0);
    }
  }
  // path begin
  {
    let curl = false;
    let curlv = 0;
    if (change.length >= 3) {
      let cc = [change[0], change[1], change[2]];
      cc.sort();
      if (cc.sort().join("") === "LMR") {
        curl = true;
        const c12 = [color[0], color[1]];
        [0, 1, 2].map((v) => {
          if (c12.indexOf(v) === -1) curlv = v;
        });
      }
    }
    if (curl) {
      // TODO:
      color.unshift(curlv);
    } else {
      color.unshift(color[0]);
    }
  }
  // path end
  {
    let curl = false;
    let curlv = 0;
    if (change.length >= 3) {
      let cc = [
        change[change.length - 1],
        change[change.length - 2],
        change[change.length - 3]
      ];
      cc.sort();
      if (cc.sort().join("") === "LMR") {
        curl = true;
        const c12 = [color[color.length - 1], color[color.length - 2]];
        [0, 1, 2].map((v) => {
          if (c12.indexOf(v) === -1) curlv = v;
        });
      }
    }
    if (curl) {
      color.push(curlv);
    } else {
      color.push(color[color.length - 1]);
    }
  }

  let mod = 3;
  if (trimExtrapolated) {
    paint.length = 2;
    point.length = 2;
  }
  let direct;
  {
    const lp = paint[0];
    const p = paint[1];
    const lpp = parse(lp);
    const pp = parse(p);

    if (lpp.j === pp.j && lpp.i === pp.i) {
      if (lpp.k > pp.k) {
        direct = "up";
      } else {
        direct = "down";
      }
    } else if (lpp.j === pp.j) {
      if (lpp.i > pp.i) {
        direct = "right";
      } else {
        direct = "left";
      }
    } else if (lpp.i === pp.i) {
      if (lpp.j < pp.j) {
        direct = "right";
      } else {
        direct = "left";
      }
    }
  }
  const first_k = parse(paint[0]).k;
  if (color[0] === 0) {
    // left
    if (direct === "left") mod += 3;
    if (direct === "down") mod += 3;
    if (first_k) mod += 3;
  } else if (color[0] === 1) {
    // right
    if (first_k) mod += 3;
    if (direct === "right") mod += 3;
    if (direct === "down") mod += 3;
  } else if (color[0] === 2) {
    // top
    if (direct === "left") mod += 3;
    if (first_k) mod += 3;
  }
  for (let ai = 0; ai < paint.length; ai++) {
    if (ai > 0) {
      // alternating neighboring colors
      if (
        color[ai - 1] === color[ai] &&
        neighboring(paint[ai - 1], paint[ai])
      ) {
        mod = (mod + 3) % 6;
      }
    }
    drawT3(parse(paint[ai]), color[ai] + (mod % 6), getT3Color(), true);
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
  let type = "empty";
  ["top", "center", "left", "right"].map((t) => {
    if (isT3(hitResult.item, t)) type = t;
  });
  let color, s;
  if (isT3(hitResult.item)) {
    color = hitResult.item.parent.data.color;
    s = hitResult.item.parent.data.s;
  }
  return {
    color: color,
    s: s,
    drag: false,
    type: type,
    white:
      hitResult.item.fillColor.red === 1 &&
      hitResult.item.fillColor.green === 1 &&
      hitResult.item.fillColor.blue === 1
  };
}
function checkActiveHex(d, downHex) {
  const XX = l_cst.radius / 2;
  const YY = (l_cst.radius * SQ3) / 2;
  let dx = Math.floor((downHex[0] - d[0]) / (XX * 3));
  let dy = Math.floor((downHex[1] - d[1]) / YY);

  if (dx % 2 === 0) {
    if (!(dy % 6 === 0)) {
      return false;
    }
  } else {
    if (!((dy - 3) % 6 === 0)) {
      return false;
    }
  }
  return true;
}
function getAroundHex(point, out, downHex) {
  const { ijk, s } = coord(point);
  const XX = l_cst.radius / 2;
  const YY = (l_cst.radius * SQ3) / 2;
  const cnt = tap(ijk);
  let a, b, c;
  if (ijk.k === 0) {
    a = [cnt[0] - XX, cnt[1] - YY];
    b = [cnt[0] - XX, cnt[1] + YY];
    c = [cnt[0] + 2 * XX, cnt[1] + 0];
  } else {
    a = [cnt[0] + XX, cnt[1] - YY];
    b = [cnt[0] + XX, cnt[1] + YY];
    c = [cnt[0] - 2 * XX, cnt[1] + 0];
  }
  let d;
  if (!downHex) {
    let da = dist(point, a);
    let db = dist(point, b);
    let dc = dist(point, c);
    if (da < db) {
      if (da < dc) {
        d = a;
      } else {
        d = c;
      }
    } else {
      if (db > dc) {
        d = c;
      } else {
        d = b;
      }
    }
  } else {
    if (checkActiveHex(a, downHex)) d = a;
    else if (checkActiveHex(b, downHex)) d = b;
    else if (checkActiveHex(c, downHex)) d = c;
  }
  if (!d) return null;

  let A, B, C, D, E, F;
  A = new paper.Point([d[0] + 2 * XX, d[1] + 0]);
  B = new paper.Point([d[0] - XX, d[1] + YY]);
  C = new paper.Point([d[0] + XX, d[1] + YY]);
  D = new paper.Point([d[0] - 2 * XX, d[1] + 0]);
  E = new paper.Point([d[0] + XX, d[1] - YY]);
  F = new paper.Point([d[0] - XX, d[1] - YY]);

  addOut(toStr(coord(A).ijk), out);
  addOut(toStr(coord(B).ijk), out);
  addOut(toStr(coord(C).ijk), out);
  addOut(toStr(coord(D).ijk), out);
  addOut(toStr(coord(E).ijk), out);
  addOut(toStr(coord(F).ijk), out);
  return d;
}
function addOut(add, out) {
  if (out.indexOf(add) === -1) out.push(add);
}
function dist(a, b) {
  let dx = a.x - b[0];
  let dy = a.y - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}
function toStrPos(pos) {
  return pos[0].toFixed(3) + "_" + pos[1].toFixed(3);
}
window.addEventListener("load", () => {
  paper.setup(h_canvas);
  const tool = new paper.Tool();
  setBackground();
  drawT3(coord(paper.view.center).ijk, 2, getT3Color(), false);
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
    for (let ai = 0; ai < j_hex.length; ai++) {
      deleteShadowByStr(j_hex[ai]);
    }
    j_paint.length = 0;
    j_point.length = 0;
    j_hex.length = 0;
    j_downHex = null;
    j_lastHex = null;
    j_down = null;
  });

  tool.onMouseDown = function (event) {
    try {
      const mode = getMode();
      j_down = null;
      let hitResult = hit(event.point);
      if (!hitResult) return;
      let { ijk, s } = coord(event.point);
      j_paint.length = 0;
      j_point.length = 0;
      j_hex.length = 0;
      j_downHex = null;
      j_lastHex = null;
      j_down = detect(hitResult);
      if (mode === "Painter" || mode === "Eraser") {
        j_paint.push(toStr(ijk));
        j_point.push(event.point);
      } else {
        j_downHex = getAroundHex(event.point, j_hex, null);
        j_lastHex = j_downHex;
        if (mode === "Paver") {
          for (let pi = 0; pi < j_hex.length; pi++) {
            const pj = pi % 6;
            if (j_hex_ss.length === 0) {
              drawT3(parse(j_hex[pi]), pj, getT3Color(), false);
            } else {
              if (j_hex_ss[pj] !== undefined) {
                drawT3(parse(j_hex[pi]), j_hex_ss[pj], j_hex_colors[pj], false);
              }
            }
          }
        } else {
          j_hex_ss.length = 0;
          j_hex_colors.length = 0;
          for (let pi = 0; pi < j_hex.length; pi++) {
            let d = detect(hit(tap(parse(j_hex[pi]))));
            j_hex_ss.push(d.s);
            j_hex_colors.push(d.color);
          }
          for (let pi = 0; pi < j_hex.length; pi++) {
            setShadow(parse(j_hex[pi]), getShadowColor());
          }
        }
      }
    } catch (e) {
      h_warn.textContent = "down:" + e;
    }
  };
  tool.onMouseDrag = function (event) {
    try {
      const mode = getMode();
      if (!j_down) return;
      if (j_zoom.multitouching) return;
      let { ijk, s } = coord(event.point);

      if (mode === "Painter" || mode === "Eraser") {
        if (j_paint[j_paint.length - 1] !== toStr(ijk)) {
          processShadow(
            { l: j_paint[j_paint.length - 1], n: toStr(ijk) },
            { l: j_point[j_point.length - 1], n: event.point },
            j_paint,
            j_point
          );
        }
      } else {
        if (mode === "Paver") {
          let hexOk = getAroundHex(event.point, j_hex, j_downHex);
          if (hexOk) {
            if (toStrPos(hexOk) !== toStrPos(j_lastHex)) {
              for (let pi = 0; pi < j_hex.length; pi++) {
                const pj = pi % 6;
                if (j_hex_ss.length === 0) {
                  drawT3(parse(j_hex[pi]), pj, getT3Color(), false);
                } else {
                  if (j_hex_ss[pj] !== undefined) {
                    drawT3(
                      parse(j_hex[pi]),
                      j_hex_ss[pj],
                      j_hex_colors[pj],
                      false
                    );
                  }
                }
              }
              j_lastHex = hexOk;
            }
          }
        } else {
          for (let pi = 0; pi < j_hex.length; pi++) {
            deleteShadowByStr(j_hex[pi]);
          }
          j_hex.length = 0;
          getAroundHex(event.point, j_hex, null);
          j_hex_ss.length = 0;
          j_hex_colors.length = 0;
          for (let pi = 0; pi < j_hex.length; pi++) {
            let d = detect(hit(tap(parse(j_hex[pi]))));
            j_hex_ss.push(d.s);
            j_hex_colors.push(d.color);
          }
          for (let pi = 0; pi < j_hex.length; pi++) {
            setShadow(parse(j_hex[pi]), getShadowColor());
          }
        }
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
      } else if (mode === "Paver" || mode === "Picker") {
        if (mode === "Paver") {
        } else if (mode === "Picker") {
          for (let pi = 0; pi < j_hex.length; pi++) {
            deleteShadowByStr(j_hex[pi]);
          }
          j_hex.length = 0;
          h_painter.classList.remove("c_painter");
          h_eraser.classList.remove("c_eraser");
          h_picker.classList.remove("c_picker");
          h_paver.classList.toggle("c_paver");
        }
      } else {
        if (!j_down.drag) {
          if (j_down.type === "center") {
            deleteT3ByStr(toStr(ijk));
          } else if (j_down.type === "empty") {
            drawT3(ijk, (s + 3) % 6, getT3Color(), false);
          } else {
            if (!j_down.white && j_down.type !== "top") {
              drawT3(ijk, (s + 3) % 6, getT3Color(), false);
            } else {
              drawT3(ijk, s + white, getT3Color(), false);
            }
          }
        } else {
          if (j_paint.length === 1 && j_paint[0] === toStr(ijk)) {
            // just little drag
            const up = detect(hit(event.point));
            if (j_down.type === up.type) {
              // do nothing
            } else if (j_down.type == "top") {
              if (up.type === "left") {
                drawT3(ijk, ((s + 1) % 3) + white, getT3Color(), false);
              } else if (up.type === "right") {
                drawT3(ijk, ((s + 2) % 3) + white, getT3Color(), false);
              } else {
                // do nothing
              }
            } else if (j_down.type == "left") {
              if (up.type === "right") {
                drawT3(ijk, ((s + 1) % 3) + white, getT3Color(), false);
              } else if (up.type === "top") {
                drawT3(ijk, ((s + 2) % 3) + white, getT3Color(), false);
              } else {
                // do nothing
              }
            } else if (j_down.type == "right") {
              if (up.type === "top") {
                drawT3(ijk, ((s + 1) % 3) + white, getT3Color(), false);
              } else if (up.type === "left") {
                drawT3(ijk, ((s + 2) % 3) + white, getT3Color(), false);
              } else {
                // do nothing
              }
            } else {
              // do nothing
            }
          } else {
            processPaint(j_paint, j_point, j_down, detect(hit(event.point)));
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
    fillColor: "#FDFCF5"
  });
  background.sendToBack();
}
function getMode() {
  if (h_eraser.className.split(" ").indexOf("c_eraser") > -1) {
    return "Eraser";
  } else if (h_paver.className.split(" ").indexOf("c_paver") > -1) {
    return "Paver";
  } else if (h_picker.className.split(" ").indexOf("c_picker") > -1) {
    return "Picker";
  } else {
    return "Painter";
  }
}
function getShadowColor() {
  const mode = getMode();
  if (mode === "Eraser") {
    return "#dddd00";
  } else if (mode === "Paver") {
    return getT3Color();
  } else if (mode === "Picker") {
    return "#666666";
  } else {
    return getT3Color();
  }
}
function getT3Color() {
  return window.getComputedStyle(h_color).getPropertyValue("color");
  //return '#59BCE0';
}
