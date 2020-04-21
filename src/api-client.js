// GET TASK LIST
export const getData = async function () {
  const apiUrl = `https://wincacademydatabase.firebaseio.com/evi/songs.json`;
  try {
    const result = await fetch(apiUrl, { method: "GET" });
    const data = await result.json();

    //console.log('Before (the raw result):', data);
    let songs;
    if (data === null) {
      songs = [];
    } else {
      songs = Object.keys(data).map((key) => ({
        id: key,
        song: data[key].song,
        artist: data[key].artist,
        genre: data[key].genre,
        rating: data[key].rating,
      }));
    }

    console.log(songs);
    // message to the console
    console.log("current song-list:", songs);
    return songs;
  } catch (error) {
    console.log(error);
  }
};

// POST NEW TASK
export const postData = async function (songs) {
  const apiUrl = `https://wincacademydatabase.firebaseio.com/evi/songs.json`;
  try {
    const newPost = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songs),
    });
    const content = await newPost.json();
    // message to the console
    console.log("song added:", content);
  } catch (error) {
    console.log(error);
  }
};

// DELETE ALL
export const deleteAll = async function () {
  const apiUrl = `https://wincacademydatabase.firebaseio.com/evi/songs.json`;
  try {
    await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("all songs deleted");
  } catch (error) {
    console.log(error);
  }
};
