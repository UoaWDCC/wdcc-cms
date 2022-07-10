import styled from "styled-components";

export const Container = styled.div`
  margin: 3% 15% 10% 15%;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const EventImg = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem 0 0 0;
`;

export const EventInfo = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  color: white;
  width: 100%;
  text-align: center;
`;

export const EventSchedule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #272727;
  width: 25%;

  p {
    margin: 1rem;
    color: white;
    font-size: 1rem;
    padding: 0 5rem;
  }
`;

export const EventSummary = styled.div`
  background-color: rgb(29, 96, 157);
  width: 75%;
  border-radius: 0 0 1rem 0;

  // contains subsection, title and loc
  div {
    padding: 1.75rem 0 3rem 1rem;
  }
  div :nth-child(-n + 2) {
    text-transform: uppercase;
  }
  div p {
    text-align: left;
    line-height: 0.7rem;
    font-size: 0.9rem;
  }
  div :nth-child(odd) {
    color: rgba(256, 256, 256, 0.45);
    font-size: 0.75rem;
  }
`;
