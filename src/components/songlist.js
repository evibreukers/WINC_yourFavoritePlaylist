import React from "react";

function songList(props) {
  let displayArray;
  if (props.currentGenre === "show all" && props.currentRating.length === 0) {
    displayArray = props.songs;
  } else if (
    props.currentGenre === "show all" &&
    props.currentRating.length !== 0
  ) {
    displayArray = props.songs.filter((song) => {
      return props.currentRating.includes(song.rating);
    });
  } else if (
    props.currentGenre !== "show all" &&
    props.currentRating.length === 0
  ) {
    displayArray = props.songs.filter((song) => {
      return song.genre === props.currentGenre;
    });
  } else if (
    props.currentGenre !== "show all" &&
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
      console.log("default");
  }

  const displaySongs = displayArray.map((song) => {
    return (
      <tr className="song-header" key={song.id}>
        <th className="song-row__item">{song.title}</th>
        <th className="song-row__item">{song.artist}</th>
        <th className="song-row__item">{song.genre}</th>
        <th className="song-row__item">{song.rating}</th>
      </tr>
    );
  });

  return (
    <div>
      <table className="songTable">{displaySongs}</table>
    </div>
  );
}

export default songList;
