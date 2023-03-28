import React, { useState } from "react";

import Login from "./Login";
import Navigation from "../MainHeader/Navigation";
import StreamersList from "../streamers/StreamersList";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      <Navigation isAuthenticated={isLoggedIn} onLogout={logoutHandler} />

      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <StreamersList onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
};

export default LoginForm;
