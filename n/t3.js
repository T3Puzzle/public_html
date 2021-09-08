(()=>{
    let space = new tapspace.Space();
    let viewElement = document.getElementById('space');
    var view = new tapspace.SpaceView(space);
    view.mount(viewElement);

    // Width and height of a grid tile
    const XSIDE = 100;
    const YSIDE = 100*Math.sqrt(3)/2;

    // Snapping grid
    let grid = new tapspace.geom.IGrid({
      xStep: XSIDE,
      yStep: YSIDE,
      rotateStep: Math.PI / 2,
      scaleStep: 100000000,
      scalePhase: 1
    }, space);

    let pickRandom = function (arr) {
      var i = Math.floor(Math.random() * arr.length)
      return arr[i]
    }

      // Space size
      const W = 2;
      const XCENTER = XSIDE/2;
      const YCENTER = YSIDE/3;
      const ROT = Math.PI*2/ 3;

      // Additional container
      let g = new tapspace.SpaceGroup(space)

      // Handler for tap events. Better here than inside a loop.
      let tapHandler = function (ev) {
        //console.log(ev.element.parentNode.style.transform);
        //ev.element.parentNode.style.transform = '';
        ev.item.rotate(ev.item.at(XCENTER,YCENTER), ROT)
      }

      // Create and place tiles
      for (let i = 0; i < W; i += 1) {
        for (let j = 0; j < W; j += 1) {
          for (let k = 0; k < 2; k += 1) {
            let px = new tapspace.SpaceGroup(g);
            let pzs = [];
            pzs.push(new tapspace.SpaceHTML(`
<div x-form="rotate(0deg)"
  style="
  width: 0px;
  height: 0px;
  display: inline-block;
  position: absolute;
  transform-origin: 0px 0px;
  transform: scale(0.5);
"><div x-color="#ddffdd" class="triangle"></div></div>
`,px));
            pzs.push(new tapspace.SpaceHTML(`
<div x-form="scale(-1,1)"
  style="
  width: 0px;
  height: 0px;
  display: inline-block;
  position: absolute;
  transform-origin: 0px 0px;
  transform: translate(75px,43.3px) scale(-0.5);
"><div x-color="#00ff00" class="triangle"></div></div>
`,px));
            pzs.push(new tapspace.SpaceHTML(`
<div x-form="rotate(-120deg)"
  style="
  width: 0px;
  height: 0px;
  display: inline-block;
  position: absolute;
  transform-origin: 100px 0px;
  transform: scale(0.5);
"><div x-color="#00ff00" class="triangle"></div></div>
`,px));
            pzs.push(new tapspace.SpaceHTML(`
<div x-form="rotate(120deg)"
  style="
  width: 0px;
  height: 0px;
  display: inline-block;
  position: absolute;
  transform-origin: 50px 86.60px;
  transform: scale(0.5);
"><div x-color="#00ff00" class="triangle"></div></div>
`,px));
            if (j%2==0) {
              px.translate(px.at(0,0), grid.at(i, j))
            } else {
              px.translate(px.at(-XSIDE/2,0), grid.at(i, j))
            }
            if (k===1) {
              px.rotate(px.at(XSIDE/4,YSIDE/2), Math.PI);
            }
            if (k===0) {
              px.rotate(px.at(XCENTER,YCENTER), pickRandom([
                0, ROT, -ROT
              ]))

            } else {
              px.rotate(px.at(XCENTER,YCENTER), pickRandom([
               0, ROT, -ROT
              ]))
            }

            // Define interaction.
            // Setting "preventDefault: false" we allow transformations on
            // the view in addition to tap event recognition.
            pzs.map(pz=>{
              pz.setSize(XSIDE,YSIDE);
              let touch = new tapspace.Touchable(view, pz, px)
              touch.start({
                tap: true,
                preventDefault: false
              })
              touch.on('tap', tapHandler)
            });
          }
        }
      }

      // Initial view position
      view.translate(view.atMid(), g.getHull().atMid())

      // Make view touch-transformable
      let tView = new tapspace.Touchable(view, view)
      tView.start({
        translate: true,
        scale: true,
        rotate: true
      })

      // Allow zooming with mouse wheel
      let wheeler = new tapspace.Wheelable(view, view)
      wheeler.start({
        scale: true
      })

      // Allow discrete rotation steps
      let viewGrid = new tapspace.geom.IGrid({
        rotateStep: Math.PI / 12
      }, space)
      tView.on('gestureend', function () {
        view.snap(view.atMid(), viewGrid)
      });
      Array.from(document.querySelectorAll('div.triangle')).map(i=>{
        let color = i.getAttribute('x-color');
        i.parentNode.parentNode.style['width'] = '0px';
        i.parentNode.parentNode.style['height'] = '0px';
        i.parentNode.style['width'] = '0px';
        i.parentNode.style['height'] = '0px';
        i.style = `width: 100px;
  height: 100px;
  background: ${color};
  display: inline-block;
  position: absolute;
  transform-origin: 50px 0px;
  transform: matrix3d(1, 0, 0, 0, 0, 86.60254, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1);
`;
      });

})();
