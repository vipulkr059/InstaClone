import styled from "styled-components";

export const PostStyle = styled.div`
  height: auto;
  margin: 5px 0px;
  border: 1px var(--color-border) solid;
  .post {
    width: 100%;
    /* height: auto;
    background: #fff;
    border: 1px solid #dfdfdf;
    margin-top: 40px; */
    display: flex;
    flex-direction: column;
  }

  .info {
    width: auto;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .info .username {
    width: auto;
    font-weight: bold;
    color: #000;
    font-size: 14px;
    margin-left: 10px;
  }

  .info .options {
    height: 10px;
    cursor: pointer;
  }

  .info .user {
    display: flex;
    align-items: center;
  }

  .info .profile-pic {
    height: 40px;
    width: 40px;
    padding: 0;
    background: none;
  }

  .info .profile-pic img {
    border: none;
    border-radius: 50%;
  }

  .post-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .post-content {
    width: auto;
    padding: 15px;
  }

  .likes {
    font-weight: bold;
    margin: 0;
  }

  .description {
    margin: 10px 15px 0px 0px;
    font-size: 14px;
    line-height: 20px;
  }

  .description span {
    font-weight: bold;
    margin-right: 5px;
  }

  .post-time {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    margin: 2px;
  }

  .comment-wrapper {
    width: auto;
    height: 35px;
    border-radius: 1px solid #dfdfdf;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }

  .comment-wrapper .icon {
    height: 30px;
  }

  .comment-box {
    width: 80%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
  }

  .comment-btn,
  .action-btn {
    width: 70px;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    text-transform: capitalize;
    font-size: 16px;
    color: rgb(0, 162, 255);
    opacity: 0.5;
    /* z-index: -1; */
  }

  .reaction-wrapper {
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: -20px;
    align-items: center;
  }

  .reaction-wrapper svg {
    height: 25px;
    margin: 0;
    margin-right: 20px;
  }

  .reaction-wrapper .icon.save {
    margin-left: auto;
  }
  .comment {
    overflow-y: scroll;
    height: 4rem;
    line-height: 0;
    img {
      width: 1.5rem;
      border-radius: 50%;
      height: 1.5rem;
      padding: 1rem;
    }
  }
`;
