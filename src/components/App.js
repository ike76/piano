import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>{/* <Link to="/">Scales</Link> */}</h1>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/chapters/:chapterName" component={Home} />
        </main>
      </div>
    </Router>
  );
}
