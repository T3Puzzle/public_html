(() => {
  customElements.define(
    "app-browser",
    class extends HTMLElement {
      constructor() {
        super();
        this.__deck = this.querySelector("div.deck");
        // common
        this.__modal = this.querySelector("dialog-modal");
        this.__form = this.querySelector("form");
        //
        this.__grid = this.querySelector("grid-puzzle");
        let forName = this.__grid.getAttribute("for");
        this.__src = this.querySelector(forName);
        //
        this.__name = this.getAttribute("name");
        this.__storage = document.querySelector(
          "app-storage[name=" + this.__name + "]"
        );
      }
      static get observedAttributes() {
        return ["_open", "_go", "_close"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "_open") {
          open(
            () => this.__modal.setAttribute("_open", ""),
            this.__storage,
            this.__grid,
            this.__form,
            this.__src,
            this.__deck
          );
        } else if (name === "_go") {
          go(
            (v) => this.__grid.setAttribute("_load_data", v),
            this.__storage,
            this.__form,
            this.__deck,
            newValue
          );
        } else if (name === "_close") {
          close(
            () => this.__modal.setAttribute("_close", ""),
            this,
            this.__storage
          );
        }
      }
    }
  );
  function close(callback, me, storage) {
    me.value = storage.getAttribute("_data");
    let value = {
      detail: {
        value: me.value
      }
    };
    me.dispatchEvent(new CustomEvent("change", value));
    callback();
  }
  function go(callback, storage, form, deck, action) {
    [storage.setAttribute("_go", action), storage.getAttribute("_data")]
      .filter((v) => v)
      .map((v) => {
        updateDeck(deck, storage, form, v);
        callback(v);
      });
  }
  function open(callback, storage, grid, form, src, deck) {
    let v = storage.getAttribute("_data");
    grid.setAttribute("_load_data", v);
    updateDeck(deck, storage, form, v);
    callback();
  }
  function updateDeck(deck, storage, form, jsonStr) {
    let json = JSON.parse(jsonStr);
    if (json && "meta" in json) {
      ["title", "note"]
        .map((n) => ({ n, i: form.querySelector("[name=" + n + "]") }))
        .map((ni) => {
          ni.i.value = json.meta[ni.n];
        });
    }
    let min = parseInt(storage.getAttribute("min"), 10);
    let max = parseInt(storage.getAttribute("max"), 10);
    let idx = parseInt(storage.getAttribute("_index"), 10);
    if (idx !== null) {
      let base = max - min + 1;
      let now = idx - min + 1;
      deck.textContent = now + "/" + base;
    }
  }
})();
