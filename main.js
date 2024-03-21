"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        tiile: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Artict One", " Album Title 1");
console.log(album1);
const album2 = make_album("album Two", "Album Title 2");
console.log(album2);
const album3 = make_album("album Three", "Album Title 3");
console.log(album3);
