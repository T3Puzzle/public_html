(()=>{
let config='svgconfig';
let size = 150;
let artist = localStorage.getItem('artist');
if (!artist) {
   artist = '';
}
let url = 'https://www.tessellation.jp/t3dream/r';
let sub = 'https://www.t3puzzle.com/r/u';
let text = `
<a target="_blank" href="${url}">コンテスト</a> / 
<a target="_blank" href="javascript:document.querySelector('a.pngview').click();">画像に保存</a> /
<a target="_blank" href="${sub}">画像を応募</a>
`;
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<span class="${name}" style="word-wrap: break-word;text-decoration:none;vertical-align:0.2em;font-size:${size}%;margin-right:0.2em;">${text}</span>
`);
});
})();
