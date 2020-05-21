import React from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/Skillcard";
import { Link } from "react-scroll";
import UpIcon from "../components/UpIcon";

import "./SkillSec.css";

export default class Sec3 extends React.Component {
  render() {
    return (
      <div>
        <Fullpage className="sec3">
          <h1 className="title3"> {data.Sections[1].Title} </h1>
          <div>
            <h4>
              {data.Sections[1].Items.map((eachSkill) => {
                return <SkillCard Skill={eachSkill} />;
              })}
            </h4>
          </div>
        </Fullpage>
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
          <UpIcon className="iconstar" />
        </Link>
      </div>
    );
  }
}
