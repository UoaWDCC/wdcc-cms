import styled from "styled-components";
import Screen from "../../styles/Screen";

export const BannerBottom = styled.div`
  background-color: #183249;

  margin: 0;

  padding: 20px;

  p {
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
    font-size: 0.9rem;
    text-align: center;
  }
`;
export const Container = styled(Screen)`
  min-height: 0;
  text-align: center;

  --light-blue: rgb(51, 121, 185);
  --dark-blue: rgb(29, 96, 157);
  background: linear-gradient(180deg, var(--light-blue), var(--dark-blue));

  color: white;

  img {
    width: 200px;
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      display: inline-block;
      font-size: 1.5rem;
      margin: 0 15px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .discord-container {
    box-sizing: border-box;
    width: 350px;
    margin: 30px auto;

    h4 {
      margin: 0 0 20px 0;
    }

    img {
      border: 2px solid white;
      border-radius: 20px;
      padding: 15px;

      cursor: pointer;

      transition-duration: 0.3s;

      &:hover {
        transition-duration: 0.3s;
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }
`;
