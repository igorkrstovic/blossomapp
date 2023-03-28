import React from "react";

import Card from "../UI/Card";
import "./StreamerItem.css";

const StreamerItem = (props) => {
  return (
    <Card
      className="featured-users"
      name={props.name}
      game={props.game}
      platform={props.platform}
      picture={props.picture}
      livestatus={props.livestatus}
      username={props.username}
      ytusername={props.ytusername}
    ></Card>
  );
};

export default StreamerItem;
