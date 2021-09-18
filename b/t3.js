importModules(
  "tileUtil",
  "./tileUtil.js",
  "https://codepen.io/alytile/pen/dyRZgga.js",
  (tileUtil) => {
    importModules(
      "t3Util",
      "./t3Util.js",
      "https://codepen.io/alytile/pen/xxrPQob.js",
      (t3Util) => {
        define(tileUtil, t3Util);
      }
    );
  }
);
function define(util, puz) {
  customElements.define(
    "tapspace-grid",
    class extends HTMLElement {
      connectedCallback() {
        util.init(this, puz);
        process();   
        util.final();
      }
    }
  );
  function process() {
    // customize initial position 
    puz.load({}, (data) => {
      util.initTile(data,tapHandler, gstart, gend,(top,tile,data)=>{
        util.placeTile(top,tile,data);
      });
    });
  }
  function gstart(ev, top, tile) {
    // customzie on gesturestart event
  }
  function gend(ev, top, tile) {
     // customize gestureend event
  }
  function tapHandler(ev, top, tile, idx) {
    // customize effect on tap panels.
    puz.switchFace(top, tile, idx);
  }
}
function importModules(moduleName, first, second, callback) {
  let ret = null;
  import(first)
    .then((module) => {
      ret = new module[moduleName]();
      callback(ret);
    })
    .catch((e) => {
      import(second)
        .then((module) => {
          ret = new module[moduleName]();
          callback(ret);
        })
        .catch((e) => {
          console.log("error");
        });
    });
}
