import React, { useState, useEffect } from "react";

import MainHeader from "../MainHeader/MainHeader";

import Streamers from "../streamers/Streamers";

const Main = () => {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    const fetchStreamers = async () => {
      const response = await fetch(
        "https://notifyme-2c2b1-default-rtdb.firebaseio.com/streamers.json"
      );
      const responseData = await response.json();
      const strimeri = Object.values(responseData);
      console.log("strimeri", strimeri);

      const loadedStreamers = [];

      for (const key in responseData) {
        loadedStreamers.push({
          id: key,
          name: responseData[key].name,
          game: responseData[key].game,
          livestatus: responseData[key].livestatus,
          platform: responseData[key].platform,
          picture: responseData[key].picture,
          username: responseData[key].username,
          ytusername: responseData[key].ytusername,
        });
      }

      setStreamers(loadedStreamers);
    };

    fetchStreamers();
  }, []);

  const addStreamerHandler = (streamer) => {
    setStreamers((prevStreamers) => {
      return [streamer, ...prevStreamers];
    });
  };

  return (
    <div>
      <MainHeader />
      <br></br>

      <Streamers items={streamers} />
    </div>
  );
};

export default Main;
