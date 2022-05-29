import styled from "styled-components";

export const ProfileStyle = styled.div`
  background-color: var(--color-secondary);
  height: 15vh;
  width: 25vw;
  margin: 3rem;
  border: 1px var(--color-border) solid;
  div{
    width: auto;
    display: flex;
    align-items: center;
  }
  img{
    width: 3rem;
    border-radius: 50%;
    height: 3rem;
    padding: 1rem;
  }
  p{
    font-weight: 600;
    color: var(--color-accent);
  }
`;
