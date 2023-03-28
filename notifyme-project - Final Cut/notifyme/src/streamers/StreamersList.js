import React from "react";

import StreamerItem from "./StreamerItem";
import "./StreamersList.css";

const StreamersList = (props) => {
  return (
    <ul className="streamers-list">
      {props.items.map((streamer) => (
        <StreamerItem
          className="streamers-list"
          key={streamer.id}
          name={streamer.name}
          platform={streamer.platform}
          game={streamer.game}
          livestatus={streamer.livestatus}
          picture={streamer.picture}
          username={streamer.username}
          ytusername={streamer.ytusername}
        />
      ))}
    </ul>
  );
};

export default StreamersList;
