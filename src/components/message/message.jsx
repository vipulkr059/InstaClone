import React from "react";
import { Outlet } from "react-router-dom";

function Message() {
  return (
    <div>
      <div
        style={{
          fontSize: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        MESSAGE
      </div>
    </div>
  );
}

export default Message;
