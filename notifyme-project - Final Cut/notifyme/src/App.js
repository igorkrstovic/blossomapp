import React from "react";

import Main from "./streamers/Main";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
