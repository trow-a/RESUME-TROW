import React from "react";

import Snow from "./components/Snow";
import NavSection from "./sections/navSection";
import TitleSec from "./sections/TitleSec";
import AboutSec from "./sections/AboutSec";
import SkillSec from "./sections/SkillSec";

import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeSwitcher>
          <Snow />
          <NavSection />
          <TitleSec />
          <AboutSec />
          <SkillSec />
        </ThemeSwitcher>
      </div>
    );
  }
}
