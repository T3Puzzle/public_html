(() => {
  customElements.define(
    "dialog-modal",
    class extends HTMLElement {
     
      static get observedAttributes ( ){
        return [
          'open','close','width','height'
        ];
      }
      attributeChangedCallback (name,oldValue,newValue){
        if (name==='open') {
          open(this._area);
        } else if (name==='close') {
          close(this._area);
        } else if (name==='width') {
          this.setWidth(newValue);
        } else if (name==='height') {
          this.setHeight(newValue);
        }
      }      
      setWidth (newValue) {
        if (newValue){
          this._wrapper.style['width'] = newValue;
        }
      }
      setHeight (newValue) {
        if (newValue){
          this._wrapper.style['height'] = newValue;
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
        
        this.WIDTH = '200px';
        let width = this.getAttribute('width');
        if (width) {
          this.WIDTH = width;
        }
        this.HEIGHT = '600px';
        let height = this.getAttribute('height');
        if (height) {
          this.HEIGHT = height;
        }
        this._root.insertAdjacentHTML("beforeend", getStyle());
        this._root.append(this._area);
        this._area.append(this._background);
        this._area.append(this._wrapper);
        this._wrapper.insertAdjacentHTML("beforeend", html);
        this._wrapper.append(this._close);

        this._close.addEventListener("click", (e) => {
          close(this._area);
        });
        this._background.addEventListener("click", (e) => {
          close(this._area);
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
  width: ${this.WIDTH};
  height: ${this.HEIGHT};
  padding: 10px 30px;
  background-color: #fff;
  overflow: auto;
}

.closeModal {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
}

.is-show {
  visibility: visible;
  opacity : 1;
}
    </style>`;
  }
  function open(modalArea) {
    if (!modalArea.classList.contains("is-show")) {
      modalArea.classList.add("is-show");
    }
  }
  function close(modalArea) {
    if (modalArea.classList.contains("is-show")) {
      modalArea.classList.remove("is-show");
    }
  }
})();
