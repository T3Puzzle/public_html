(()=>{
function gridPuzzle () {
  return { define: function (tileUtil, t3Util, tapspace) {
  customElements.define(
    "grid-puzzle",
    class extends HTMLElement {
      static get observedAttributes() {
        return [
          "mode",
          "_color",
          "_flip_all",
          "_fit",
          "_rotate",
          "_zoom",
          "_load_data",
          "_nomoveall",
          "_noflipall"
        ];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "mode") {
          this.__tile.changeMode(oldValue, newValue);
          this.__mode = newValue;
        } else if (name === "_color") {
          this.__t3.setNowColor(newValue);
        } else if (name === "_flip_all") {
          this.__tile.flipAll();
        } else if (name === "_fit") {
          this.__tile.fit();
        } else if (name === "_rotate") {
          this.__tile.rotate(newValue);
         } else if (name === "_zoom") {
          this.__tile.zoom(newValue);
        } else if (name === "_load_data") {
          this.__tile.resetAndloadData(newValue);
        } else if (name === "_nomoveall") {
          this.__tile.noMoveAll(newValue);
        } else if (name === "_noflipall") {
          this.__tile.noFlipAll(newValue);
        }
      }
      constructor() {
        super();
        this.__tile = tileUtil();
        this.__t3 = t3Util();
        this.mode = "";/*
      }
      connectedCallback() {*/
        this.__tile.init(this, this.__t3, () => {
          // customize initial position
          return this.__tile.load({}, (data, opt) =>
            this.__tile.initTile(
              data,
              (ev, target, idx) => this.__t3.switchFace(target, idx),
              (ev, target) => {},
              (ev, target) => {},
              (target, data) => {
                this.__tile.placeTile(target, data);
              },
              opt
            )
          );
        });
      }
    }
  );
 }}
}
    importModules(
      "./tileUtil.ljs.js",
      "https://codepen.io/alytile/pen/dyRZgga.js",
      (mti) => {
        importModules(
          "./t3Util.ljs.js",
          "https://codepen.io/alytile/pen/xxrPQob.js",
          (mt3) => {
            importModules(
              "./tapspace.ljs.min.js",
              "https://codepen.io/alytile/pen/xxxx.js",
              (mtp) => {
                gridPuzzle().define(mti.tileUtil(), mt3.t3Util(),mtp.tapspace());             
             });
         });
    });

    function importModules(first, second, callback) {
      let ret = null;
      _import(first)
        .then((module) => {
          callback(module);
        })
        .catch((e) => {
          _import(second)
            .then((module) => {
              callback(module);
            })
            .catch((e) => {
              console.log(e);
            });
        });
    }
   function _import(url) {
     return {
       then: (successCallback) => {
         let div = document.createElement("div");
         let script = document.createElement("script");
         script.setAttribute("src", url);
         script.addEventListener("load",()=>{    
           let j = JSON.parse(script.getAttribute("x-module"));
           for (let k in j) {j[k] = eval('(() =>('+j[k]+'))()')}
           successCallback(j)
         });
         return { 
           catch: (errorCallback) => {
             script.addEventListener("error", errorCallback);
             document.head.appendChild(div);
             div.appendChild(script);
           }
         }
       }
     }
   }
})();
