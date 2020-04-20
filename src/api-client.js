// GET TASK LIST
export const getData = async function () {
  const apiUrl = `https://wincacademydatabase.firebaseio.com/evi/songs.json`;
  try {
    const result = await fetch(apiUrl, { method: "GET" });
    const data = await result.json();

    //console.log('Before (the raw result):', data);
    let tasks;
    if (data === null) {
      tasks = [];
    } else {
      tasks = Object.keys(data).map((key) => ({
        id: key,
        song: data[key].song,
        artist: data[key].artist,
        genre: data[key].genre,
        rating: data[key].rating,
      }));
    }

    console.log(tasks);
    // message to the console
    console.log("current task-list:", tasks);
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

// POST NEW TASK
export const postData = async function (task) {
  const apiUrl = `https://wincacademydatabase.firebaseio.com/evi/songs.json`;
  try {
    const newPost = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const content = await newPost.json();
    // message to the console
    console.log("task added:", content);
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
    console.log("all tasks deleted");
  } catch (error) {
    console.log(error);
  }
};
