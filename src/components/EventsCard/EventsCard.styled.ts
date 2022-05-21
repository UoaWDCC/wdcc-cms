import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex; 
  flex-direction: column;
  width: 30%;
  padding-top: 100%;
  align-items: stretch;
  align-content: flex-start;
  `
export const Image = styled.div`
  margin: 0;
  padding: 0;
  height: 30%;
img {
  width: 100%;
  object-fit: contain;
}
`
export const EventInfo = styled.div`

  margin: 0;
  padding: 0;
  height: 70%;
  display: flex;
  flex-direction: row;
  color: white;
  
`

export const EventSchedule = styled.div`
h2 {
  text-align: center;
  font-size: 1.2rem;
}
  background-color: black;
  width : 30%;
  height: fit;
`

export const EventSummary = styled.div`

  background-color:rgb(29, 96, 157);
  width : 70%;
  height: 100%;
  p {
    padding: 1rem;
    text-align: left;
    line-height: 1rem;
  white-space: initial;

  }
  h1 {
    padding: 1rem;
    font-size: 1.5rem;
  }
`
