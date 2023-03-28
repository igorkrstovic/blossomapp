import React from "react";

import { SiFacebookgaming } from "react-icons/si";

import LiveTwitchStatusChecker from "../LiveStreamChecker/TwitchLiveChecker";
import LiveYoutubeStatusChecker from "../LiveStreamChecker/YTLiveStreamChecker";
import "./Card.css";

const Card = (props) => {
  console.log(4, props);
  const classes = props.className;
  return (
    <div className={classes}>
      {props.children}
      <div key={props.id} className="card">
        <div className="card-header">
          <h3>{props.name}</h3>
          <h4>{props.platform}</h4>
          <img src={props.picture} alt={`${props.name}`} />
        </div>
        <div>
          <h4 className="livestatus">
            {props.username && (
              <LiveTwitchStatusChecker username={props.username} />
            )}

            {props.ytusername && (
              <LiveYoutubeStatusChecker username={props.ytusername} />
            )}

            <SiFacebookgaming size="26px" color="grey" />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
