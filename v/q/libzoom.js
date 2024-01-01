export { addZoomHandler };

function addZoomHandler(canvas, state, callback) {
  const j_zoom_min = 0.2;
  const j_zoom_max = 2;
  state.multitouching = false;

  if ("ontouchstart" in window) {
    let j_m0 = null,
      j_m1 = null;
    let j_last = new paper.Matrix(1, 0, 0, 1, 0, 0);
    canvas.getCTM = function (processTouchStart) {
      return j_last;
    };
    canvas.callback = function (multi, type, m0, m1) {
      if (m0 !== null) {
        j_m0 = new paper.Matrix(m0.a, m0.b, m0.c, m0.d, m0.tx, m0.ty);
      }
      if (m1 !== null) {
        j_m1 = new paper.Matrix(m1.a, m1.b, m1.c, m1.d, m1.tx, m1.ty);
      }
      let g = j_m0.appended(j_m1);
      paper.view.matrix = g;
      j_last = g;
    };
    const offset = {
      r: 0,
      s: 1
    };
    canvas.addEventListener("touchstart", (e) => {
      try {
        if (e.touches.length !== 2) return;
        state.multitouching = true;
        // callback here
        callback();
        e.preventDefault();
        const u = update(e, null);
        
        if (j_zoom_min > u.s ) { 
          u.s = j_zoom_min;
        } else if (u.s > j_zoom_max) {
          u.s = j_zoom_max;
        }
        Object.assign(offset, {
          r: u.r,
          s: u.s
        });
        const m = canvas.getCTM();
        canvas.callback(
          true,
          "touchstart",
          {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            tx: u.cx,
            ty: u.cy
          },
          {
            a: m.a,
            b: m.b,
            c: m.c,
            d: m.d,
            tx: m.tx - u.cx,
            ty: m.ty - u.cy
          }
        );
      } catch (e) {
        if (h_warn) h_warn.textContent = "touchStart: " + e;
      }
    });
    canvas.addEventListener("touchmove", (e) => {
      try {
        if (e.touches.length !== 2) return;
        e.preventDefault();
        const u = update(e, offset);
        
        if (j_zoom_min > u.s ) { 
          u.s = j_zoom_min;
        } else if (u.s > j_zoom_max) {
          u.s = j_zoom_max;
        }
        
        let tt = (u.r * Math.PI) / 180;
        let cc = Math.cos(tt);
        let ss = Math.sin(tt);
        let aa = u.s * cc;
        let bb = u.s * ss;
        canvas.callback(
          true,
          "touchmove",
          {
            a: aa,
            b: bb,
            c: -bb,
            d: aa,
            tx: u.cx,
            ty: u.cy
          },
          null
        );
      } catch (e) {
        if (h_warn) h_warn.textContent = "touchMove: " + e;
      }
    });
    canvas.addEventListener("touchend", (e) => {
      try {
        if (!state.multitouching) return;
        Object.assign(offset, {
          r: 0,
          s: 1
        });
        const m = canvas.getCTM();
        canvas.callback(true, "touchend", m, {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          tx: 0,
          ty: 0
        });
        state.multitouching = false;
      } catch (e) {
        if (h_warn) h_warn.textContent = "touchEnd: " + e;
      }
    });

    function update(e, offset) {
      const cx = (e.touches[0].pageX + e.touches[1].pageX) / 2;
      const cy = (e.touches[0].pageY + e.touches[1].pageY) / 2;
      const o = {
        r: 0,
        s: 1
      };
      offset
        ? Object.assign(o, {
            r: offset.r,
            s: offset.s
          })
        : null;
      const dx = e.touches[1].pageX - e.touches[0].pageX;
      const dy = e.touches[1].pageY - e.touches[0].pageY;
      const r = (Math.atan2(dy, dx) * 180) / Math.PI - o.r;
      const s = Math.sqrt(dx * dx + dy * dy) / o.s;
      return {
        cx,
        cy,
        r,
        s
      };
    }
  } else {
    document.addEventListener(
      "mousewheel",
      (event) => {
        const oldZoom = paper.view.zoom;
        
        let beta=1.05;
        if (event.deltaY > 0) {
          beta = 0.95;
        }
        const newZoom = paper.view.zoom*beta;
        if (!(j_zoom_min < newZoom && newZoom < j_zoom_max)) {
          beta = 1;
        }
        let mpos = paper.view.viewToProject([event.offsetX, event.offsetY]);
        let ctr = paper.view.center;
        let pc = mpos.subtract(ctr);
        paper.view.zoom *= beta;
        paper.view.center = mpos.subtract(pc.multiply(1/beta));
        event.preventDefault();
      },
      {
        passive: false
      }
    );
  }
}
