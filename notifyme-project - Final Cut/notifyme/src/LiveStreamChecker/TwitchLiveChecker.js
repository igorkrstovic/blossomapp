import React, { useState, useEffect } from "react";
import axios from "axios";

import { SiTwitch } from "react-icons/si";

const LiveTwitchStatusChecker = (props) => {
  const [streamerData, setStreamerData] = useState(null);
  const [error, setError] = useState(null);
  const clientId = "ackgcbfmqgzwzl5bimxo9pf9mbxoaw";
  const clientSecret = "tqk9o5kzzo6t4ebwewe79dmx6vp69f";

  const twitchUrl = `https://www.twitch.tv/${props.username}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Request an access token
        const tokenResponse = await axios.post(
          "https://id.twitch.tv/oauth2/token",
          {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "client_credentials",
          }
        );

        // Use the access token to make the API request
        const { data } = await axios.get(
          `https://api.twitch.tv/helix/streams?user_login=${props.username}`,
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.data.access_token}`,
              "Client-ID": clientId,
            },
          }
        );

        setStreamerData(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [props.username]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!streamerData) {
    return <div>Loading...</div>;
  }

  if (streamerData.data.length === 0) {
    return (
      <a href={twitchUrl} target="_blank" rel="noopener noreferrer">
        <SiTwitch size="30px" color="grey" />
      </a>
    );
  }

  return (
    <a href={twitchUrl} target="_blank" rel="noopener noreferrer">
      <SiTwitch size="30px" color="#6441a5" />
    </a>
  );
};

export default LiveTwitchStatusChecker;
