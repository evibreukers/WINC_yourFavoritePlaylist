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
    <div className="filterWrapper">
      <div className="filter-titles">
        <p>sort by:</p>
        <p>filter genre:</p>
        <p>filter rating:</p>
      </div>

      <div className="filter-panel">
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
          <label>
            <input
              type="checkbox"
              className="checkRating"
              value="1"
              onChange={props.filterRating}
            />
            <span className="checkmark">
              <i class="fas fa-star"></i>
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              className="checkRating"
              value="2"
              onChange={props.filterRating}
            />
            <span className="checkmark">
              <i class="fas fa-star"></i>
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              className="checkRating"
              value="3"
              onChange={props.filterRating}
            />
            <span className="checkmark">
              <i class="fas fa-star"></i>
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              className="checkRating"
              value="4"
              onChange={props.filterRating}
            />
            <span className="checkmark">
              <i class="fas fa-star"></i>
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              className="checkRating"
              value="5"
              onChange={props.filterRating}
            />
            <span className="checkmark">
              <i class="fas fa-star"></i>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default filter;
