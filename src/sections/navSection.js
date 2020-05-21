import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

import "./navSection.css";

export default class NavSection extends React.Component {
  render() {
    const { switchTheme } = this.context;

    return (
      <div className="navWrapper">
        <Link
          activeClass="active"
          to="titlesec"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          delay={0}
          style={{ cursor: "pointer", height: "15px" }}
        >
          <h2 className="nav">
            <ion-icon name="home-outline"></ion-icon>
          </h2>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={700}
          delay={0}
          style={{ cursor: "pointer", height: "15px" }}
        >
          <h2 className="nav">About</h2>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={85}
          duration={700}
          delay={0}
          style={{ cursor: "pointer", height: "15px" }}
        >
          <h2 className="nav">Skills</h2>
        </Link>
        <h2 
          onClick={(e) => switchTheme()}
          className="themeswitcher"
          style={{
            cursor: "pointer",
            position: "fixed",
            right: "5px",
            margin: "15px",
          }}
        >
          <ion-icon  name="brush-outline"></ion-icon>
          <h6 style={{marginTop:"-15px"}}>color me</h6>
        </h2>
      </div>
    );
  }
}

NavSection.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func,
};
