import styled from "styled-components";

export const Main = styled.div`
  aside {
    height: 100vh;
    width: 100vw;
    /* background-color: blue; */
    position: fixed;
    left: 55vw;
    top: 8.4vh;
  }
  @media only screen and (max-width: 500px) {
    aside {
      display: none;
    }
    section {
      width: 90vw !important;
      margin: 7vh 0px !important;
      padding: 1rem;
    }
  }
`;
