import styled from "styled-components";
import OutlinedButton from "../../styles/OutlinedButton";
import initiativesBackground from "../../resources/media/HACKATHON-126.jpg";
import Screen from "../../styles/Screen";

export const Splash = styled(Screen)`
  --light-blue: rgb(49, 126, 187);
  --dark-blue: rgb(29, 96, 157);
  color: white;
  background: linear-gradient(
    180deg,
    var(--dark-blue),
    var(--light-blue),
    var(--dark-blue)
  );

  display: flex;
  align-items: center;

  min-height: ${window.innerHeight}px;
`;

export const SplashContent = styled.div`
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-left: 75px;
  margin-right: 75px;

  div {
    position: relative;
    margin-right: 300px;
    z-index: 1;
  }

  h2 {
    margin-bottom: 5px;
    color: #ffd166;
  }

  h1 {
    margin: 0 0 30px 0;
    font-size: 3rem;
  }

  p {
    max-width: 600px;
    line-height: 1.5rem;
  }

  img {
    width: 250px;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translate(0, -50%);

    z-index: 4;

    transition-duration: 0.2s;

    :hover {
      transition-duration: 0.2s;
      transform: translateY(calc(-50% - 20px));
    }
  }

  @media (max-width: 1000px) {
    margin-left: 0;
  }

  @media (max-width: 800px) {
    margin-left: 20px;

    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1rem;
    }

    div {
      margin-top: 200px;
      margin-right: 0;
    }

    img {
      width: 100px;
      top: 35%;
    }
  }
`;

export const InitiativeContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const SponsorGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;

  align-items: center;

  max-width: 1200px;

  img {
    width: 100%;
    position: relative;
    z-index: -1;
  }

  @media (max-width: 700px) {
    h1 {
      padding: 0 20px;
      margin: 0;
      font-size: 1.5rem;
    }
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    text-align: center;
  }
`;

export const SponsorsScreen = styled(Screen)`
  min-height: 0;

  color: #183249;

  @media (max-width: 700px) {
    padding: 40px 0;
  }
`;

export const JoinScreen = styled.div`
  display: grid;
  grid-template-columns: 800px auto;
  background-color: #ffd166;
  min-height: 0;

  overflow: hidden;

  @media (max-width: 1000px) {
    grid-template-rows: 1fr 250px;
    grid-template-columns: 100vw;
  }

  > div {
    padding: 50px 75px;

    @media (max-width: 600px) {
      padding: 50px 30px;
    }
  }

  justify-content: space-between;

  img {
    object-position: left;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const JoinButton = styled(OutlinedButton)`
  margin-top: 20px;

  border: 3px solid #444444;
  color: inherit;
  text-decoration: none;
`;

export const InitiativesScreen = styled(Screen)`
  background-color: rgb(49, 126, 187);
  color: white;
  background-image: url(${initiativesBackground});
  background-size: cover;
  background-position: bottom right;
`;

export const InitiativesScreenGradient = styled.div`
  background: linear-gradient(
    135deg,
    rgb(49, 126, 187),
    rgb(49, 126, 187, 0.7),
    rgb(0, 0, 0, 0)
  );
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  min-width: 1000px;
`;

export const InitiativesScreenContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 500px;
`;

export const InitiativesButton = styled(OutlinedButton)`
  color: white;
  border: 3px solid white;

  margin-top: 20px;

  &:hover {
    color: #ffd166;
    border: 3px solid #ffd166;
  }
`;

export const ParticlesJS = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 3;
`;
