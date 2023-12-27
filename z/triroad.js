const j_consts = getConsts();
let j_count = 0;
const j_color = "#59BCE0";
const sq3 = Math.sqrt(3);
const j_radius = 69;
const j_offset = { x: 67.5, y: -22 };
let j_grab;
const j_adds = [];
let j_event;
let j_dup = {};

function draw() {
  drawBackground();
  drawFrame();
}
window.addEventListener("load", () => {
  paper.setup(h_canvas);
  const tool = new paper.Tool();
  draw();
  tool.onMouseDown = function (event) {
    j_grab = null;
    j_event = null;
    let hitResult = paper.project.hitTest(event.point, {
      segments: false,
      stroke: false,
      fill: true,
      tolerance: 5
    });
    if (!hitResult) return;

    let { i, j, k, s } = conv(event.point.x, event.point.y);
    j_adds.length = 0;
    if (!("type" in hitResult.item.data)){
      j_adds.push(ijk(i,j,k));
    }
    j_event = {
      grab: false,
      point: event.point,
      item: hitResult.item
    };
    if (j_adds.length===0) {
      j_grab = j_event.item.parent;
    }
  };
  tool.onMouseMove = function (event) {};
  tool.onMouseDrag = function (event) {
    let { i, j, k, s } = conv(event.point.x, event.point.y);
    if (j_adds.length>0) {
      if (j_adds[j_adds.length-1]!==ijk(i,j,k)) {
        j_adds.push(ijk(i,j,k));
      }
    } else {
      // j_grab
      j_event.grab = true;
      j_grab.bringToFront();
      j_grab.position = [event.point.x,event.point.y];
      let old = conv(j_event.point.x, j_event.point.y);
      if (outOfFrame(i, j, k) ||
          (ijk(old.i,old.j,old.k)!==ijk(i,j,k)&&(j_dup[ijk(i,j,k)]))) {
        colorT3(j_grab,'red'); 
      } else {
        colorT3(j_grab,'green');
      }
    }
  };
  tool.onMouseUp = function (event) {
    let old = conv(j_event.point.x, j_event.point.y);
    //console.log(j_event.point.x+' '+j_event.point.y);
    //console.log(ijk(old.i,old.j,old.k));
    let { i, j, k, s } = conv(event.point.x, event.point.y);
    if (j_event.grab) {
      resetT3(j_grab); 
      if (outOfFrame(i, j, k)) {
        j_grab.remove();
        delete j_dup[ijk(old.i,old.j,old.k)];
        return;
      };
      if (j_dup[ijk(i,j,k)]) {
        i=old.i;
        j=old.j;
        k=old.k;
      } else {
        delete j_dup[ijk(old.i,old.j,old.k)];
        j_dup[ijk(i,j,k)] = j_grab;
      }
      const { dx, dy } = getDxDy(i, j, k);
      if ((k===0 && j_grab.data.rot)
         ||(k===1 && !(j_grab.data.rot))) {
        j_grab.position = [j_offset.x + dx, j_offset.y + dy];
      } else {
        j_grab.data.rot = !(j_grab.data.rot);
        j_grab.rotation += 60;
        j_grab.position = [j_offset.x + dx, j_offset.y + dy];
      }
      return;
    } else if (j_adds.length>0) {
      if (j_adds.length===1 && j_adds[0]===ijk(i,j,k)) {
        // triroad spepcific
        {
          if (outOfFrame(i, j, k)) return;
          if (j_count % 2) {
            s += 3;
          }
          j_count++;
        }
        j_dup[ijk(i,j,k)] = drawT3(i, j, k, s); 
      } else {
        // delete first
        for (let ai=0;ai<j_adds.length;ai++) {
          if ( j_adds[ai] in j_dup ) {
            j_dup[j_adds[ai]].remove();
            delete j_dup[j_adds[ai]];
          }
        }
        // draw next
        for (let ai=0;ai<j_adds.length;ai++) {
          const t = kji(j_adds[ai]);
          //TODO: determine s from j_adds sequence
          j_dup[j_adds[ai]] = drawT3(t.i, t.j, t.k, 1); 
        }
      }
    } else {
      const type = j_event.item.data.type;
      const t3 = j_event.item.parent;
      
      t3.bringToFront();
      if (type === "top") {
        toggleColor(t3);
      } else if (type === "left") {
        t3.rotation += 120;
      } else if (type === "right") {
        t3.rotation -= 120;
      } else if (type === "center") {
        //
      }
    }
  };
});
function drawT3(i, j, k, s) {
  let t3c = new paper.Path.RegularPolygon({
    center: [0, 0],
    rotation: 0,
    sides: 3,
    radius: j_radius,
    fillColor: j_color,
    data: { type: "center" }
  });
  let t3l = new paper.Path.RegularPolygon({
    center: [(j_radius * sq3) / 4, j_radius / 4],
    sides: 3,
    radius: j_radius / 2,
    fillColor: j_color,
    data: { type: "left" }
  });
  let t3r = new paper.Path.RegularPolygon({
    center: [(-j_radius * sq3) / 4, j_radius / 4],
    sides: 3,
    radius: j_radius / 2,
    fillColor: j_color,
    data: { type: "right" }
  });
  let t3u = new paper.Path.RegularPolygon({
    center: [0, -j_radius / 2],
    sides: 3,
    radius: j_radius / 2,
    fillColor: "white",
    data: { type: "top" }
  });
  let grp = new paper.Group({
    children: [t3c, t3r, t3l, t3u],
    pivot: [0, 0],
    opacity: 1
  });
  grp.scaling = 0.87;
  grp.rotation = 30+180 * ((k + 1) % 2) - 120 * s;
  grp.data = { rot: k === 0 };
  const { dx, dy } = getDxDy(i, j, k);
  grp.position = [j_offset.x + dx, j_offset.y + dy];
  grp.onDoubleClick = function (event) {
    let { i, j, k, s } = conv(event.point.x, event.point.y);
    delete j_dup[ijk(i,j,k)];
    this.remove();
  };
  if (s > 3) {
    toggleColor(grp);
  }
  return grp;
}
function outOfFrame(i, j, k) {
  console.log(ijk(i,j,k));
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
function getConsts() {
  const width = parseInt(
    window.getComputedStyle(h_canvas).getPropertyValue("width"),
    10
  );
  const height = parseInt(
    window.getComputedStyle(h_canvas).getPropertyValue("height"),
    10
  );
  return { width, height };
}
function drawBackground() {
  const background = new paper.Raster("https://www.t3puzzle.com/z/triroadv.png");
  background.onLoad = function () {
    let bg = this;
    bg.position = [j_consts.width / 2, j_consts.height / 2];
    bg.scaling = 0.407;
    bg.sendToBack();
  };
}
/////////////////////////////
function drawFrame() {
  // for adjust with background
  return;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 2; k++) {
        if (outOfFrame(i, j, k)) continue;
        setFrame(i, j, k);
      }
    }
  }
}
function setFrame(i, j, k) {
  let { dx, dy } = getDxDy(i, j, k);
  let frame = new paper.Path.RegularPolygon({
    center: [0, 0],
    pivot: [0, 0],
    sides: 3,
    radius: j_radius,
    strokeColor: "#ffbbbb",
    strokeWidth: 3,
    strokeCap: "round",
    data: { type: "center" }
  });
  frame.scaling = 1;
  frame.rotation = 30+180 * ((k + 1) % 2);
  frame.position = [j_offset.x + dx, j_offset.y + dy];
}

