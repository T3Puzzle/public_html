(() => {
  customElements.define(
    "dialog-modal",
    class extends HTMLElement {
     
      static get observedAttributes ( ){
        return [
          'open','close',
        ];
      }
      attributeChangedCallback (name,oldValue,newValue){
        if (name==='open') {
          open(this, this._area);
        } else if (name==='close') {
          close(this, this._area);
        }
      }      
      constructor () {
        super();
        let html = this.querySelector("template").innerHTML;
        
        this._root = document.createElement("div");
        this._area = document.createElement("div");
        this._background = document.createElement("div");
        this._wrapper = document.createElement("div");
        this._close = document.createElement("div");

        this._area.classList.add("modalArea");
        this._background.classList.add("modalBg");
        this._wrapper.classList.add("modalWrapper");
        this._close.classList.add("closeModal");
        this._close.innerHTML = "×";

        this.insertAdjacentElement('afterend',this._root);
        
        this._root.insertAdjacentHTML("beforeend", getStyle());
        this._root.append(this._area);
        this._area.append(this._background);
        this._area.append(this._wrapper);
        this._wrapper.insertAdjacentHTML("beforeend", html);
        this._wrapper.append(this._close);

        this._close.addEventListener("click", (e) => {
          close(this, this._area);
        });
        this._background.addEventListener("click", (e) => {
          close(this, this._area);
        });
      }
    }
  );
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
  top: 0.5rem;
  font-size: 20px;
  right: 1rem;
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
