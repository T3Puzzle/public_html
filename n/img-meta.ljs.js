(()=>{
function imageMeta (buffer,readMetadata) {
  if (typeof customElements !== "undefined" && /^http/.test(window.location.href) ) {
    customElements.define(
      "img-meta",
      class extends HTMLElement {
        connectedCallback() {
          this.__meta = [];
          let src = this.getAttribute("src");
          let width = this.getAttribute("width");
          let height = this.getAttribute("height");
          getImage(this, src, (metaData) => {
            this.value = metaData;
            let img = document.createElement("img");
            img.src = src;
            if (width) {
              img.widht = width;
            }
            if (height) {
              img.height = height;
            }
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
      let width = this.getAttribute("width");
      let height = this.getAttribute("height");
      let img = document.createElement("img");
      img.src = src;
      if (width) {
        img.width = width;
      }
      if (height) {
        img.height = height;
      }
      i.insertAdjacentElement("beforeend", img);
    });
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
         let buf = buffer.Buffer.from(txt, 'base64');
         callback(readMetadata(buf));
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
return _export ({imageMeta});  
function _export(j){document.currentScript.setAttribute("x-module",JSON.stringify(j,(k,v)=>(typeof v==="function")?v.toString():v))}})();
