import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/home";
import Stats from "./components/stats";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/stats" component={Stats} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
