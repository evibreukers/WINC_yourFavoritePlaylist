import React from "react";
import SongListSmart from "../src/components/songlist-smart";
import SongForm from "../src/components/songform";
import Filter from "../src/components/filter";
import { getData, postData, deleteAll } from "./api-client";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      genres: ["show all genres", "pop", "rock"],
      currentGenre: "show all genres",
      currentRating: [],
      sortBy: "song-up",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  filterRating = (updateRating) => {
    this.setState({ currentRating: updateRating });
  };

  addSong = (inputValue) => {
    const newSong = {
      id: this.state.songs.length + 1,
      song: inputValue.song.value,
      artist: inputValue.artist.value,
      genre: inputValue.genre.value,
      rating: inputValue.rating.value,
    };
    this.setState({ songs: this.state.songs.concat(newSong) });
    postData(newSong);

    /* clear input fields */
    document.querySelectorAll("input").forEach((item) => (item.value = ""));
  };

  loadList = async () => {
    try {
      let taskArray = await getData();

      /* update genre list */
      const updateGenres = this.state.genres;
      taskArray.forEach((item) => {
        if (!updateGenres.includes(item.genre)) {
          updateGenres.push(item.genre);
        }
      });

      this.setState({ songs: taskArray, genres: updateGenres });
    } catch (error) {
      console.log(error);
    }
  };

  postSong = async (newSong) => {
    const postSong = newSong;
    try {
      await postData(postSong);
      await this.loadList();
    } catch (error) {
      console.log(error);
    }
  };

  clearSongs = async () => {
    try {
      await deleteAll();
      await this.loadList();
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.loadList();
  }

  render() {
    return (
      <div className="songOverview">
        <SongForm addSong={this.addSong} songs={this.state.songs} />
        <h1>I AM YOUR PLAYLIST</h1>
        <Filter
          filterRating={this.filterRating}
          handleChange={this.handleChange}
          currentRating={this.state.currentRating}
          genres={this.state.genres}
        />
        <SongListSmart
          songs={this.state.songs}
          currentGenre={this.state.currentGenre}
          currentRating={this.state.currentRating}
          sortBy={this.state.sortBy}
        />
        <button className="clearSongs-button" onClick={this.clearSongs}>
          clear all songs
        </button>
      </div>
    );
  }
}

export default SongOverview;
