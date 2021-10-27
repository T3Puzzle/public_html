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
      let div = docuement.createElement("div");
      [this.querySelectorAll("img-meta")]
      .map(n=>div.appendChild(n));
      div.setAttribute("width",this.__width);
      this.attachShadow({mode:"open"});
      this.shadowRoot.appendChild(div);
    }
  });
})();
