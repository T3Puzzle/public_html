(()=>{
let config='svgconfig';
let svgoutput='svgoutput';
let me=document.currentScript;
let name='svginput';
let x=30;
let y=Math.sqrt(3)*x;
me.insertAdjacentHTML('afterend',`<output class="${name}"></output>`);
document.addEventListener('DOMContentLoaded',()=>{
  let configoptions = document.body.querySelectorAll(`output.${config} select option`);
  if (configoptions.length>0) {
    return;
  }
  let col=5;
  document.body.querySelector(`output.${svgoutput}`).insertAdjacentHTML('beforeend',`
<svg    version="1.1"
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="400px"
        height="400px"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        style="top:0;left:0;width:100%;max-width:800px;height:100%;background-color: #eee;">
 <g transform="translate(-150,0)scale(0.5,0.5)">
    ${tess()}
 </g>
</svg>
`)});
function tess() {
  let col=0;
  let array=[];
  for (let i=0;i<10;i++) {
    for (let j=0;j<4;j++) {
      array.push(`<g id="a${i}_${j}" transform="translate(${4*x*i},${4*y*j})">${puz(col)}</g>`);
      array.push(`<g id="b${i}_${j}" transform="translate(${4*x*i+2*x},${4*y*j+2*y})rotate(180)">${puz(col)}</g>`);
      array.push(`<g id="c${i}_${j}" transform="translate(${4*x*i+2*x},${4*y*j+2*y})">${puz(col)}</g>`);
      array.push(`<g id="d${i}_${j}" transform="translate(${4*x*i},${4*y*j+4*y})rotate(180)">${puz(col)}</g>`);
    }
  }
  return array.join('');
}
function puz(col) {
  return `
     <g transform="translate(${-2*x},0)">
      <polygon name="p3" points="0,0 ${4*x},0 ${2*x},${2*y}" style="fill:${getCol(false,(col/4<1))};stroke:#aaaaaa;stroke-width:1.5;stroke-linejoin:round;"/></g>
     <g transform="translate(0,0)">
      <polygon name="p0" points="0,0 ${2*x},0 ${x},${y}" style="fill:${getCol((col%4===0),(col/4<1))};stroke:none;"/></g>
     <g transform="translate(${-2*x},0)">
      <polygon name="p1" points="0,0 ${2*x},0 ${x},${y}" style="fill:${getCol((col%4===1),(col/4<1))};stroke:none;"/></g>
     <g transform="translate(${-x},${y})">
      <polygon name="p2" points="0,0 ${2*x},0 ${x},${y}" style="fill:${getCol((col%4===2),(col/4<1))};stroke:none;"/></g>
`;
}
function getCol(col,toggle) {
  return '#dddddd';
}
})();
