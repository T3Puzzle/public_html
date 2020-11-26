export function __artist_hasOne () {
  let artist = localStorage.getItem('artist');
  return (artist && artist.toString().trim().length>0);
}
export function __artist_one () {
  if (__artist_hasOne()) {
    return localStorage.getItem('artist');
  } else {
    let artist = Math.random().toString(32).substring(2);
    localStorage.setItem('artist',artist);
    return artist;
  }
}
export function __artist_clear() {
  return localStorage.removeItem('artist');
}
