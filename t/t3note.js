(()=>{
let config='svgconfig';
let size = 150;
let artist = localStorage.getItem('artist');
if (!artist) {
   artist = '';
}
let url = 'https://www.tessellation.jp/t3dream/r#h.3c5fq13t8htb';
let sub = 'https://www.t3puzzle.com/r/u?pop';
let text = `
<a target="_blank" href="${url}">使い方</a> / 
<a href="#" onclick="javascript:document.querySelector('a.pngview').click();return false;">画像に保存</a> /
<a target="_blank" href="${sub}">画像を応募</a>
`;
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<span class="${name}" style="word-wrap: break-word;text-decoration:none;vertical-align:0.6em;font-size:${size}%;margin-right:0.2em;">${text}</span>
`);
});
})();
