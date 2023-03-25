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
        return [
          "color",
          "mode",
          "flipall",
          "fit",
          "rotate",
          "loaddata",
          "nomoveall",
          "noflipall"
        ];
      }
      constructor() {
        super();
        this.util = util();
        this.puz = puz();
        this.set_rotate = (val)=>this.util.rotate(val);
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "color") {
          this.puz.setNowColor(newValue);
        } else if (name === "mode") {
          this.util.changeMode(oldValue, newValue);
        } else if (name === "flipall") {
          this.util.flipAll();
        } else if (name === "fit") {
          this.util.fit();
        } else if (name === "rotate") {
          this.util.rotate(newValue);
        } else if (name === "loaddata") {
          this.util.resetAndloadData(newValue);
        } else if (name === "nomoveall") {
          this.util.noMoveAll(newValue);
        } else if (name === "noflipall") {
          this.util.noFlipAll(newValue);
        }
      }
      connectedCallback() {
        this.util.init(this, this.puz, () => {
          // customize initial position
          this.util.load({}, (data, opt) =>
            this.util.initTile(
              data,
              (ev, target, idx)=>this.puz.switchFace(target, idx),
              (ev, target)=>{},
              (ev, target)=>{},
              (target, data) => {
                this.util.placeTile(target, data);
              },
              opt
            )
          );
        });
      }
    }
  );
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
