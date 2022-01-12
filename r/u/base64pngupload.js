
  function updateEmailBySelect(form) {
    let search = location.search;
    if (!search) {
      return;
    }
    let qs = search.replace(/^\?id=/,'');
    if (!qs) {
      return;
    }
    if (! /^[a-z0-9]+$/.test(qs)) {
      return;
    }
    let index = form.querySelector('select[name="index"]').value;
    if (index !== '0') {
      let group = form.querySelector('select[name="group"]').value;
      if (group !== '0') {
        let email = form.querySelector('input[name="email"]');
        let grade = form.querySelector('select[name="grade"]').value;
        email.value = 'info+'+[qs,grade,group,index].join('_')+'@tessellation.jp';
        //email.onchange();
        console.log(email.value);
      }
    }
  }
(()=>{
  let url = 'https://script.google.com/a/tessellation.jp/macros/s/AKfycbw9lhdthuEjrSuw_Ky7HVTh2KIZM9kbQARIv8-W0KIpZwGXp-JOIbIgJ1JEufdKoPrb/exec';
  let reg = '';
  let emailreq = '';
  
  //if (!checkRegistered()) {
    reg = `
<dt>おなまえ</dt>
<dd><input name="name" size="15" required></dd>
`;
    emailreq = 'required';
  //} else {
  //  reg = `<dd><input type="hidden" value="${getArtist()}"></dd>`;
  //}
  let back = '';
  let search = document.location.search;
  if (search && search==='?pop') {
    back = '<p/><li><a href="#" onclick="javascript:window.close();">戻る</a>';
  } else if (search && search==='?back'){
    back = '<p/><li><a href="#" onclick="javascript:history.go(-3);return false;">戻る</a>';
  }
  let id = '';
  if (location.search && /^\?id=/.test(location.search)) {
    id = location.search.replace(/^\?id=/,'');
  }
  let xxid = '';
  if (id) {
    xxid = '?id='+id;
  }
  let input = `
<div class="classselect" style="display:none;">
          <input type="hidden" name="id" value="${id}">
          <select name="grade" onchange="updateEmailBySelect(this.form)">
            <option value="1">1年</option>
            <option value="2">2年</option>
            <option value="3">3年</option>
            <option value="4">4年</option>
            <option value="5" selected>5年</option>
            <option value="6">6年</option>
          </select>
          <select name="group" onchange="updateEmailBySelect(this.form)">
            <option value="1">1組</option>
            <option value="2">2組</option>
            <option value="0" selected>??組</option>
            <option value="3">3組</option>
            <option value="4">4組</option>
            <option value="5">5組</option>
            <option value="6">6組</option>
            <option value="a">A組</option>
            <option value="b">B組</option>
            <option value="c">C組</option>
            <option value="d">D組</option>
            <option value="e">E組</option>
            <option value="f">F組</option>
          </select>
          <select name="index" onchange="updateEmailBySelect(this.form)">
            <option value="1">1番</option>
            <option value="2">2番</option>
            <option value="3">3番</option>
            <option value="4">4番</option>
            <option value="5">5番</option>
            <option value="6">6番</option>
            <option value="7">7番</option>
            <option value="8">8番</option>
            <option value="9">9番</option>
            <option value="10">10番</option>
            <option value="11">11番</option>
            <option value="12">12番</option>
            <option value="13">13番</option>
            <option value="14">14番</option>
            <option value="15">15番</option>
            <option value="0" selected>??番</option>
            <option value="16">16番</option>
            <option value="17">17番</option>
            <option value="18">18番</option>
            <option value="19">19番</option>
            <option value="20">20番</option>
            <option value="21">21番</option>
            <option value="22">22番</option>
            <option value="23">23番</option>
            <option value="24">24番</option>
            <option value="25">25番</option>
            <option value="26">26番</option>
            <option value="27">27番</option>
            <option value="28">28番</option>
            <option value="29">29番</option>
            <option value="30">30番</option>
            <option value="31">31番</option>
            <option value="32">32番</option>
            <option value="33">33番</option>
            <option value="34">34番</option>
            <option value="35">35番</option>
            <option value="36">36番</option>
            <option value="37">37番</option>
            <option value="38">38番</option>
            <option value="39">39番</option>
            <option value="40">40番</option>
            <option value="41">41番</option>
            <option value="42">42番</option>
            <option value="43">43番</option>
            <option value="44">44番</option>
            <option value="45">45番</option>
            <option value="46">46番</option>
            <option value="47">47番</option>
            <option value="48">48番</option>
            <option value="49">49番</option>
            <option value="50">50番</option>
          </select>    
        </div>
<div class="email" style="display:none;">
<dt>メールアドレス</dt>
<dd><input name="email" type="email" size="34" ${emailreq}></dd>
</div>
<dt>ねんれい</dt>
<dd><input name="age" type="number" size="3"></dd>
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
<h2>T3初夢コンテスト2022 応募</h2>
作品の画像ファイルを選択の上、<br/>
必須事項を記入して下さい。<br/>
応募作品、ねんれい、だいめい、工夫した点は、<br/>
コンテストに関連してウェブページやSNSなどで<br/>
紹介させていただくことがあります。
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
<input type="submit" disabled="disabled" value="作品を応募" onclick="this.value='応募中...';" style="-webkit-appearance: none; appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676D7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;">
</form>
${back}
<p/>
<li><a href="https://www.tessellation.jp/t3dream/2022">コンテストページ</a>
<li><a href="https://www.t3puzzle.com/b/${xxid}">T3パズル ウェブ版</a>
`);
;
  
  document.addEventListener('DOMContentLoaded',()=>{
    let disp = document.querySelector('canvas');
    document.querySelector('input#ui').addEventListener('change', 
      (e)=>drawImage(e,disp,callback));
    
      let inputage = document.querySelector('input[name="age"]');
      let inputtitle = document.querySelector('input[name="title"]');
      let inputname = document.querySelector('input[name="name"]');
      let inputtext = document.querySelector('textarea[name="text"]');
      let inputemail = document.querySelector('input[name="email"]');
      let classemail = document.querySelector('div.email');
      let classselect = document.querySelector('div.classselect');
      if (location.search && /^\?id=/.test(location.search)) {
        inputage.required = false;
        inputtitle.required = false;
        inputname.required = false;
        inputtext.required = false;
        inputemail.value = '';
        classemail.style.display = 'none';
        classselect.style.display = 'block';
      } else {
        inputage.required = true;
        inputtitle.required = true;
        inputname.required = false;
        inputtext.required = true;
        inputemail.value = '';
        classemail.style.display = 'block';
        classselect.style.display = 'none';
      }
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
    let max = 800;
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
