import React, { useState } from "react";
import "./MainHeader.css";

const MainHeader = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <header className="main-header">
        <h1>notifyMe</h1>
      </header>
    </div>
  );
};

export default MainHeader;
