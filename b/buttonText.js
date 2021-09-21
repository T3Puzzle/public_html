(() => {
  let me = null;
  let shadow = null;
  let SIZE = '40px';
  let COLOR = 'rgb(180,0,0)';
  customElements.define(
    "button-text",
    class extends HTMLElement {
      connectedCallback () {     
        me = this;
        shadow = me.attachShadow({ mode: "open" });
        let style = document.createElement("style");
        style.innerHTML = getCSS();
        shadow.append(style);
        let a = document.createElement("a");
        a.href = "#";
        a.classList.add('button');
        a.addEventListener("click", () => {
          toggleButton(a);
        });
        shadow.append(a);      
        let block = document.createElement('div');
        block.classList.add('button');
        a.append(block);
        let text = me.getAttribute("text");
        Array.from(text).map((t) => {
          let div = document.createElement('div');
          div.classList.add('button__text');
          //div.classList.add('button__text--disabled');
          div.innerText = t;
          block.append(div);
        });
      }
      static get observedAttributes() {
        return ['size','disabled','checked','color'];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'size') {
          setSize(newValue);
        } else if (name === 'color') {
          setColor(newValue);
        } else if (name === 'disabled') {
          disable(newValue);
        } else if (name === 'checked') {
          check(newValue);
        }
      }
    }
  );
  function check (value) {
    if(isDisabled()){
      return;
    }
    let texts = shadow.querySelectorAll('div.button__text');
    Array.from(texts).map(
      text=>{
      if (value.trim().toLowerCase()==='checked') {
        text.classList.add('button__text--checked');
      } else {
        text.classList.remove('button__text--checked');
      }
    });
  }
  function disable (value) {
    let texts = shadow.querySelectorAll('div.button__text');
    Array.from(texts).map(
      text=>{
      if (value.trim().toLowerCase()==='disabled') {
        text.classList.add('button__text--disabled');
      } else {
        text.classList.remove('button__text--disabled');
      }
    });
  }
  function setColor (value) {
    // TODO: to be checked.
    COLOR = value;
  }
  function setSize (value) {
    // TODO: to be checked.
    SIZE = value;
  }
  function isDisabled (){
    return shadow.querySelectorAll("div.button__text--disabled").length > 0;
  }
  function toggleButton(target) {
    if(isDisabled()){
      return;
    }
    let isInActive = target.querySelectorAll("div.button__text--checked").length > 0;
    let text = Array.from(target.querySelectorAll("div.button__text"));

    text.map((t) => {
      if (isInActive) {
        t.classList.remove('button__text--checked');
      } else {
        t.classList.add('button__text--checked');
      }
    });

    let value = { detail: { isActive: isInActive } };
    me.value = value;
    me.dispatchEvent(new CustomEvent('change', value));
  }
  function getCSS() {
    return `
a.button {
  display: inline-block;
}
div.button {
  width: ${SIZE};
  height: ${SIZE};
  display: flex;
  align-items: center;
  justify-content: center;
}
div.button__text {
  position: absolute;
  font-size: ${SIZE};
  
  opacity: 1;
  color: rgb(0,0,0);
  font-family: Gill Sans Extrabold, sans-serif;
}
div.button__text--checked {
  color:transparent; text-shadow: 0 0 0 ${COLOR};
}
div.button__text--disabled {
  opacity: 0.2;
}
`;
  }
})();
