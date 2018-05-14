import React, { Component } from "react";
import { Motion, spring } from "react-motion";
import { connect } from "react-redux";
import Navigation from "./Navigation";
class NavSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Motion
        defaultStyle={{ x: 0 }}
        style={{ x: spring(this.props.navOpen ? 0 : -100) }}
      >
        {style => (
          <Navigation style={{ transform: `translateY(${style.x}%)` }} />
        )}
      </Motion>
    );
  }
}
const mapStateToProps = state => ({
  navOpen: state.navOpen
});
export default connect(mapStateToProps)(NavSlider);
