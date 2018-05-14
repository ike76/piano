import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Chapter from "./Chapter";
import NavSlider from "./NavSlider";
import Cheaters from "./Cheaters";
export default function App(props) {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>{/* <Link to="/">Scales</Link> */}</h1>
        </header>
        <NavSlider />
        <main>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/chapters/:chapterName/:lessonNumber"
            component={Chapter}
          />
        </main>
      </div>
    </Router>
  );
}
