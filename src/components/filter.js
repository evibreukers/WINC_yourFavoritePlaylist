import React from "react";

function filter(props) {
  const displayGenres = props.genres.map((item) => {
    return (
      <option value={item} key={item}>
        {item}
      </option>
    );
  });

  return (
    <div>
      <select className="sortBy" onChange={props.changeSort}>
        <option value="song-up">song(a-z)</option>
        <option value="song-down">song(z-a)</option>
        <option value="artist-up">artist(a-z)</option>
        <option value="artist-down">artist(z-a)</option>
      </select>

      <select className="filterGenre" onChange={props.filterGenre}>
        {displayGenres}
      </select>

      <div className="filterRating">
        <input
          type="checkbox"
          className="checkRating"
          value="1"
          onChange={props.filterRating}
        />
        <input
          type="checkbox"
          className="checkRating"
          value="2"
          onChange={props.filterRating}
        />
        <input
          type="checkbox"
          className="checkRating"
          value="3"
          onChange={props.filterRating}
        />
        <input
          type="checkbox"
          className="checkRating"
          value="4"
          onChange={props.filterRating}
        />
        <input
          type="checkbox"
          className="checkRating"
          value="5"
          onChange={props.filterRating}
        />
      </div>
    </div>
  );
}

export default filter;
