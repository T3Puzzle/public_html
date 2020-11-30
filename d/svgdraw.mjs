import {runApp} from './svgdraw-app.mjs';

class SvgdrawApp extends HTMLElement {
  connectedCallback() {
    runApp(this);
  }
}
customElements.define('svgdraw-app',SvgdrawApp);
