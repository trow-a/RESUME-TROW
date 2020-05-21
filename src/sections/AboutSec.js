import React from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

import "./AboutSec.css";

export default class Sec2 extends React.Component {
  render() {
    return (
      <div>
        <Fullpage className="sec2">
          <h1 className="title2">{data.Sections[0].Title}</h1>
          <div>
            <h1 className="sub2">{data.Sections[0].Items[0].Content}</h1>
            <h2 className="sub2">{data.Sections[0].Items[1].Content}</h2>
            <h2 className="sub2">{data.Sections[0].Items[2].Content}</h2>
            <h2 className="sub2">{data.Sections[0].Items[3].Content}</h2>
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={700}
          delay={0}
          style={{ cursor: "pointer", height: "25px" , width:"35px"}}
        >
          <DownIcon />
        </Link>
        <Element name="skills" className="element"></Element>
      </div>
    );
  }
}
