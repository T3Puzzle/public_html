(()=>{
let config='svgconfig';
let size = 120;
let artist = localStorage.getItem('artist');
if (!artist) {
   artist = '';
}
let url = 'https://www.tessellation.jp/online/t3web';
let url2 = 'https://www.tessellation.jp/t3summer';
let text = `
<a target="_blank" href="${url}">使い方</a> / 
<a target="_blank" href="${url2}">コンテスト</a> / 
<a href="#" onclick="javascript:document.querySelector('a.pngview').click();return false;">登録情報記入へ</a>
`;

document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<span class="${name}" style="word-wrap: break-word;text-decoration:none;vertical-align:0.6em;font-size:${size}%;margin-right:0.2em;">${text}</span>
`);
});
})();
