import React from "react";
import SongList from "./songlist";
import SongForm from "./songform";
import Filter from "./filter";
import { getData, postData, deleteAll } from "../api-client";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      newSong: { song: "", artist: "", genre: "", rating: "" },
      genres: ["show all genres", "pop", "rock"],
      currentGenre: "show all genres",
      currentRating: [],
      sortBy: "song-up",
    };
  }

  handleChange = (event) => {
    const thisInput = event.target.name;
    const thisValue = event.target.value;
    const addSong = this.state.newSong;
    addSong[thisInput] = thisValue.toLowerCase();
    this.setState({ newSong: addSong });
  };

  addSong = () => {
    /* check for empty input */
    const checkInput = Array.from(
      document.querySelector(".songForm").querySelectorAll("input")
    );
    if (checkInput.filter((item) => item.value === "").length !== 0) {
      return;
    }

    /* post song to database */
    this.postSong();

    /* add id to newsong */
    const newId = this.state.songs.length + 1;
    this.setState((prevState) => {
      prevState.newSong.id = newId;
      return { newSong: prevState.newSong };
    });

    /* update genre */
    const genreList = this.state.genres;
    if (!genreList.find((item) => item === this.state.newSong.genre)) {
      genreList.push(this.state.newSong.genre.toLowerCase());
    }
    this.setState({ genres: genreList });

    /* update songlist */
    this.setState((prevState) => {
      prevState.songs.push(prevState.newSong);
      return {
        songs: prevState.songs,
        newSong: { id: "", song: "", artist: "", genre: "", rating: "" },
      };
    });
    document
      .querySelector(".songForm")
      .querySelectorAll("input")
      .forEach((item) => (item.value = ""));
  };

  filterGenre = (event) => {
    this.setState({ currentGenre: event.target.value });
  };

  filterRating = (event) => {
    event.target.classList.toggle("checked");
    let updateRating = this.state.currentRating;
    if (event.target.classList.contains("checked")) {
      updateRating.push(event.target.value);
    } else {
      updateRating = this.state.currentRating.filter((item) => {
        return item !== event.target.value;
      });
    }
    this.setState({ currentRating: updateRating });
  };

  changeSort = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  clearSongs = async () => {
    try {
      await deleteAll();
      this.setState({
        songs: [
          {
            id: "1",
            song: "come online",
            artist: "kid francescoli",
            genre: "pop",
            rating: "5",
          },
        ],
      });
      await this.loadList();
    } catch (error) {
      console.log(error);
    }
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

  postSong = async () => {
    const postSong = this.state.newSong;
    try {
      await postData(postSong);
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
        <SongForm addSong={this.addSong} handleChange={this.handleChange} />
        <h1>I AM YOUR PLAYLIST</h1>
        <Filter
          genres={this.state.genres}
          filterGenre={this.filterGenre}
          filterRating={this.filterRating}
          changeSort={this.changeSort}
        />
        <SongList
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
