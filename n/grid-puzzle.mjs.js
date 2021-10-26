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
export {gridPuzzle};
//return _export ({gridPuzzle});  
//function _export(j){document.currentScript.setAttribute("x-module",(()=>{for(let k in j){j[k]=j[k].toString()};return JSON.stringify(j)})())}
})();
