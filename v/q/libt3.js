export {
  getShadowByStr,
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
  getT3ByStr,
  deleteT3ByStr,
  ghostT3,
};

const l_cst = getConsts();
const SCALING_T3 = 0.97;
const COLOR_T3 = "#59BCE0";
const SQ3 = Math.sqrt(3);
const DUP = {};
const SDUP = {};
function dups () {
  console.log(Object.keys(DUP).map(k=>k+':'+!!(DUP[k])));
}
function deleteShadowByStr (str) {
  if (str in SDUP) {
    SDUP[str].remove();
    delete SDUP[str];
  }
}
function deleteT3ByStr (str) {
  if (str in DUP) {
    DUP[str].remove();
    delete DUP[str];
  }
}
function getShadowByStr (str) {
  return SDUP[str];
}
function getT3ByStr (str) {
  return DUP[str];
}
function getConsts() {
  const radius = 50;
  const offset = { x: 200, y: 50 };
  const width = parseInt(
    window.getComputedStyle(h_canvas).getPropertyValue("width"),
    10
  );
  const height = parseInt(
    window.getComputedStyle(h_canvas).getPropertyValue("height"),
    10
  );
  return { width, height, radius, offset };
}
function isT3(item,hit) {
  if (!("hit" in item.data)) return null;
  if (hit===null || hit===undefined) return item.parent;
  if (hit===item.data.hit) {
    return item;
  } else {
    return null;
  }
}
function arrangeT3(item) {
  const hit = item.data.hit;
  const t3 = item.parent;

  if (hit === "top") {
    toggleColor(t3);
    t3.data.flip = !t3.data.flip;
  } else if (hit === "center") {
    toggleColor(t3);
    t3.data.flip = !t3.data.flip;
  } else if (hit === "left") {
    t3.rotation += 120;
  } else if (hit === "right") {
    t3.rotation -= 120;
  }
  return t3;
}

function setShadow(ijk,color) {
  const k = ijk.k;
  const { dx, dy } = getDxDy(ijk);
  const frame = new paper.Path.RegularPolygon({
    center: [0, 0],
    pivot: [0, 0],
    sides: 3,
    radius: l_cst.radius,
    fillColor: color,
    opacity: 0.25,
  });
  frame.scaling = 1;
  frame.rotation = 30 + 180 * ((k + 1) % 2);
  frame.position = [l_cst.offset.x + dx, l_cst.offset.y + dy];
  if (toStr(ijk) in SDUP) {
    SDUP[toStr(ijk)].remove();
  }
  SDUP[toStr(ijk)] = frame;
  return frame;
}
function setT3(ijk, s, opacity,scale,color) {
  const k = ijk.k;
  let t3c = new paper.Path.RegularPolygon({
    center: [0, 0],
    rotation: 0,
    sides: 3,
    radius: l_cst.radius,
    fillColor: color,
    data: { hit: "center" }
  });
  let t3l = new paper.Path.RegularPolygon({
    center: [(l_cst.radius * SQ3) / 4, l_cst.radius / 4],
    sides: 3,
    radius: l_cst.radius / 2,
    fillColor: color,
    data: { hit: "left" }
  });
  let t3r = new paper.Path.RegularPolygon({
    center: [(-l_cst.radius * SQ3) / 4, l_cst.radius / 4],
    sides: 3,
    radius: l_cst.radius / 2,
    fillColor: color,
    data: { hit: "right" }
  });
  let t3u = new paper.Path.RegularPolygon({
    center: [0, -l_cst.radius / 2],
    sides: 3,
    radius: l_cst.radius / 2,
    fillColor: "white",
    data: { hit: "top" }
  });
  let grp = new paper.Group({
    children: [t3c, t3r, t3l, t3u],
    pivot: [0, 0],
    opacity: opacity,
    applyMatrix: false
  });
  grp.scaling = SCALING_T3 * scale;
  grp.rotation = 30 + 180 * ((k + 1) % 2) + 120 * ((s - 1) % 3);
  grp.data = {
    flip: s >= 3
  };
  const { dx, dy } = getDxDy(ijk);
  grp.position = [l_cst.offset.x + dx, l_cst.offset.y + dy];
  if (grp.data.flip) {
    toggleColor(grp);
  }
  t3c.onDoubleClick = function (event) {
    deleteT3ByStr(toStr(coord(event.point).ijk));
  };
  
  return grp;
}
function ghostT3(ijk,s,scale) {
  return setT3(ijk,s,0.6,1.7,COLOR_T3);
}
function drawT3(ijk, s,color) {
  const grp = setT3(ijk,s,1,1,color);
  grp.data.s = s;
  grp.data.color = color;
  if (toStr(ijk) in DUP) {
    DUP[toStr(ijk)].remove();
  }
  DUP[toStr(ijk)] = grp;
  return grp;
}
function colorT3(t3, color) {
  const base = t3.children[0];
  base.strokeColor = color;
  if (base.strokeWidth === 3) return;
  base.strokeWidth = 3;
  t3.opacity = 0.6;
  //t3.scale(1.4,1.4);
}
function coord(xy) {
  const xbase = (l_cst.radius * 3) / 2;
  const ybase = l_cst.radius * SQ3;
  const ox = l_cst.offset.x - xbase / 3;
  const oy = l_cst.offset.y - ybase / 2;
  const x = xy.x - ox;
  const y = xy.y - oy;
  let j = Math.floor(x / xbase);
  let dj = ((x - j * xbase + xbase) % xbase) / xbase;

  const dy = x / SQ3;
  let ii = y - dy;
  let i = Math.floor(ii / ybase);
  let di = ((ii - i * ybase + ybase) % ybase) / ybase;

  let k = 1;
  let fy = ii - i * ybase;
  let gy = (2 * dy + ybase)/ybase;
  let hy = gy-Math.floor(gy);
  if ((ybase - fy)/ybase > hy) k = 0;
  let s = 0;
  if (k === 0) {
    if (dj < 1 / 2) {
      if (di < 1 / 2) {
        s = 2;
      } else {
        s = 1;
      }
    } else {
      s = 0;
    }
  } else {
    if (dj < 1 / 2) {
      s = 0;
    } else {
      if (di < 1 / 2) {
        s = 1;
      } else {
        s = 2;
      }
    }
  }
  const ijk = { i, j, k };
  return { ijk, s };
}
function toStr(ijk) {
  return ijk.i + "_" + ijk.j + "_" + ijk.k;
}
function parse(str) {
  let a = str.split("_");
  return {
    i: parseInt(a[0], 10),
    j: parseInt(a[1], 10),
    k: parseInt(a[2], 10)
  };
}
function getDxDy(ijk) {
  const i = ijk.i;
  const j = ijk.j;
  const k = ijk.k;
  let dy = i * l_cst.radius * SQ3;
  let dx = (j * l_cst.radius * 3) / 2;
  if (k % 2 == 1) {
    dx += l_cst.radius / 2;
    dy += (l_cst.radius * SQ3) / 2;
  }
  dy += (j * (l_cst.radius * SQ3)) / 2;
  return { dx, dy };
}
function toggleColor(t3) {
  const color0 = t3.children[0].fillColor;
  const color3 = t3.children[3].fillColor;
  t3.children[0].fillColor = color3;
  t3.children[1].fillColor = color3;
  t3.children[2].fillColor = color3;
  t3.children[3].fillColor = color0;
}
