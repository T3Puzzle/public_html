(()=>{
  let url = 'https://script.google.com/a/tessellation.jp/macros/s/AKfycbw15zZBqu10fdJZ16D7SgVF2duq4pqHtQyLNA-Dbg/exec';
  document.body.insertAdjacentHTML('beforeend',`
<input id="ui" type="file" accept="image/*"/><br/>
<canvas></canvas>
<form method="POST" action="${url}">
<input type="hidden" name="filename" style="display:none;"/>
<input type="hidden" name="type" style="display:none;"/>
<input type="hidden" name="content" style="display:none;"/>
<input type="submit" disabled="disabled" value="アップロード" style="appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676D7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;">
</form>
`);
;
  document.addEventListener('DOMContentLoaded',()=>{
    let disp = document.querySelector('canvas');
    document.querySelector('input#ui').addEventListener('change', 
      (e)=>drawImage(e,disp,callback));
  });
  function callback(canvas) {
    let type = 'image/png';
    let dataurl = canvas.toDataURL(type);
    document.querySelector('form input[name="type"]').value = 'image/png';
    document.querySelector('form input[name="content"]').value = dataurl.split(',')[1];
    document.querySelector('form input[type="submit"]').disabled = ''; 
  }
  function getArtist () {
    let artist = localStorage.getItem('artist');
    if (!artist) {
      artist = 'tmp';
    }
    return artist;
  }
  function convWidthHeight(image) {
    let max = 400;
    let width = image.width;
    let height = image.height;
    if (width<height) {
      width *= max/height;
      height = max;
    } else {
      height *= max/width;
      width = max;
    }
    return {width:width,height:height};
  }
  function drawImage(e,disp,callback) {
    let image = new Image();
    image.addEventListener('load', function() {
      let wh = convWidthHeight(image);
      disp.setAttribute('width',wh.width);
      disp.setAttribute('height',wh.height);
      disp.getContext('2d').drawImage(this, 0, 0, disp.width, disp.height);
      callback(disp);
    });
    let reader = new FileReader();
    reader.addEventListener('load',function(e) {
      image.src = e.target.result;
    });
    reader.readAsDataURL(e.target.files[0]);
    let filename = getArtist()+'_'+e.target.files[0].name;
    filename = filename.replace(/\.[^\.]+$/,'.png');
    document.querySelector('form input[name="filename"]').value = filename;
  }
})();
