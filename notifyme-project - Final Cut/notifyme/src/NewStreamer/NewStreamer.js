import React, { useState } from "react";

import StreamerForm from "./StreamerForm";
import "./NewStreamer.css";

const NewStreamer = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveStreamerDataHandler = (enteredStreamerData) => {
    const streamerData = {
      ...enteredStreamerData,
      id: Math.random().toString(),
    };
    props.onAddStreamer(streamerData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-streamer">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Streamer</button>
      )}
      {isEditing && (
        <StreamerForm
          onSaveStreamerData={saveStreamerDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewStreamer;
