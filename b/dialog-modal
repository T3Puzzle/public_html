(() => {
  customElements.define(
    "dialog-modal",
    class extends HTMLElement {
     
      static get observedAttributes ( ){
        return [
          'open','close'
        ];
      }
      attributeChangedCallback (name,oldValue,newValue){
        if (name==='open') {
          open(this._area);
        } else if (name==='open') {
          close(this._area);
        }
      }
      connectedCallback () {
        let html = this.querySelector("template").innerHTML;
        let shadowRoot = this.attachShadow({ mode: "open" });
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

        shadowRoot.append(this._root);
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
  width: 220px;
  height: 90%;
  max-height: 500px;
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
      bodyScrollPrevent(true);
    }
  }
  function close(modalArea) {
    if (modalArea.classList.contains("is-show")) {
      modalArea.classList.remove("is-show");
      bodyScrollPrevent(false, modalArea);
    }
  }
  function bodyScrollPrevent(flag, modal) {
    let scrollPosition;
    const body = document.getElementsByTagName("body")[0];
    const ua = window.navigator.userAgent.toLowerCase();
    const isiOS =
      ua.indexOf("iphone") > -1 ||
      ua.indexOf("ipad") > -1 ||
      (ua.indexOf("macintosh") > -1 && "ontouchend" in document);
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    if (flag) {
      body.style.paddingRight = scrollBarWidth + "px";
      if (isiOS) {
        scrollPosition = -window.pageYOffset;
        body.style.position = "fixed";
        body.style.width = "100%";
        body.style.top = scrollPosition + "px";
      } else {
        body.style.overflow = "hidden";
      }
    } else if (!flag) {
      addEventListenerOnce(modal, "transitionend", function () {
        body.style.paddingRight = "";
        if (isiOS) {
          scrollPosition = parseInt(body.style.top.replace(/[^0-9]/g, ""));
          body.style.position = "";
          body.style.width = "";
          body.style.top = "";
          window.scrollTo(0, scrollPosition);
        } else {
          body.style.overflow = "";
        }
      });
    }
    function addEventListenerOnce(node, event, callback) {
      const handler = function (e) {
        callback.call(this, e);
        node.removeEventListener(event, handler);
      };
      node.addEventListener(event, handler);
    }
  }
})();
