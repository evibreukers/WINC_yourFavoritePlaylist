import React from "react";

function songForm(props) {
  return (
    <div className="songForm">
      <input
        type="text"
        name="song"
        placeholder="song"
        onChange={props.handleChange}
      ></input>
      <input
        type="text"
        name="artist"
        placeholder="artist"
        onChange={props.handleChange}
      ></input>
      <input
        type="text"
        name="genre"
        placeholder="genre"
        onChange={props.handleChange}
      ></input>
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        onChange={props.handleChange}
        placeholder="rate"
      ></input>
      <button className="addSong-button" onClick={props.addSong}>
        add song
      </button>
    </div>
  );
}

export default songForm;
