import styled from "styled-components";

export const StoryStyle = styled.div`
  width: auto;
  padding-top: 12vh;
  display: flex;
  justify-content: center;

  .story__wrapper {
    width: 40vw;
  }

  .left-col {
    display: flex;
    flex-direction: column;
  }

  .story__statusWrapper {
    height: 120px;
    background: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    display: flex;
    align-items: center;
    overflow: hidden;
    overflow-x: auto;
  }

  .story__statusWrapper::-webkit-scrollbar {
    display: none;
  }

  .story__statusCard {
    flex: 0 0 auto;
    width: 80px;
    max-width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
  }

  .story__profilePic {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    padding: 3px;
    background: linear-gradient(rgb(255, 230, 0), rgb(255, 0, 128) 80%);
  }

  .story__profilePic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .story__username {
    width: 100%;
    overflow: hidden;
    text-align: center;
    font-size: 12px;
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.5);
  }
  @media only screen and (max-width: 500px) {
  padding: 0;
  .story__statusWrapper {
    max-width: 90vw;
  }
  .story__wrapper {
    width: 90vw;
  }
  }
`;
