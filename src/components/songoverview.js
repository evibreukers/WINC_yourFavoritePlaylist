import React from "react";
import SongList from "./songlist";
import SongForm from "./songform";
import Filter from "./filter";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: "1",
          song: "I love you",
          artist: "Evi",
          genre: "pop",
          rating: "5",
        },
        {
          id: "2",
          song: "haha love you",
          artist: "RAbel",
          genre: "rock",
          rating: "4",
        },
      ],
      displaySongs: [],
      newSong: { song: "", artist: "", genre: "", rating: "" },
      genres: ["show all", "pop", "rock"],
      currentGenre: "show all",
      currentRating: [],
      sortBy: "song(a-z)",
    };
  }

  handleChange = (event) => {
    const thisInput = event.target.name;
    const thisValue = event.target.value;
    const addSong = this.state.newSong;
    addSong[thisInput] = thisValue;
    this.setState({ newSong: addSong });
  };

  addSong = () => {
    /* add id to newsong */
    const newId = this.state.songs.length + 1;
    this.setState((prevState) => {
      prevState.newSong.id = newId;
      return { newSong: prevState.newSong };
    });

    /* update genre */
    const genreList = this.state.genres;
    if (!genreList.find((item) => item === this.state.newSong.genre)) {
      genreList.push(this.state.newSong.genre);
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

  clearSongs = () => {
    this.setState({ songs: [] });
  };

  render() {
    return (
      <div>
        {console.log(this.state.songs)}
        {console.log(this.state.newSong)}
        <SongForm addSong={this.addSong} handleChange={this.handleChange} />
        <Filter
          genres={this.state.genres}
          filterGenre={this.filterGenre}
          filterRating={this.filterRating}
          changeSort={this.changeSort}
        />
        <table className="songTable">
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </table>
        <SongList
          songs={this.state.songs}
          currentGenre={this.state.currentGenre}
          currentRating={this.state.currentRating}
          sortBy={this.state.sortBy}
        />
        <button className="clearSongs-button" onClick={this.clearSongs}>
          CLEAR SONG LIST
        </button>
      </div>
    );
  }
}

export default SongOverview;
