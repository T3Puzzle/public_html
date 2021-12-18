(()=>{
let config='svgconfig';
let size = 150;
let artist = localStorage.getItem('artist');
if (!artist) {
   artist = '';
}
let url = 'https://www.tessellation.jp/online/t3web';
let sub = '/r/u?pop';
let quest = 'https://docs.google.com/forms/d/e/1FAIpQLSev2VmJmDiQIW8K_XEQYNMk0XQJDrrzAs0IeFXDeXuqm1Ry_Q/viewform?usp=sf_link?usp=pp_url&entry.241675505='+artist;
let text = `
<a target="_blank" href="${url}">使い方</a> / 
<a href="#" onclick="javascript:document.querySelector('a.pngview').click();return false;">保存</a> /
<a target="_blank" href="${sub}">応募</a> / 
<a target="_blank" href="https://www.t3puzzle.com/b">最新版</a>
`;
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<span class="${name}" style="word-wrap: break-word;text-decoration:none;vertical-align:0.6em;font-size:${size}%;margin-right:0.2em;">${text}</span>
`);
});
})();
