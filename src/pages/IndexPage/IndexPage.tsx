import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Screen from "../../styles/Screen";

// Ignoring this as this package is old and does not have typings
// @ts-ignore
import "particles.js";

import combinedBanner from "../../resources/combined_banner.png";
import InitiativeCard from "../../components/InitiativeCard/InitiativeCard";
import EventsCards from "../../components/EventsCard/EventsCards";

import projectIcon from "../../resources/wdcc_icon_project.png";
import eventIcon from "../../resources/wdcc_icon_event.png";
import workshopIcon from "../../resources/wdcc_icon_workshop.png";
import computerIcon from "../../resources/computer_icon.png";
import sponsors from "../../resources/wdcc_sponsors.png";

import {
  Splash,
  SplashContent,
  InitiativeContainer,
  SponsorGrid,
  SponsorsScreen,
  JoinScreen,
  JoinButton,
  InitiativesScreen,
  InitiativesScreenGradient,
  InitiativesScreenContent,
  InitiativesButton,
  ParticlesJS,
  EventScreen,
  EventContainer,
} from "./IndexPage.styled";

const DATA = require("./Index.json");
export default function IndexPage() {
  // @ts-ignore
  particlesJS.load("particles-js", "resources/particlesjs-config.json");

  return (
    <>
      <NavBar />

      <Splash>
        <ParticlesJS id={"particles-js"} />
        <SplashContent>
          <div>
            <h2>{DATA.splashYellowTitle}</h2>
            <h1>{DATA.splashTitle}</h1>
            <p>{DATA.splashSubtitle}</p>
          </div>

          <img src={computerIcon} alt={"Computer icon (graphic)"} />
        </SplashContent>
      </Splash>

      <SponsorsScreen>
        <SponsorGrid>
          <h1>{DATA.sponsorText}</h1>
          <img src={sponsors} alt={"WDCC Sponsors 2022"} />
        </SponsorGrid>
      </SponsorsScreen>

      <JoinScreen>
        <div>
          <h1>Become a member for 2022</h1>
          <div>
            {DATA.joinDescription.map((item: string) => (
              <p>{item}</p>
            ))}
          </div>
          <JoinButton href={"https://join.wdcc.co.nz"}>Join WDCC</JoinButton>
        </div>

        <img src={combinedBanner} alt={"Hackathon photos"} />
      </JoinScreen>

      <EventScreen>
        <div>
          <h1>Upcoming events</h1>
          <EventContainer>
            <EventsCards />

          </EventContainer>
        </div>
      </EventScreen>

      <InitiativesScreen>
        <InitiativesScreenGradient />
        <InitiativesScreenContent>
          <h1>What is WDCC?</h1>

          <p>
            WDCC (Web Development & Consulting Club Incorporated) is a
            not-for-profit organisation, founded by two students at the
            University of Auckland.
          </p>

          <p>
            WDCC aims to bridge the gap between university knowledge and
            real-world industry practices. We run projects with real-world
            clients that solve real-world problems, generally for NFP
            organisations or other student clubs who don't have the funding to
            fund a solution themselves.
          </p>

          <p>
            Projects could also be to develop own open-source tools to better
            support the development community.
          </p>
          <p>
            To help our members and the wider student community improve their
            skills and gain more benefits from the projects, we also hold
            workshops that help to upskill.
          </p>

          <InitiativesButton href={"/team"}>The team</InitiativesButton>
        </InitiativesScreenContent>
      </InitiativesScreen>

      <Screen>
        <h1>What do we do?</h1>
        <InitiativeContainer>
          <InitiativeCard
            title={"Hands-On Projects"}
            description={`
            We provide opportunities for students to gain industry experience by establishing pro bono projects on website design and development.
            <br /><br />
            These projects help students to learn more about web development in a collaborative environment whilst also helping NFP / Charitable organisations with a tech solution.
            `}
            photo={projectIcon}
          />
          <InitiativeCard
            title={"Workshops"}
            description={`
            
            Knowledge on web is arguably one of the most valuable skills in the tech industry. We host a range of workshops at different levels to teach members the skills they will need to participate in our projects.
            
            <br /><br />
            Some of our most popular workshops include the beginner's HTML & CSS Workshop, and the introduction to the React/MERN techstack.
            `}
            photo={workshopIcon}
          />
          <InitiativeCard
            title={"Events and Competitions"}
            description={`
            We also hold some social events for our community, bringing our industry sponsors together with students to network.
            <br /><br />
            On occasion, we also host competitions (like Hackathons and Case Competitions) for a place where students could put their skills to the test in a friendly way.
            `}
            photo={eventIcon}
          />
        </InitiativeContainer>
      </Screen>

      <Footer />
    </>
  );
}
