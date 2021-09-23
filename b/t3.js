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
    "grid-puzzle",
    class extends HTMLElement {
      static get observedAttributes() {
        return ["color", "mode", "flipall","fit","loaddata"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "color") {
          puz.setNowColor(newValue);
        } else if (name === "mode") {
          util.changeMode(oldValue,newValue);
        } else if (name === "flipall") {
          util.flipAll();
        } else if (name === "fit") {
          util.fit();
        } else if (name === "loaddata") {
          util.loadData(newValue);
        }
      }
      connectedCallback() {
        util.init(this, puz, process);
      }
    }
  );
  function process() {
    // customize initial position
    util.load({}, (data, opt) =>
      util.initTile(
        data,
        tapHandler,
        gstart,
        gend,
        (target, data) => {
          util.placeTile(target, data);
        },
        opt
      )
    );
  }
  function gstart(ev, target) {
    // customzie on gesturestart event
  }
  function gend(ev, target) {
    // customize gestureend event
  }
  function tapHandler(ev, target, idx) {
    // customize effect on tap panels.
    
    puz.switchFace(target, idx);
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
