import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  background-color: #f4f4f4;
  margin: 2rem;
  min-height: 100vh;
  @media (max-width: 600px) {
    margin: 0;
    background-color: white;
    padding: 1rem;
  }
`;
