import React from "react";
import "./bounce.css";

const UpIcon = (props) => {
  return (
    <div
      className="bounce-up"
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0",
        transform: "translateY(-20vh)",
      }}
    >
      <h1>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </h1>
    </div>
  );
};

export default UpIcon;
