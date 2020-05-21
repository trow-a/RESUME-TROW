import React from "react";

import "./Fullpage.css";

export default class Fullpage extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={`fullpage ${this.props.className || ""}`}>{children}</div>
    );
  }
}
