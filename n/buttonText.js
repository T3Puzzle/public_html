(() => {
  customElements.define(
    "button-text",
    class extends HTMLElement {
      constructor() {
        super();
        this.__SIZE = "100px";
        this.__COLOR = "rgb(180,0,0)";
        this.__CHECKED = false;
        this.__DISABLED = false;
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        let style = document.createElement("style");
        style.innerHTML = this.__getCSS();
        this.shadowRoot.append(style);
        let a = document.createElement("a");
        a.href = "#";
        a.classList.add("button");
        a.addEventListener("click", () => {
          this.__toggleButton(a);
        });
        this.shadowRoot.append(a);
        let block = document.createElement("div");
        block.classList.add("button");
        a.append(block);
        let text = this.getAttribute("text");
        Array.from(text).map((t) => {
          let div = document.createElement("div");
          div.classList.add("button__text");
          div.innerText = t;
          block.append(div);
        });
        this.__disable(this.__DISABLED);
        this.__check(this.__CHECKED);
      }
      static get observedAttributes() {
        return ["size", "disabled", "checked", "color"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "size") {
          this.__setSize(newValue);
        } else if (name === "color") {
          this.__setColor(newValue);
        } else if (name === "disabled") {
          this.__DISABLED = !(newValue===null);
          this.__disable(this.__DISABLED);
        } else if (name === "checked") {
          this.__CHECKED = !(newValue===null);
          this.__check(this.__CHECKED);
        }
      }
      __check(value) {
        if (this.__DISABLED) {
          return;
        }
        this.__CHECKED = value;
        let texts = this.shadowRoot.querySelectorAll("div.button__text");
        Array.from(texts).map((text) => {
          if (this.__CHECKED) {
            text.classList.add("button__text--checked");
          } else {
            text.classList.remove("button__text--checked");
          }
        });
      }
      __disable(value) {
        this.__DISABLED = value;
        let texts = this.shadowRoot.querySelectorAll("div.button__text");
        Array.from(texts).map((text) => {
          if (this.__DISABLED) {
            text.classList.add("button__text--disabled");
          } else {
            text.classList.remove("button__text--disabled");
          }
        });
      }
      __setColor(value) {
        // TODO: to be checked.
        this.__COLOR = value;
      }
      __setSize(value) {
        // TODO: to be checked.
        this.__SIZE = value;
      }
      __toggleButton(target) {
        if (this.__DISABLED) {
          return;
        }
        this.__CHECKED = !this.__CHECKED;
        if (this.__CHECKED) {
          this.setAttribute('checked','checked');
        } else {
          this.removeAttribute('checked');
        }
        let value = { detail: { checked: this.__CHECKED } };
        this.value = this.__CHECKED;
        this.dispatchEvent(new CustomEvent("change", value));
      }
      __getCSS() {
        return `
a.button {
  display: inline-block;
}
div.button__text--disabled {
  opacity: 0.2;
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
  color:transparent; text-shadow: 0 0 0 rgb(90,90,90);
}
div.button__text--checked {
  color:transparent; text-shadow: 0 0 0 ${this.__COLOR};
}
`;
      }
    }
  );
})();
