import React from "react";

function songList(props) {
  let displayArray;
  if (
    props.currentGenre === "show all genres" &&
    props.currentRating.length === 0
  ) {
    displayArray = props.songs;
  } else if (
    props.currentGenre === "show all genres" &&
    props.currentRating.length !== 0
  ) {
    displayArray = props.songs.filter((song) => {
      return props.currentRating.includes(song.rating);
    });
  } else if (
    props.currentGenre !== "show all genres" &&
    props.currentRating.length === 0
  ) {
    displayArray = props.songs.filter((song) => {
      return song.genre === props.currentGenre;
    });
  } else if (
    props.currentGenre !== "show all genres" &&
    props.currentRating.length !== 0
  ) {
    displayArray = props.songs.filter((song) => {
      return (
        props.currentRating.includes(song.rating) &&
        song.genre === props.currentGenre
      );
    });
  }

  const pickSorter = (sorter) => {
    return function compare(a, b) {
      const sorterA = a[sorter].toUpperCase();
      const sorterB = b[sorter].toUpperCase();

      let comparison = 0;
      if (sorterA > sorterB) {
        comparison = 1;
      } else if (sorterA < sorterB) {
        comparison = -1;
      }
      return comparison;
    };
  };

  switch (props.sortBy) {
    case "artist-up":
      displayArray.sort(pickSorter("artist"));
      break;
    case "artist-down":
      displayArray.sort(pickSorter("artist"));
      displayArray.reverse();
      break;
    case "song-up":
      displayArray.sort(pickSorter("song"));
      break;
    case "song-down":
      displayArray.sort(pickSorter("song"));
      displayArray.reverse();
      break;
    default:
      return "";
  }

  const displaySongs = displayArray.map((song) => {
    return (
      <div className="song-item" key={song.id}>
        <div className="song-row__item">{song.song}</div>
        <div className="song-row__item">{song.artist}</div>
        <div className="song-row__item">{song.genre}</div>
        <div className="song-row__item">{song.rating}</div>
      </div>
    );
  });

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
