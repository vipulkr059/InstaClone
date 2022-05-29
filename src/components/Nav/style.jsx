import styled from "styled-components";

export const Nav = styled.div`
  .navbar {
    display: flex;
    justify-content: space-evenly;
    padding: 0.7rem 0rem;
    background-color: var(--color-primary);
    border: 1px solid var(--color-border);
    position: fixed;
    width: 100vw;
    align-items: center;
  }
  .navbar__list {
    margin: 0;
    display: flex;
  }
  .navbar__list__item {
    list-style: none;
  }
  .navbar svg {
    color: var(--text-color-headings);
    font-size: 1.5rem;
    margin: 0rem 0.4rem;
  }
  .navbar__search {
    outline: none;
    height: 1.4rem;
    background-color: #fafafa;
    width: 13rem;
    border-radius: 3px;
    padding: 0.2rem 1rem;
    border: 1px solid #dbdbdb;
  }
  .navbar__search::placeholder {
    color: var(--color-border);
    text-align: center;
    background-color: #fafafa;
    font-family: Open Sans, sans-serif;
  }

  .navbar__brand {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.4rem;
    line-height: 0;
  }
  .navbar__brand p {
    color: var(--text-color-headings);
  }

  @media only screen and (max-width: 500px) {
    .navbar {
      height: 0vh;
      width: 0vw;
    }
    .navbar__search {
      display: none;
    }
    .navbar__brand {
      position: fixed;
      top: 0;
      background-color: var(--color-primary);
      border: 1px var(--color-border) solid;
      width: 100vw;
      height: 9vh;
      left: 0;
    }
    .navbar__brand svg {
      position: absolute;
      left: 38vw;
      top: 3vh;
    }
    .navbar__brand p {
      padding-left: 2rem;
      text-decoration: none;
    }
    .navbar__list {
      position: fixed;
      width: 100vw;
      bottom: 0;
      justify-content: space-evenly;
      background-color: var(--color-primary);
      padding: 1rem;
      left: 0;
      border-top: 1px solid var(--color-border);
    }
  }
`;
