import React from "react";
import { ProfileStyle } from "./style";

function Profile() {
  return (
    <ProfileStyle>
      <div>
        <img
          src="https://www.toptrendsguide.com/wp-content/uploads/2021/06/Hottest-Guys-560x420.jpg"
          alt="User Profile Photo"
        />
        <p>John Carter</p>
      </div>
    </ProfileStyle>
  );
}

export default Profile;
