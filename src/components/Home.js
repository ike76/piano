import React, { Component } from "react";
import Navigation from "./Navigation";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default Home;
