import styled from "styled-components";

export const Container = styled.div`
  &.dark {
    height: 140px;
    background-color: rgb(29, 96, 157);
  }

  #menu {
    position: absolute;
    left: 50px;
    top: 50px;
    color: white;
    font-size: 2rem;

    cursor: pointer;
    z-index: 10;

    @media (min-width: 1000px) {
      display: none;
    }
  }

  .hori-nav {
    position: absolute;
    top: 50px;
    right: 250px;

    list-style: none;
    padding: 0;
    margin: 0 0 0 30px;
    text-align: right;

    z-index: 10;

    @media (max-width: 1000px) {
      display: none;
    }

    li {
      &::before {
        position: absolute;
        bottom: 0;

        content: "";
        background-color: white;
        height: 2px;
        width: 0;
        transition-duration: 0.2s;
      }

      &:hover {
        &::before {
          transition-duration: 0.2s;
          width: 25px;
        }
      }
    }
  }

  li {
    position: relative;
    padding: 10px 0;
    text-align: left;
    display: inline-block;
    width: 150px;
    font-family: Montserrat, sans-serif;

    a {
      color: white;
      text-decoration: none;
      display: block;

      &.active {
        color: #ffd166;
      }

      &.highlight {
        font-weight: bold;
      }
    }
  }
`;
export const Logo = styled.img`
  position: absolute;
  top: 40px;

  // TODO: Make this dynamic
  right: 75px;

  @media (max-width: 600px) {
    right: 50px;
    width: 100px;
    top: 50px;
  }

  width: 150px;
  height: auto;

  z-index: 10;
`;
