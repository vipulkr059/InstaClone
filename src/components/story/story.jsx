import React from "react";
import { StoryStyle } from "./style";

function Story({ data }) {
  return (
    <StoryStyle>
      <div class="story__wrapper">
        <div class="story__statusWrapper">
          {data.map((users) => {
            return (
              <div class="story__statusCard">
                <div class="story__profilePic">
                  <img src={users.user.profile_picture} alt="" />
                </div>
                <p class="story__username">{users.user.username}</p>
              </div>
            );
          })}
        </div>
      </div>
    </StoryStyle>
  );
}

export default Story;
