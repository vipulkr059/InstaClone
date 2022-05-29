import React from "react";
import { Outlet } from "react-router-dom";

function AddPost() {
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
        Add Post
      </div>
    </div>
  );
}

export default AddPost;
