import React from "react";

import LoginForm from "../Login/LoginForm";
import "./LoginPopup.css";

const LoginPopup = (props) => {
  const handleLogin = (email, password) => {};

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <LoginForm onLogin={handleLogin} />
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default LoginPopup;
