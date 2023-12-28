import { getConsts, getDxDy } from "./libt3.js";
export { drawBackground, drawFrame, outOfFrame };

const l_cst = getConsts();
const SCALE_BG = 0.407;

function drawBackground() {
  const background = new paper.Raster(
    "https://www.t3puzzle.com/z/triroadv.png"
  );
  background.onLoad = function () {
    const bg = this;
    bg.position = [l_cst.width / 2, l_cst.height / 2];
    bg.scaling = SCALE_BG;
    bg.sendToBack();
  };
}
function outOfFrame(ijk) {
  const i=ijk.i;
  const j=ijk.j;
  const k=ijk.k;
  if (!(0 <= i && i < 4 && 0 <= j && j < 4)) {
    return true;
  }
  if (k === 0) {
    if (i + j < 2) {
      return true;
    }
    if (i + j > 5) {
      return true;
    }
  } else {
    if (i + j < 1) {
      return true;
    }
    if (i + j > 4) {
      return true;
    }
  }
  return false;
}
/////////////////////////////
function drawFrame() {
  return;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 2; k++) {
        if (outOfFrame({i, j, k})) continue;
        setFrame({i, j, k});
      }
    }
  }
}
function setFrame(ijk) {
  const k = ijk.k;
  const { dx, dy } = getDxDy(ijk);
  const frame = new paper.Path.RegularPolygon({
    center: [0, 0],
    pivot: [0, 0],
    sides: 3,
    radius: l_cst.radius,
    strokeColor: "#ffbbbb",
    strokeWidth: 3,
    strokeCap: "round"
  });
  frame.scaling = 1;
  frame.rotation = 30 + 180 * ((k + 1) % 2);
  frame.position = [l_cst.offset.x + dx, l_cst.offset.y + dy];
}
