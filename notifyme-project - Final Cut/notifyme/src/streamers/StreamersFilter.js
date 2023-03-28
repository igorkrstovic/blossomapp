import React from "react";

import "./StreamersFilter.css";

const StreamersFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="streamers-filter">
      <div className="streamers-filter__control">
        <label></label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="Warzone 2.0">Warzone 2.0</option>
          <option value="Fortnite">Fortnite</option>
          <option value="PUBG">PUBG</option>
          <option value="EFT">EFT</option>
        </select>
      </div>
    </div>
  );
};

export default StreamersFilter;
