import React, { Component } from "react";
import { openNav, closeNav } from "../actions";
import { connect } from "react-redux";
import chapters from "../chapters";
import { SET_NAV_LIST, setNavList } from "../actions";
import { Link } from "react-router-dom";
import "../css/navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  getAllChapters() {
    const chapNames = Object.keys(chapters);
    const navList = {};
    chapNames.forEach(chapName => {
      const lessonObj = {};
      chapters[chapName].lessons.forEach(lesson => {
        lessonObj[lesson.test.name] = "locked";
      });
      navList[chapters[chapName].title] = lessonObj;
    });
    this.props.dispatch(setNavList(navList));
    // this creates an object with each lesson-test having a value of null.
  }

  componentDidMount() {
    this.getAllChapters();
  }
  toggleOpen() {
    this.props.navOpen
      ? this.props.dispatch(closeNav())
      : this.props.dispatch(openNav());
  }
  render() {
    return (
      <div className="toggleNav" style={this.props.style}>
        <nav className="navigation">
          {Object.entries(this.props.navList).map(chapter => (
            <div key={chapter[0]}>
              <h3>{chapter[0]}</h3>
              {Object.entries(chapter[1]).map((lesson, i) => (
                <Link
                  to={`/chapters/${chapter[0].replace(" ", "_")}/${i}`}
                  key={i}
                >
                  <p className={lesson[1]} key={lesson[0]}>
                    {lesson[0]}
                  </p>
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="nav-opener" onClick={this.toggleOpen}>
          {this.props.navOpen ? "⇧" : "⇩"} score card
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myReportCard: state.myReportCard,
  navList: state.navList,
  navOpen: state.navOpen
});

export default connect(mapStateToProps)(Navigation);
