(()=>{
  customElements.define("app-viewer",class extends HTMLElement {
    static get obserbedAttributes () {
      return ["width"];
    }
    attributeChangedCallback(name,oldValue,newValue) {
    }
    constructor () {
      super();
      this.__width = this.getAttribute("width");
      let div = document.createElement("div");
      Array.from(this.querySelectorAll("img-meta"))
      .map(n=>div.appendChild(n));
      if (/^\d+$/.test(this.__width)) {
        div.style.width = this.__width+"px";
      }
      this.attachShadow({mode:"open"});
      this.shadowRoot.appendChild(div);
    }
  });
})();
