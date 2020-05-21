import React from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
// import SocialIcon from "react-social-icons/dist/social-icon";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

import "./TitleSec.css";

export default class TitleSec extends React.Component {
  render() {
    return (
      <div className="sec1">
        <Element name="titlesec" className="element"></Element>
        <Fullpage>
          <h1 className="title1">{data.Title}</h1>
          <div>
            <h2 className="sub1">{data.Subtitle}</h2>
          </div>
          <div>
            <a className="icons" href={data.Links.github} >
              <ion-icon name="logo-github"></ion-icon>
            </a>

            <a className="icons" href={data.Links.Stackoverflow} >
              <ion-icon name="logo-stackoverflow"></ion-icon>
            </a>
            <a className="icons" href={data.Links.Twitter}>
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a className="icons" href={data.Links.Instagram}>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={700}
          delay={0}
          style={{ cursor: "pointer", height: "25px" ,width: "35px"}}
        >
          <DownIcon   />
        </Link>
        <Element name="about" className="element"></Element>
      </div>
    );
  }
}
