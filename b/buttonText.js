(() => {
  let me = null;
  let SIZE = '40px';
  customElements.define(
    "button-text",
    class extends HTMLElement {
      connectedCallback() {
        me = this;
        let shadow = me.attachShadow({ mode: "open" });
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
        let block = document.createElement("div");
        block.classList.add('button');
        a.append(block);
        let text = me.getAttribute("text");
        Array.from(text).map((t) => {
          let div = document.createElement("div");
          div.classList.add("button--text");
          div.classList.add("inactive");
          div.innerText = t;
          block.append(div);
        });
      }
      static get observedAttributes() {
        return ["size"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "size") {
          setSize(newValue);
        }
      }
    }
  );
  function setSize (value) {
    // TODO: to be checked.
    SIZE = value;
  }
  function toggleButton(target) {
    let isInActive = target.querySelectorAll("div.inactive").length > 0;
    let text = Array.from(target.querySelectorAll("div.button--text"));

    text.map((t) => {
      if (isInActive) {
        t.classList.remove("inactive");
      } else {
        t.classList.add("inactive");
      }
    });

    let value = { detail: { isActive: isInActive } };
    me.value = value;
    me.dispatchEvent(new CustomEvent("change", value));
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
div.button--text {
  position: absolute;
  font-size: ${SIZE};
  text-shadow:1px 2px 3px #808080;
  color: rgba(0,0,0,1);
  font-family: Gill Sans Extrabold, sans-serif;
}
div.inactive {
  color: rgba(255,255,255,0.3);
}
`;
  }
})();
