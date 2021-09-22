(() => {
  customElements.define(
    "pallete-text",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.__VALUES = [];
        this.__TEXTS = [];
        this.__TEXT__DEFAULT = "●";
        this.__TEXT__SIZE = "40px";
        this.__MARGIN__TOP = "-33px";
        this.__MARGIN__LEFT = "0px";
        this.__LAST__VALUE = "";
      }
      static get observedAttributes() {
        return ["size", "margin-top", "margin-left"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (!newValue) {
          return;
        }
        if (name === "size") {
          this.__TEXT__SIZE = newValue;
        } else if (name === "margin-top") {
          this.__MARGIN__TOP = newValue;
        } else if (name === "margin-left") {
          this.__MARGIN__LEFT = newValue;
        } else if (name === "value") {
          this.setValue(newValue);
        }
      }
      connectedCallback() {
        let style = document.createElement("style");
        style.textContent = this.getCSS();
        this.shadowRoot.append(style);
        this.process();
      }
      setValue(v) {
        let form = this.shadowRoot.querySelector("form");
        Array.from(this.shadowRoot.querySelectorAll("input")).map((r) => {
          r.checked = false;
        });
        if (v.length) {
          let radio = this.shadowRoot.querySelector("input#" + v);
          if (radio) {
            radio.checked = true;
          }
        }
        this.updateLabel(form);
      }
      process() {
        this.getDataText();
        this.buildFormRadios();
      }
      buildFormRadios() {
        let form = document.createElement("form");
        this.__VALUES.forEach((v, idx) => {
          if (v.trim().length === 0) {
            let p = document.createElement("p");
            form.append(p);
            return;
          }
          let radio = document.createElement("input");
          radio.name = "pallete";
          radio.type = "radio";
          radio.value = v;
          radio.id = v;
          radio.addEventListener("click", (e) => {
            let v = e.path[0].value;
            if (v === this.__LAST__VALUE) {
              let emptyValue = '';
              this.setValue(emptyValue);
              this.__LAST__VALUE = emptyValue;
            } else {
              this.__LAST__VALUE = v;
            }
          });
          let label = document.createElement("label");
          label.setAttribute("for", v);
          label.classList.add("label");
          label.textContent = this.__TEXTS[idx];
          form.append(label);
          form.append(radio);
        });
        form.addEventListener("change", ()=>this.updateLabel(form));
        this.shadowRoot.append(form);
      }
      updateLabel(form) {
        Array.from(form.querySelectorAll("label")).map((f) => {
          f.classList.remove("checked");
        });
        let color = new FormData(form).get("pallete");
        let forName = "label[for=" + color + "]";
        let label = form.querySelector(forName);
        if (label) {
          label.classList.add("checked");
        }
        let value = { detail: { color: color } };
        this.value = color;
        this.dispatchEvent(new CustomEvent("change", value));
      }
      getDataText() {
        let datalist = this.querySelector("datalist");
        Array.from(datalist.querySelectorAll("option")).map((o) => {
          this.__VALUES.push(o.value);
          let text = o.innerHTML;
          if (text.trim().length === 0) {
            text = this.__TEXT__DEFAULT;
          }
          this.__TEXTS.push(text);
        });
      }
      getCSS() {
        return `
      
input[type=radio][name=pallete]{
  display: none; 
}
label.label {
  margin-left: ${this.__MARGIN__LEFT}; /* space between colors*/
  cursor: pointer; 
  font-size: ${this.__TEXT__SIZE};
  width: ${this.__TEXT__SIZE};
  height: ${this.__TEXT__SIZE};
  text-shadow: 1px 1px 1px #808080;
}
label.checked {
  text-shadow: 3px 6px 9px #808080;
}
label[for=blue] {
  color: rgba(68,162,225,1); 
}
label[for=green]{
  color: rgba(54,210,102,1);
}
label[for=pink] {
  color: rgba(255,122,190,1);
}
label[for=mint] {
  color: rgba(100,225,230,1);
}
form {
  display: inline-block;
}
p {
  margin-top:${this.__MARGIN__TOP};
}
  `;
      }
    }
  );
})();
