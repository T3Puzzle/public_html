(() => {
  let me = null;
  let FONTSIZE = '500%';
  customElements.define(
    "button-text",
    class extends HTMLElement {
      connectedCallback() {
        me = this;
        let shadow = me.attachShadow({ mode: "open" });
        let style = document.createElement("style");
        style.innerText = getCSS();
        shadow.append(style);
        let a = document.createElement("a");
        a.href = "#";
        a.addEventListener("click", () => {
          toggleButton(a);
        });
        shadow.append(a);
        let text = me.getAttribute("text");
        Array.from(text).map((t) => {
          let div = document.createElement("div");
          div.classList.add("icon");
          div.classList.add("inactive");
          div.innerText = t;
          a.append(div);
        });
      }
      static get observedAttributes() {
        return ["size"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "size") {
          setFontSize(newValue);
        }
      }
    }
  );
  function setFontSize (value) {
    // TODO: to be checked.
    FONTSIZE = value;
  }
  function toggleButton(target) {
    let isInActive = target.querySelectorAll("div.inactive").length > 0;
    let icons = Array.from(target.querySelectorAll("div.icon"));

    icons.map((i) => {
      if (isInActive) {
        i.classList.remove("inactive");
      } else {
        i.classList.add("inactive");
      }
    });

    let value = { detail: { isActive: isInActive } };
    me.value = value;
    me.dispatchEvent(new CustomEvent("change", value));
  }
  function getCSS() {
    return `
div.icon {
  position: absolute;
  font-size: ${FONTSIZE};
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
