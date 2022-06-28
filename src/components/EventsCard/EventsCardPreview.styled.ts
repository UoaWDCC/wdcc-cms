import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 25rem;
  display: flex;
  flex-direction: column;
  max-width: 22rem;
  margin: 0.5rem 0rem;
  @media (max-width: 1280px) {
    max-width: 25rem;
    padding: 0 0.5rem 0.5rem 0;
  }
  @media (max-width: 950px) {
    max-width: 20rem;
    max-height: 20rem;
    padding: 0 0.5rem 0.5rem 0;
  }
  @media (max-width: 783px) {
    max-width: 100rem;
    padding: 0 0.5rem 0.5rem 0;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const EventInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  color: white;
  width: 100%;
`;

export const EventSchedule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272727;
  width: 20%;
  height: 100%;
`;

export const EventSummary = styled.div`
  background-color: rgb(29, 96, 157);
  width: 80%;
  height: 100%;
  // contains subsection, title and loc
  div {
    padding: 1.75rem 0 3rem 1.75rem;
  }
  @media (max-width: 1280px) {
    div {
      padding: 0.5rem 0rem 2.5rem 1rem;
    }
    h6 {
      padding: 0 1rem !important;
    }
  }
  div :nth-child(-n + 2) {
    text-transform: uppercase;
  }
  div p {
    text-transform: capitalize;
    text-align: left;
    line-height: 0.5rem;
    font-size: 0.9rem;
  }
  div :nth-child(odd) {
    color: rgba(256, 256, 256, 0.45);
    font-size: 0.75rem;
  }
  h6 {
    color: white;
    font-size: 0.8rem;
    font-weight: normal;
    padding: 0 2rem;
  }
`;
