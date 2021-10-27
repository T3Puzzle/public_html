(()=>{
function imageMeta (buffer,readMetadata) {
  if (typeof customElements !== "undefined" && /^http/.test(window.location.href) ) {
    customElements.define(
      "img-meta",
      class extends HTMLElement {
        connectedCallback() {
          this.__meta = [];
          let src = this.getAttribute("src");
          getImage(this, src, (metaData) => {
            this.value = metaData;
            let img = setupImage(this,src);
            this.attachShadow({mode:'open'});
            this.shadowRoot.append(img);
            let value = {
              detail: {
                value: this.value
              }
            }
            this.dispatchEvent(new CustomEvent('load',value));
          });
          
        }
      }
    );
  } else {
    Array.from(document.querySelectorAll("img-meta")).map((i) => {
      let src = i.getAttribute("src");
      let img = setupImage(this,src);
      i.insertAdjacentElement("beforeend", img);
    });
  }    
  function setupImage (me,src) {
    let width = me.getAttribute("width") || "110";
    let height = me.getAttribute("height") || "110";
    let img = document.createElement("img");
    img.src = src;
    if (width) {
      me.setAttribute("width", width);
      img.setAttribute("width", width);
    }
    if (height) {
      me.setAttribute("height", height);
      img.setAttribute("height", height);
    }
    
    return img;
  }
  function getImage(me, src, callback) {
    const image = document.getElementById("img");
    fetch(src,{
      method: 'GET',
      mode: 'cors',
      redirect: 'follow',
    })
    .then(resp=>resp.blob())
    .then(blob=>{
       let reader = new FileReader();
       reader.readAsDataURL(blob); 
       reader.onloadend = ()=>{
         let dataurl = reader.result;
         let txt = (dataurl.split(',')[1]);
         let buf = buffer().Buffer.from(txt, 'base64');
         callback(readMetadata(buf));
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
    importModules(
      "./buffer.ljs.js","./buffer.mjs.js",
      (mbf) => {
        importModules(
          "./readMetadata.ljs.js","./readMetadata.mjs.js",
          (mrm) => {
            imageMeta(mbf.buffer, mrm.readMetadata);
        });
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
