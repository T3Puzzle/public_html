(()=>{
let config='svgconfig';
let size = 100;
let artist = localStorage.getItem('artist');
if (!artist) {
   artist = '';
}
let url = 'https://docs.google.com/forms/d/e/1FAIpQLSfWOXB9V0O8ThOcjhmg7RngBs8NT1a2hLElKAEE8-22uzB7sQ/viewform?usp=pp_url&entry.241675505='+artist;
let text = `
<a href="${url}">アンケート</a> / 
<a href="./upload.html">写真</a> /
<a href="./confirm.html">？</a>
`;
document.addEventListener('DOMContentLoaded',()=>{
  let output = document.body.querySelector(`output.${config}`);
  output.insertAdjacentHTML('beforeend',`
<span class="${name}" style="word-wrap: break-word;text-decoration:none;vertical-align:0.2em;font-size:${size}%;margin-right:0.2em;">${text}</span>
`);
});
})();
