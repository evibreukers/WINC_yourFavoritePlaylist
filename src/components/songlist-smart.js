import React from "react";
import SongList from "./songlist";

function SongListSmart({ songs, currentGenre, currentRating, sortBy }) {
  let displayArray;
  if (currentGenre === "show all genres" && currentRating.length === 0) {
    displayArray = songs;
  } else if (currentGenre === "show all genres" && currentRating.length !== 0) {
    displayArray = songs.filter((song) => {
      return currentRating.includes(song.rating);
    });
  } else if (currentGenre !== "show all genres" && currentRating.length === 0) {
    displayArray = songs.filter((song) => {
      return song.genre === currentGenre;
    });
  } else if (currentGenre !== "show all genres" && currentRating.length !== 0) {
    displayArray = songs.filter((song) => {
      return currentRating.includes(song.rating) && song.genre === currentGenre;
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

  switch (sortBy) {
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

  return <SongList displaySongs={displaySongs} />;
}

export default SongListSmart;
