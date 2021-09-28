
(() => {
  customElements.define(
    "switch-text",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.__INDEX = 0;
        this.__VALUE = '';
        this.__TEXT__DEFAULT = '●';
        this.__SIZE = '100px';
        this.__LENGTH = this.querySelectorAll('option').length;
        this.__VALUES = [];
        Array.from(this.querySelectorAll("option")).forEach((o, idx) => {
            this.__VALUES.push(o.value);
        });
      }
      static get observedAttributes() {
        return ['value', 'size'];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') {
          this.__VALUE = newValue;
          this.__INDEX = this.__VALUES.indexOf(newValue);
          if (oldValue!==null) {
            this.update();
          }
        } else if (name === 'size') {
          this.__SIZE = newValue;
        } else if (name === 'next') {
          this.next();
          if (oldValue!==null) {
            this.update();
          }
        }
      }
      next () {
        this.__INDEX = (this.__INDEX + 1) % this.__LENGTH;
      }
      update () {
        Array.from(this.shadowRoot.querySelectorAll('a')).forEach((a,idx)=>{
          if (idx === this.__INDEX) {
            a.style['display']='inline-block';
          } else {
            a.style['display']='none';
          }
          this.__VALUE = this.__VALUES[this.__INDEX];
        });
        this.value = this.__VALUE;
        let value = {
          detail: {
            value: this.value
          }
        } 
        this.dispatchEvent(new CustomEvent('change',value))
      
      }
      connectedCallback() {
        let style = document.createElement("style");
        style.textContent = getStaticCSS();
        this.shadowRoot.append(style);
        let div = document.createElement("div");
        div.style["display"] = "inline-block";
        this.shadowRoot.append(div);
        Array.from(this.querySelectorAll("option")).forEach((o, idx) => {
          div.insertAdjacentHTML("beforeend", getStaticHTML());
          let item = div.lastElementChild;
          let value = o.value;
          let text = o.textContent;
          if (!text){
            text = this.__TEXT__DEFAULT;
          }
          Array.from(text).map((t) => {
            let divButton = item.querySelector("div.button");
            divButton.style["width"] = this.__SIZE;
            divButton.style["height"] = this.__SIZE;
            let divButtonText = item.querySelector("div.button__text");
            divButtonText.style["font-size"] = this.__SIZE;
            if (
              value === "blue" ||
              value === "green" ||
              value === "pink" ||
              value === "mint"
            ) {
              divButtonText.classList.add("color--" + value);
            }
            divButtonText.textContent = t;
          });
        });
        this.update();
        div.addEventListener("click", () => {
          this.next();
          this.update();
        });
      }
    }
  );

  function getStaticHTML() {
    return `
      <a href="#" class="button">
      <div class="button">
      <div class="button__text"></div>
      </div>
      </a>
      `;
  }
  function getStaticCSS() {
    return `
div.color--blue {
  color: rgba(68,162,225,1); 
}
div.color--green {
  color: rgba(54,210,102,1);
}
div.color--pink {
  color: rgba(255,122,190,1);
}
div.color--mint {
  color: rgba(100,225,230,1);
}
a.button {
  display: inline-block;
}
div.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
div.button__text {
  position: absolute; 
  text-shadow: black 1px 1px 2px;
  font-family: Apple Color Emoji' 'Android Emoji' 'Segoe UI Emoji' 'Segoe UI Symbol' 'Noto Color Emoji' 'Noto Sans Emoji' 'Noto Sans Symbols' 'Noto Emoji' 'Gecko Emoji';
}
`;
  }
})();
