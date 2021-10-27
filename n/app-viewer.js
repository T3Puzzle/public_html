(()=>{

function appViewer () {
  return { define: function (messageIframe) {
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
      div.insertAdjacentHTML("beforeend",`
      <style>div.frame {
        border : "2px solid";
      }
      div.frame--selected {
        border-color : "red";
      }</style>
      `);
      div.addEventListener ("click",(e)=>{
        Array.from(document.querySelectorAll("div.frame"))
        .map(n=>n.classList.remove("frame--selected"));
        let target = e.target.closest("div"); 
        target.classList.add("frame--selected");
      });
      Array.from(this.querySelectorAll("img-meta"))
      .map(n=>{
        let parent = document.createElement("div");
        parent.classList.add("frame");
        parent.style.display = "inline-block";
        parent.style.border = "1px solid white";
        div.appendChild(parent);
        parent.appendChild(n);
      });
      if (/^\d+$/.test(this.__width)) {
        div.style.width = this.__width+"px";
      }
      this.attachShadow({mode:"open"});
      this.shadowRoot.appendChild(div);
      [document.body]
      .map(n=> {
        n.style.position = "absolute";
        n.style.padding = "0px";
        n.style.margin = "0px";
      });
    }
  });
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
 }}
}
    importModules(
      "./messageIframe.ljs.js",
      "./messageIframe.mjs.js",
      (mmi) => {
        appViewer().define(mmi.messageIframe());             
    });
    function importModules(first, second, callback) {
      let ret = null;
      _import(first)
        .then((module) => {
          callback(module);
        })
        .catch((e) => {
          _import(second)
            .then((module) => {
              callback(module);
            })
            .catch((e) => {
              console.log(e);
            });
        });
    }
  function _import(url) {
  if (window.location.protocol!=="file:" && /:mjs:/.test(window.location.search)) {
     return import(url);
  } else {
     return {
       then: (successCallback) => {
         let div = document.createElement("div");
         let script = document.createElement("script");
         script.setAttribute("src", url);
         script.addEventListener("load",()=>{
           let j = JSON.parse(script.getAttribute("x-module"));
           for (let k in j) {j[k] = eval('(() =>('+j[k]+'))()')}
           successCallback(j)
         });
         return {
           catch: (errorCallback) => {
             script.addEventListener("error", errorCallback);
             document.head.appendChild(div);
             div.appendChild(script);
           }
         }
       }
     }
  }
}
})();
