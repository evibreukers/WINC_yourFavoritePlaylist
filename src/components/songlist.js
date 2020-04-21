import React from "react";

function songList({ displaySongs }) {
  return (
    <div className="song-list-panel">
      <div className="song-header">
        <div className="song-row__item">Song</div>
        <div className="song-row__item">Artist</div>
        <div className="song-row__item">Genre</div>
        <div className="song-row__item">Rating</div>
      </div>
      {displaySongs}
    </div>
  );
}

export default songList;
