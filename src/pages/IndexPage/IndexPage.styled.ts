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

  @media screen and (max-width: 1000px) and (min-width: 801px) {
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

  display:flex;
  flex-direction:column;
  justify-content:center;
  height: 100%;
  
  img{
    margin-bottom: 5vh;
  }
  @media screen and (min-width: 991px) {
    width: 60%;
    padding-right: 2.5%
    height: 100%;

    img {
      width: 550px;
    }
  }

  @media screen and (max-width: 990px) and (min-width: 784px) {
    width: 100%
    height: 60%;

    img {
      width: 700px;
    }
  }
  
  @media (max-width: 783px) {
    height: 60%;
    width: 100%;
    img {
      width: 90%;
      z-index: -1;
    }
  }

`;

export const EventGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  padding: 0;
  justify-content: space-between;

  background-color: rgb(29, 96, 157, 0.25);
  border: none;
  border-radius: 1rem;

  @media screen and (max-width: 990px) {
    width: 100%;
    margin: 0;
  }
`;

export const SponsorsScreen = styled(Screen)`
  display: flex;
  min-height: 0;
  padding: 4vw;
  color: #183249;

  @media screen and (min-width: 991px) {
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 990px) {
    padding: 30px;
    flex-direction: column;
  }
`;

export const JoinScreen = styled.div`
  display: grid;
  grid-template-columns: 800px auto;
  background-color: #ffd166;
  min-height: 0;

  overflow: hidden;

  @media screen and (max-width: 1000px) {
    grid-template-rows: 1fr 250px;
    grid-template-columns: 100vw;
  }

  > div {
    padding: 50px 75px;

    @media screen and (max-width: 600px) {
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

export const EventScreen = styled.div`
  min-height: 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 75px;

  overflow: hidden;

  @media (max-width: 700px) {
    padding: 50px 30px;
  }
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0 20px 0;
  overflow: hidden;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 40px;
    justify-content: flex-end;
  }
  .eventInfoContainer {
    justify-content: center;
  }
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
