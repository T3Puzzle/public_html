
(() => {
  customElements.define(
    "dialog-modal",
    class extends HTMLElement {
     
      static get observedAttributes ( ){
        return [
          '_open','_close',
        ];
      }
      attributeChangedCallback (name,oldValue,newValue){
        if (name==='_open') {
          open(this, this._area);
        } else if (name==='_close') {
          close(this, this._area);
        }
      }      
      constructor () {
        super();
        this.__iframe  = this.querySelector("iframe");
        if (this.__iframe) {
          let me = this;
          let iframe = this.__iframe;
          iframe.addEventListener("load",()={
            setup(me,iframe.contentWindow.document.body.innerHTML);  
          });
        }
      }
      connectedCallback () {
        if (!this.__iframe) {
          let html = this.querySelector("template").innerHTML;
          setup(this,html);
        }
      }
    }
  );
  function setup(me, html) {
        me._root = document.createElement("div");
        me._area = document.createElement("div");
        me._background = document.createElement("div");
        me._wrapper = document.createElement("div");
        me._close = document.createElement("div");

        me._area.classList.add("modalArea");
        me._background.classList.add("modalBg");
        me._wrapper.classList.add("modalWrapper");
        me._close.classList.add("closeModal");
        me._close.innerHTML = "×";

        me.insertAdjacentElement('afterend',me._root);
        
        me._root.insertAdjacentHTML("beforeend", getStyle());
        me._root.append(me._area);
        me._area.append(me._background);
        me._area.append(me._wrapper);
        me._wrapper.insertAdjacentHTML("beforeend", html);
        me._wrapper.append(me._close);

        me._close.addEventListener("click", (e) => {
          close(me, me._area);
        });
        me._background.addEventListener("click", (e) => {
          close(me, me._area);
        });
      }

  function getStyle() {
    return `<style>
.modalArea {
  visibility: hidden;
  opacity : 0;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: .4s;
}

.modalBg {
  width: 100%;
  height: 100%;
  background-color: rgba(30,30,30,0.9);
}

.modalWrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  padding: 10px 10px;
  background-color: #fff;
  overflow: auto;
}

.closeModal {
  position: absolute;
  top: 0.2rem;
  right: 0.7rem;
  font-size: 25px;
  font-weight: bold;
  color: red;
  cursor: pointer;
}

.is-show {
  visibility: visible;
  opacity : 1;
}
    </style>`;
  }
  function open(me, modalArea) {
    if (!modalArea.classList.contains("is-show")) {
      modalArea.classList.add("is-show");
      changeEvent (me,'open');
    }
  }
  function close(me, modalArea) {
    if (modalArea.classList.contains("is-show")) {
      modalArea.classList.remove("is-show");
      changeEvent (me,'close');
    }
  }
  function changeEvent (me,v) {
      let value = {
        detail: {
          value: v
        }
      };
      me.value = v;
      me.dispatchEvent(new CustomEvent("change", value));    
  }
})();
