import React from "react";
import "./App.css";

import Logo from "./components/Logo.jsx";

import Search from "./components/Search.jsx";

import Button from "./components/Button.jsx";

function App() {
  return (
    <div className="App">
      <Logo />
      
      <Search />

      <Button />

      <p className="text-google">

        Ofrecido por Google en: <span className="span-text">English</span>
      </p>
    </div>
  );
}

export default App;