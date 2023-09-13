const PLAYLIST_URL = "https://api.deezer.com/user/2529/playlists";
const USER_URL = "https://api.deezer.com/user/2529";
const ALBUM_URL = "https://api.deezer.com/album/302127";

export function getAlbumUrl() {
  return ALBUM_URL;
}

export function getUserUrl() {
  return USER_URL;
}

export function getPlayListUrl() {
  return PLAYLIST_URL;
}
