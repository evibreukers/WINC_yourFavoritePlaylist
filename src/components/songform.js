import React from "react";

function songForm({ addSong, songs }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target;
    addSong(inputValue);
  };

  return (
    <form className="songForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="song"
        placeholder="song"
        value={songs.song}
      ></input>
      <input
        type="text"
        name="artist"
        placeholder="artist"
        value={songs.artist}
      ></input>
      <input
        type="text"
        name="genre"
        placeholder="genre"
        value={songs.genre}
      ></input>
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        placeholder="rate"
        value={songs.rating}
      ></input>
      <button className="addSong-button">add song</button>
    </form>
  );
}

export default songForm;
