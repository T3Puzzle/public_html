// comment 'export' if no module supported
export
function setup(app,tag,output, base) {
  let BOARD = {
    shared: {
      svgStr: null,
    },
    hooks: {
      overwrite: ['build'],
    },
  };
  if (base) {
    base.exposeHook('board',BOARD);
    output.innerHTML = build();
    let svg = output.querySelector('svg');
    let width = svg.width.baseVal.value;;
    let height = svg.height.baseVal.value;
    svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
    svg.setAttribute('preserveAspectRatio','xMidYMid meet');
    svg.style.display = 'block';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style['max-width'] = `${2*width}px`;
    svg.style.height = '100%';
    app.svg = svg;
  }
  return build;

 function build () {
  if (base) {
    base.callHooks(BOARD,'build',tag);
  }
  if (!BOARD.shared.svgStr) {
    BOARD.shared.svgStr = buildBoard(tag);
  }
  return BOARD.shared.svgStr;
 }
 function buildBoard (tag) {
let svgStr =`<svg version="1.1"
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="400px"
        height="400px"
        style="background-color: #eee;">
    <circle cx="200" cy="200" r="100" style="fill:#ff0000;"></circle>
</svg>
  `;
  return svgStr;

}
}
if (typeof(process)!=='undefined') {
  console.log(setup()());
}
