(()=>{
  customElements.define("app-viewer",class extends HTMLElement {
    static get obserbedAttributes () {
      return ["width","_append","_get_data"];
    }
    attributeChangedCallback(name,oldValue,newValue) {
      let me = this.shadowRoot;
      if (name==="width") {
        setWidth(me,newValue);
      } else if (name==="_append") {
        append(me,newValue);
      } else if (name==="_get_data") {
        getData(me);
      }
    }
    constructor () {
      super();
      this.__width = this.getAttribute("width");
      let div = document.createElement("div");
      [document.body, div]
      .map(n=> {
        n.style.position = "absolute";
        n.style.padding = "0px";
        n.style.margin = "0px";
      });
      Array.from(this.querySelectorAll("img-meta"))
      .map(n=>div.appendChild(n));
      if (/^\d+$/.test(this.__width)) {
        div.style.width = this.__width+"px";
      }
      this.attachShadow({mode:"open"});
      this.shadowRoot.appendChild(div);
    }
  });
  function setupImage (img) {
    img.addEventListener ("click",(e)=>{
      let target = e.target;
      target.style["border-width"] = "1px";
      target.style["border-color"] = "red";
    });
  }
  function setWidth (me,val) {
    let width = null;
    if (/^\d+$/.test(val)) {
      width = val+"px";
    } else if (/^\d+px$/.test(val)) {
      width = val;
    }
    if (width) {
      me.querySelector("div").style.width = width;
    }
  }
  function append (me, val) {
    // TODO: what is val anyway?
  }
  function getData (me) {
    
  }
})();
