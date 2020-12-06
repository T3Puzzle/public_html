(()=>{
  let url = 'https://script.google.com/a/tessellation.jp/macros/s/AKfycbwZVOK-Ns13e1Y93iCFBZ5yqIJW28umKUXmR-N0Out4kVgLeyE/exec';
  let reg = '';
  if (!checkRegistered()) {
    reg = `
<dt>おなまえ</dt>
<dd><input name="name" size="15" required></dd>
<dt>メールアドレス</dt>
<dd><input name="email" type="email" size="34" required></dd>
`;    
  } else {
    reg = `<dd><input type="hidden" value="${getArtist()}"></dd>`;
  }
  let input = `
<dt>ねんれい</dt>
<dd><input name="age" type="number" size="3" max="115" min="2" required></dd>
${reg}
<dt>だいめい</dt>
<dd><input name="title" size="34" required></dd>
<dt>工夫した点</dt>
<dd><textarea cols="33" rows="3" name="text" required></textarea></dd>
  `;
  document.body.insertAdjacentHTML('beforeend',`
<style>
form{
  background-color: #eaeaea;
  padding:20px 50px;
}

form dl dt{
  width: 125px;
  padding:3px 0;
  float:left;
  clear:both;
}

form dl dd{
  padding:3px 0;
}
</style>
<h2>T3初夢コンテスト 応募フォーム</h2>
<dd>作品の画像ファイルを選択の上、</dd>
<dd>必須事項を記入して下さい。</dd>
<p/>
<input id="ui" type="file" accept="image/*"/><br/>
<canvas></canvas>

<form method="POST" action="${url}">
<dl>
<input type="hidden" name="filename" style="display:none;"/>
<input type="hidden" name="type" style="display:none;"/>
<input type="hidden" name="content" style="display:none;"/>
${input}
</dl>
<input type="submit" disabled="disabled" value="作品を応募" style="appearance: none;
  border: 0;
  border-radius: 5px;
  background-color: #4676D7;
  background: #4676D7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;">
</form>
<p/>
<li><a href="#" onclick="javascript:history.go(-1); return false;">戻る</a>
<p/>
<li><a href="https://www.t3puzzle.com/t">T3パズル ウェブ版</a>
<li><a href="https://www.tessellation.jp/t3dream/r">T3初夢コンテスト参加者向けページ</a>
`);
;
  document.addEventListener('DOMContentLoaded',()=>{
    let disp = document.querySelector('canvas');
    document.querySelector('input#ui').addEventListener('change', 
      (e)=>drawImage(e,disp,callback));
  });
  return;

  function checkRegistered () {
    let artist = getArtist();
    return checkHash(artist);
  }
  function checkHash(hash) {
    if (!hash) {
      return false;
    }
    let head = hash.substr(0,hash.length-1);
    let tail = hash.substr(hash.length-1,1);
    return checkCode(head,tail);
  }
  function checkCode(head,tail) {
    let headVal = head.replace(/[0-9]/g,'').length;
    let tailVal = parseInt(tail,16);
    return (headVal===tailVal);
  }
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
