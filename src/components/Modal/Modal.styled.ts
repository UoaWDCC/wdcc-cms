import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const ModalWrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 30;
  border-radius: 10px;
  overflow-y: auto;

@media (min-width: 576px) { 
  width:80%;
  height: 70%;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1244px) { 

  width:60%;
  height:80%;
 }
`;

export const ModalImg = styled.img`
  width: 80%;
  height: 40vh;
  background-size: cover;
  border-radius: 3rem;
  padding: 2rem;

  @media (min-width: 576px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: inline;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.3;
  color: #141414;

  h5 {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
  }
  h1 {
    text-transform: uppercase;
    margin-top: 0.2em;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const ModalButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 100;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-transform: capitalize;
  font-weight: bold;

  @media (min-width: 576px) {
    flex-direction: column;

    div {
      font-size: 1rem;
      padding: 8px 0;
    }

    div > *:first-child {
      margin-right: 1rem;
    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    div {
      font-size: 1.15rem;
    }
  }
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: #6a6666;
  }

  @media (min-width: 576px) {
    > * {
      padding: 0.25rem 0;
    }
  }

  @media (min-width: 768px) {
    padding: 0.75rem 0;
  }
`;
