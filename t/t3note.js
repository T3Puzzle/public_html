(()=>{
let config='svgconfig';
let size = 100;
let text = `
<button style="height:50px;">
チャットは全員宛へ<br/>xx
<a href="https://forms.gle/KGSthgPT5zvkwbVn8">アンケート</a>
</button>
`;
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<span class="${name}" style="word-wrap: break-word;text-decoration:none;vertical-align:0.2em;font-size:${size}%;margin-right:0.2em;">${text}</span>
`);
});
})();
