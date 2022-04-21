import styled from "styled-components";
import Screen from "../../styles/Screen";
import initiativesBackground from "../../resources/about_grad.png";

export const AboutDescription = styled.div`
  max-width: 100%;
  width: 550px;

  line-height: 2rem;
  z-index: 2;

  position: relative;
`;

export const WhereScreen = styled(Screen)`
  min-height: auto;
  background-color: #ffd166;
`;

export const PhotoGrid = styled.div`
  height: 100%;
  max-width: 100vw;
  background-color: #ffd166;

  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(8, auto);

  @media (max-width: 1200px) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(5, auto);
  }

  @media (max-width: 800px) {
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(3, auto);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const TeamScreen = styled(Screen)`
  background-image: url(${initiativesBackground});
  background-size: cover;
  background-position: bottom right;

  h1 {
    z-index: 1;
  }
`;

export const TeamPhotoScreen = styled.div``;

export const ExecList = styled.ul`
  columns: 3;
  list-style: none;
  padding: 0;
  max-width: 1000px;

  @media (max-width: 650px) {
    columns: 2;
  }

  @media (max-width: 400px) {
    columns: 1;
  }

  li {
    font-size: 0.9rem;
    font-weight: bold;

    &:nth-child(2n) {
      margin-top: 2px;

      font-weight: normal;
      margin-bottom: 20px;
      list-style: none;
      font-size: 1.2rem;
    }
  }
`;

export const TeamScreenGradient = styled.div`
  background: linear-gradient(
    135deg,
    #ffffff,
    rgba(255, 255, 255, 0.59),
    rgb(0, 0, 0, 0)
  );

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;

  min-width: 1000px;
`;
