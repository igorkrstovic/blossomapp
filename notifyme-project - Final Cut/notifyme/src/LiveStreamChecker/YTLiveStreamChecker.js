import React, { useState, useEffect } from "react";
import axios from "axios";
import { SiYoutubegaming } from "react-icons/si";

const YOUTUBE_API_KEY = "AIzaSyAL3yH7KWIE2Pv2jUl347AYRO7EkPyN7ag";

const getChannelId = async ({ username }) => {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${username}&key=${YOUTUBE_API_KEY}`;

  const response = await axios.get(url);
  return response.data.items[0].id;
};

const LiveYoutubeStatusChecker = (props) => {
  const username = props.username;

  const [isLive, setIsLive] = useState(false);

  const youTubeUrl = `https://www.youtube.com/${username}`;

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const channelId = await getChannelId(username);

        const url = `https://www.googleapis.com/youtube/v3/liveBroadcasts?part=snippet,status&broadcastStatus=active&broadcastType=all&channelId=${channelId}&key=${YOUTUBE_API_KEY}`;
        console.log(2, url);
        const response = await axios.get(url);
        const liveBroadcasts = response.data.items;
        if (liveBroadcasts.length > 0) {
          setIsLive(true);
        } else {
          setIsLive(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkLiveStatus();
    const intervalId = setInterval(checkLiveStatus, 30000000); // 30 seconds
    return () => clearInterval(intervalId);
  }, [username]);

  return (
    <div>
      {isLive ? (
        <a href={youTubeUrl} target="_blank" rel="noopener noreferrer">
          <SiYoutubegaming size="30px" color="red" />
        </a>
      ) : (
        <a href={youTubeUrl} target="_blank" rel="noopener noreferrer">
          <SiYoutubegaming size="30px" color="grey" />
        </a>
      )}
    </div>
  );
};

export default LiveYoutubeStatusChecker;
