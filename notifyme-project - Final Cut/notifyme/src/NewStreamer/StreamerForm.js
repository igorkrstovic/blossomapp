import React, { useState } from "react";

import "./StreamerForm.css";

const StreamerForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPlatform, setEnteredPlatform] = useState("");
  const [enteredGame, setEnteredGame] = useState("");
  const [enteredLiveStatus, setEnteredLiveStatus] = useState("");
  const [enteredProfilePicture, setEnteredProfilePicture] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const platformChangeHandler = (event) => {
    setEnteredPlatform(event.target.value);
  };

  const gameChangeHandler = (event) => {
    setEnteredGame(event.target.value);
  };

  const liveStatusChangeHandler = (event) => {
    setEnteredLiveStatus(event.target.value);
  };

  const profilePictureHandler = (event) => {
    setEnteredProfilePicture(event.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const streamerData = {
      name: enteredName,
      platform: enteredPlatform,
      game: enteredGame,
      livestatus: enteredLiveStatus,
      profilepicture: enteredProfilePicture,
    };

    props.onSaveStreamerData(streamerData);
    setEnteredName("");
    setEnteredPlatform("");
    setEnteredGame("");
    setEnteredLiveStatus("");
    setEnteredProfilePicture("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-streamer__controls">
        <div className="new-streamer__control">
          <label>Streamer Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="new-streamer__control">
          <label>Favourit Platform</label>
          <select
            type="option"
            value={enteredPlatform}
            onChange={platformChangeHandler}
          >
            <option>YouTube</option>
            <option>Facebook</option>
            <option>Twitch</option>
          </select>
        </div>
        <div className="new-streamer__control">
          <label>Game</label>
          <select
            type="option"
            value={enteredGame}
            onChange={gameChangeHandler}
          >
            <option>Warzone 2.0</option>
            <option>Fortnite</option>
            <option>PUBG</option>
            <option>EFT</option>
          </select>
        </div>
        <div className="new-streamer__control">
          <label>Activision ID / if applicable </label>
          <input
            type="text"
            value={enteredLiveStatus}
            onChange={liveStatusChangeHandler}
          />
        </div>
        <div className="new-streamer__control">
          <label>Profile Picture</label>
          <input type="file" onChange={profilePictureHandler} />

          <button
            type="button"
            onClick={() =>
              document.getElementById("profile-picture-input").click()
            }
          >
            Upload
          </button>
        </div>
      </div>
      <div className="new-streamer__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Streamer</button>
      </div>
    </form>
  );
};

export default StreamerForm;
