import { tapspace } from 'https://www.t3puzzle.com/n/tapspace.module.min.js?zo';
export {gridPuzzle};
function gridPuzzle () {
  return { define: define };
}
function define(tileUtil, t3Util) {
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
        this.mode = "";
      }
    }
  );
}
