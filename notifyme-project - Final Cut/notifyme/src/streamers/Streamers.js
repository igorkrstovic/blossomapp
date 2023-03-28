import React, { useState } from "react";

import "../UI/Card.css";
import StreamersFilter from "./StreamersFilter";
import StreamersList from "./StreamersList";
import "./Streamers.css";

const Streamers = (props) => {
  const [filteredGame, setFilteredGame] = useState("Warzone 2.0");

  const filterChangeHandler = (selectedGame) => {
    setFilteredGame(selectedGame);
  };

  const filteredStreamers = props.items.filter((streamer) => {
    return streamer.game.toString() === filteredGame;
  });

  return (
    <div>
      <div className="streamers">
        <StreamersFilter
          selected={filteredGame}
          onChangeFilter={filterChangeHandler}
        />

        <StreamersList items={filteredStreamers} />
      </div>
    </div>
  );
};

export default Streamers;
