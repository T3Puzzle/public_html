(() => {
  customElements.define(
    "button-text",
    class extends HTMLElement {
      constructor() {
        super();
        this.__SIZE = "100px";
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        let me = this;
        let style = document.createElement("style");
        style.innerHTML = this.__getCSS();
        this.shadowRoot.append(style);
        let a = document.createElement("a");
        a.href = "#";
        a.classList.add("button");
        this.shadowRoot.append(a);
        let block = document.createElement("div");
        block.classList.add("button");
        a.append(block);
        let text = this.getAttribute("text");
        let divs = [];
        Array.from(text).map((t) => {
          let div = document.createElement("div");
          divs.push(div);
          div.classList.add("button__text");
          div.innerText = t;
          block.append(div);
        });
        a.addEventListener("mousedown", () => {
          divs.map(d=>d.classList.add('button__text--shadow'));
        });
        a.addEventListener("mouseup", () => {
          divs.map(d=>d.classList.remove('button__text--shadow'));
        });
      }
      static get observedAttributes() {
        return ["size"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "size") {
          this.__setSize(newValue);
        }
      }
      __setSize(value) {
        // TODO: to be checked.
        this.__SIZE = value;
      }
      __getCSS() {
        return `
a.button {
  display: inline-block;
}
div.button {
  width: ${this.__SIZE};
  height: ${this.__SIZE};
  display: flex;
  align-items: center;
  justify-content: center;
}
div.button__text {
  position: absolute;
  font-size: ${this.__SIZE};  
  color: rgb(0,0,0);
  font-family: Gill Sans Extrabold, sans-serif;
  text-shadow: 1px 1px 1px #808080;
}
div.button__text--shadow {
  text-shadow: 3px 6px 9px #808080;
}
`;
      }
    }
  );
})();
