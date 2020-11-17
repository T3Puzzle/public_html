(()=>{
let config='svgconfig';
let size = 80;
let text = `
チャットは全員宛へ / 
<a href="https://forms.gle/KGSthgPT5zvkwbVn8">アンケート</a>
`;
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<span class="${name}" style="word-wrap: break-word;text-decoration:none;vertical-align:0.2em;font-size:${size}%;margin-right:0.5em;">${text}</span>
`);
});
})();
