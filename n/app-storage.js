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
          _last_modified: this.__data + "LASTMODIFIED",
          age: this.__type + "__INFO--AGE",
          artist: this.__type + "__INFO--ARTIST",
          debug: this.__name + "__DEBUG",
          max: this.__name + "__MAX",
          min: this.__name + "__MIN"
        };
      }
      static get observedAttributes() {
        return [
          "_index",
          "_append",
          "_go",
          "_clear",
          "_data",
          "_last_modified",
          "age",
          "artist",
          "debug",
          "max",
          "min"
        ];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        let indexStr = this.getAttribute("_index");
        if (name === "_clear") {
          // TODO:
        } else if (name === "_last_modified") {
          this.setAttribute(
            "_previously_modified",
            localStorage.getItem(this.__map[name])
          );
          localStorage.setItem(this.__map[name], newValue);
        } else if (name === "_append") {
          let maxStr = this.getAttribute("max");
          let max = -1;
          if (maxStr) {
            max = parseInt(maxStr, 10) + 1;
          }
          this.setAttribute("max", max);
          this.setAttribute("_index", max);
          this.setAttribute("_data", newValue);
        } else if (name === "_go") {
          let maxStr = this.getAttribute("max");
          let minStr = this.getAttribute("min");
          if (newValue === "_next") {
            indexStr = findDataIndex(
              this,
              newValue,
              indexStr,
              true,
              minStr,
              maxStr
            );
          } else if (newValue === "_back") {
            indexStr = findDataIndex(
              this,
              newValue,
              indexStr,
              false,
              minStr,
              maxStr
            );
          } else if (newValue === "_min") {
            indexStr = findDataIndex(
              this,
              newValue,
              minStr,
              true,
              minStr,
              maxStr
            );
          } else if (newValue === "_max") {
            indexStr = findDataIndex(
              this,
              newValue,
              maxStr,
              false,
              minStr,
              maxStr
            );
          }
          this.setAttribute("_index", indexStr);
        } else if (name === "_index") {
          this.setAttribute(
            "_data",
            localStorage.getItem(this.__data + indexStr)
          );
        } else if (name === "_data") {
          localStorage.setItem(this.__data + indexStr, newValue);
        } else if (name in this.__map) {
          localStorage.setItem(this.__map[name], newValue);
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
        let _init = this.getAttribute("_init");
        let last = localStorage.getItem(this.__map["_last_modified"]);
        let presetlist = this.querySelector("datalist");
        let base = this.getAttribute("base");
        let max = null;
        let min = 0;
        if (presetlist) {
          presetlist.querySelectorAll("option").forEach((o, i) => {
            let index = -1 - i;
            if (min > index) {
              min = index;
            }
            let url = o.value;
            // TODO: support zip archive as base value
            if (base && !/^http/.test(url)) {
              url = base + url;
            }
            fetch(url)
              .then((r) => r.text())
              .then((data) => {
                localStorage.setItem(this.__data + index, data);
                if (!last && _init === o.value) {
                  dispatchLoadEvent(this,data);
                }
              });
          });
        }
        this.setAttribute("min", min);
        max = this.getAttribute("max");
        if (max === null) {
          this.setAttribute("max", -1);
        }
        this.setAttribute("_index", this.getAttribute("max"));
        //
        if (last) {
          dispatchLoadEvent(this,last);
        }
      }
    }
  );
  function dispatchLoadEvent(me,v) {
    let e = {
      detail: {
        value: v
      }
    };
    me.value = v;
    me.dispatchEvent(new CustomEvent("load", e));
  }

  function findDataIndex(me, action, indexStr, direct, minStr, maxStr) {
    if (!minStr || !maxStr) {
      return;
    }
    let index = parseInt(indexStr, 10);
    let max = parseInt(maxStr, 10);
    let min = parseInt(minStr, 10);
    if (max < min) {
      return;
    }
    if (action !== "_min" && action !== "_max") {
      if (direct) {
        index += 1;
      } else {
        index -= 1;
      }
    }
    let str = null;
    while (min <= index && index <= max) {
      me.setAttribute("_index", index);
      str = me.getAttribute("_data");
      if (str) {
        break;
      }
      if (direct) {
        index++;
      } else {
        index--;
      }
    }
    if (str === null) {
      if (direct) {
        index -= 1;
      } else {
        index += 1;
      }
    }
    return index.toString();
  }
})();
