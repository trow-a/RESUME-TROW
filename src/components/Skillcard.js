import React from "react";

import "./Skillcard.css";


export default class SkillCard extends React.Component {
  render() {
    const { Skill }  = this.props;
    return (
      <div className="card">
        <div className="image-wrapper">
          <img  alt="" className="card-images" src={Skill.Content.Image}/>
        </div>
        <div className="skill-title-wrapper">
          <h2> {Skill.Content.Title}</h2>
        </div>
      </div>
    );
  }
}
