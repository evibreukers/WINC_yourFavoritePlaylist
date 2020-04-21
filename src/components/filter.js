import React from "react";

function Filter({ filterRating, handleChange, currentRating, genres }) {
  const onChange = (event) => {
    event.target.classList.toggle("checked");
    let updateRating = currentRating;
    if (event.target.classList.contains("checked")) {
      updateRating.push(event.target.value);
    } else {
      updateRating = currentRating.filter((item) => {
        return item !== event.target.value;
      });
    }
    filterRating(updateRating);
  };

  const displayGenres = genres.map((item) => {
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
        <select className="sortBy" id="sortBy" onChange={handleChange}>
          <option value="song-up">song(a-z)</option>
          <option value="song-down">song(z-a)</option>
          <option value="artist-up">artist(a-z)</option>
          <option value="artist-down">artist(z-a)</option>
        </select>

        <select
          className="filterGenre"
          id="currentGenre"
          onChange={handleChange}
        >
          {displayGenres}
        </select>

        <div className="filterRating">
          <label>
            <input
              type="checkbox"
              className="checkRating"
              value="1"
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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

export default Filter;
