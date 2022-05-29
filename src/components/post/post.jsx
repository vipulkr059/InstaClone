import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faPaperPlane,
  faSmile,
  faHeart as regfaH
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart
} from "@fortawesome/free-solid-svg-icons";


import React, { useState } from "react";
import { PostStyle } from "./style";

function Post(users) {
  const { user, images, caption } = users.users;
  const [like, setlike] = useState(0);
  const [likestate, setlikestate] = useState(false);
  const [comment, setcomment] = useState([]);
  const [allComment, setallComment] = useState(["all good"]);

  return (
    <PostStyle>
      <div className="post">
        <div className="info">
          <div className="user">
            <div className="profile-pic">
              <img src={user.profile_picture} alt="" />
            </div>
            <p className="username">{user.username}</p>
          </div>
          <img src="" className="options" alt="" />
        </div>
        <img
          src={images.standard_resolution.url}
          className="post-image"
          alt=""
        />
        <div className="post-content">
          <div className="reaction-wrapper">
            <FontAwesomeIcon
              onClick={() => {
                setlikestate(!likestate);
                likestate ? setlike(like - 1) : setlike(like + 1);
              }}
              icon={likestate ?  faHeart  :  regfaH }
              style={likestate ? { color: "red" } : { color: "black" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
          </div>
          <p className="likes">{like}</p>
          <p className="description">
            <span>{user.username}</span> {caption.text}
          </p>
          <p className="post-time">2 minutes ago</p>
          <div className="comment">
            {allComment.map((cmnt, key) => {
              return (
                <div
                  key={key}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <img
                    src="https://www.toptrendsguide.com/wp-content/uploads/2021/06/Hottest-Guys-560x420.jpg"
                    alt=""
                  />
                  <p style={{ fontWeight: "bold" }}>John Carter</p>
                  <p>{cmnt}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="comment-wrapper">
          <FontAwesomeIcon icon={faSmile} />
          <input
            type="text"
            className="comment-box"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
          />
          <button
            className="comment-btn"
            onClick={() => {
              setallComment((allComment) => [...allComment, comment]);
              setcomment("");
            }}
          >
            post
          </button>
        </div>
      </div>
    </PostStyle>
  );
}

export default Post;