function getDxDy(i, j, k) {
  let dy = i * j_radius * sq3;
  let dx = (j * j_radius * 3) / 2;
  if (k % 2 == 1) {
    dx += j_radius / 2;
    dy += (j_radius * sq3) / 2;
  }
  dy += (j * (j_radius * sq3)) / 2;
  return { dx, dy };
}

function toggleColor(t3) {
  let color0 = t3.children[0].fillColor;
  let color3 = t3.children[3].fillColor;
  t3.children[0].fillColor = color3;
  t3.children[1].fillColor = color3;
  t3.children[2].fillColor = color3;
  t3.children[3].fillColor = color0;
}
function kji (ijk) {
  let a = ijk.split('_');
  return {i:parseInt(a[0],10),j:parseInt(a[1],10),k:parseInt(a[2],10)};
}
function ijk (i,j,k) {
  return i+'_'+j+'_'+k;
}

function colorT3 (t3,color) {
  const base = t3.children[0];
  base.strokeColor = color;
  if (base.strokeWidth===3) return;
  base.strokeWidth= 3;
  t3.scaling =1.4;
}
function resetT3 (t3) {
  const base = t3.children[0];
  if (base.strokeWidth===0) return;
  base.strokeWidth= 0;
  t3.scaling=1/1.4;
}
function conv(xx, yy) {
  const xbase = (j_radius * 3) / 2;
  const ybase = j_radius * sq3;
  const ox = j_offset.x - xbase / 3;
  const oy = j_offset.y - ybase / 2;
  const x = xx - ox;
  const y = yy - oy;
  let j = Math.floor(x / xbase);
  let dj = ((x - j * xbase + xbase) % xbase) / xbase;

  const dy = x / sq3;
  let ii = y - dy;
  let i = Math.floor(ii / ybase);
  let di = ((ii - i * ybase + ybase) % ybase) / ybase;

  let k = 1;
  let fy = ii - i * ybase;
  if (ybase - fy > (2 * dy + ybase) % ybase) k = 0;
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
  return { i, j, k, s };
}
