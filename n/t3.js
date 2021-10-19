import { tapspace } from 'https://www.t3puzzle.com/n/tapspace.module.min.js?zo';
export {t3};
function t3 () {
  return { define: define };
}
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
          "zoom",
          "loaddata",
          "nomoveall",
          "noflipall"
        ];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "color") {
          this.puz.setNowColor(newValue);
        } else if (name === "mode") {
          this.util.changeMode(oldValue, newValue);
          this.mode = newValue;
        } else if (name === "flipall") {
          this.util.flipAll();
        } else if (name === "fit") {
          this.util.fit();
        } else if (name === "rotate") {
          this.util.rotate(newValue);
         } else if (name === "zoom") {
          this.util.zoom(newValue);
        } else if (name === "loaddata") {
          this.util.resetAndloadData(newValue);
        } else if (name === "nomoveall") {
          this.util.noMoveAll(newValue);
        } else if (name === "noflipall") {
          this.util.noFlipAll(newValue);
        }
      }
      constructor() {
        super();
        this.util = util();
        this.puz = puz();
        this.mode = "";/*
      }
      connectedCallback() {*/
        this.util.init(this, this.puz, () => {
          // customize initial position
          return this.util.load({}, (data, opt) =>
            this.util.initTile(
              data,
              (ev, target, idx) => this.puz.switchFace(target, idx),
              (ev, target) => {},
              (ev, target) => {},
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
