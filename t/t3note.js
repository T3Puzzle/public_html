(()=>{
let config='svgconfig';
let size = 100;
let artist = localStorage.getItem('artist');
if (!artist) {
   artist = '';
}
let url = 'https://www.t3puzzle.com';
let tw = 'https://twitter.com/t3puzzle';
let yt = 'https://www.youtube.com/watch?v=9J_gAmeo-Gk&t=16m05s';
let text = `
<a target="_blank" href="${url}">パズル購入</a> / 
<a target="_blank" href="${tw}">作品例</a> /
<a target="_blank" href="${yt}">説明動画</a>
`;
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<span class="${name}" style="word-wrap: break-word;text-decoration:none;vertical-align:0.2em;font-size:${size}%;margin-right:0.2em;">${text}</span>
`);
});
})();
