(function(){
  let artist = localStorage.getItem('artist');
  if (!(artist && artist.toString().trim().length>0)) {
    document.location.href = './confirm.html';
  }
})();
