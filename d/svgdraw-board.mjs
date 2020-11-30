// comment 'export' if no module supported
export
function setup(app,tag,output, base ) {
return build;

function build (param) {
let svgStr =`<svg version="1.1"
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="400px"
        height="400px"
        style="background-color: #eee;">
    <circle cx="200" cy="200" r="100" fill="#ff0000"></circle>
</svg>
  `;
  return svgStr;

}
}
if (typeof(process)!=='undefined') {
  console.log(__svgdraw_data());
}
