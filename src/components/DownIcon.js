import React from "react";

const DownIcon = (props) => {
  return (
    <div
      
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "-4vh",
        transform: "translateY(-10vh)",
      }}
    >
      <h1 className="bounce-down">
        <ion-icon name="chevron-down-outline"></ion-icon>
      </h1>
    </div>
  );
};

export default DownIcon;
