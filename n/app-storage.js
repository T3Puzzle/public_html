(() => {
  customElements.define(
    "app-storage",
    class extends HTMLElement {
      constructor() {
        super();
        this.__name = this.getAttribute("name");
        this.__type = this.getAttribute("type");
        this.__data = this.__name + "__DATA__";
        this.__map = {
          age: this.__type + "__INFO--AGE",
          artist: this.__type + "__INFO--ARTIST",
          debug: this.__name + "__DEBUG",
          last_modified: this.__data + "LASTMODIFIED",
          max: this.__name + "__MAX",
          meta: this.__name + "__META__LASTLOADED",
          min: this.__name + "__MIN"
        };
      }
      static get observedAttributes() {
        return [
          "_index",
          "_clear",
          "age",
          "artist",
          "last_modified",
          "max",
          "min"
        ];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name in this.__map) {
          localStorage.setItem(name, newValue);
        } else if (name === "_clear") {
          // TODO:
        } else if (name === "_index") {
          this.setAttribute(
            "_data",
            localStorage.getItem(this.__data + newValue)
          );
        } else if (name === "_data") {
          let index = this.getAttribute("_index");
          localStorage.setItem(this.__data + index, newValue);
        }
      }
      connectedCallback() {
        Object.keys(this.__map)
          .map((k) => ({ k: k, v: localStorage.getItem(this.__map[k]) }))
          .filter((d) => d.v)
          .map((d) => this.setAttribute(d.k, d.v));

        let artist = this.getAttribute("artist");
        if (!artist) {
          this.setAttribute("artist", Math.random().toString(32).substring(2));
        }
        let presetlist = this.querySelector("datalist");
        let base = this.getAttribute("base");
        if (presetlist) {
          presetlist.querySelectorAll("option").forEach((o, i) => {
            let index = -1 - i;
            let url = o.value;
            // TODO: support zip archive as base value
            if (base && !/^http/.test(url)) {
              url = base + url;
            }
            fetch(url)
              .then((r) => r.text())
              .then((data) => {
                localStorage.setItem(this.__data + index, data);
              });
          });
        }
      }
    }
  );
})();
