import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import {
  AboutDescription,
  WhereScreen,
  PhotoGrid,
  TeamScreen,
  TeamPhotoScreen,
  ExecList,
  TeamScreenGradient,
} from "./AboutPage.styled";
import { createGlobalStyle } from "styled-components";

interface TeamMember {
  name: string,
  title: string,
  photoFileName: string,
}

const DATA = require("./About.json");

function AboutPage() {
  return (
    <>
      <NavBar hasBg={true} />
      <TeamScreen>
        <TeamScreenGradient />
        <div>
          <AboutDescription>
            <h1>{DATA.mainTitle}</h1>
            {DATA.mainDescription}
            <a href={DATA.mainLink}>{DATA.mainLinkText}</a>.
          </AboutDescription>
        </div>
      </TeamScreen>
      <WhereScreen>
        <h1>{DATA.secondaryTitle}</h1>
        <ExecList>
          {DATA.teamMembers.map((item: TeamMember) => (
            <>
              <li key={item.title}>{item.title}</li>
              <li key={item.name}>{item.name}</li>
            </>
          ))}
        </ExecList>
        <p>
          {DATA.teamDescription}
          <a href={`mailto:${DATA.email}`}>{DATA.email}</a>
        </p>
      </WhereScreen>
      <TeamPhotoScreen>
        <PhotoGrid>
          {DATA.teamMembers.map((item: TeamMember) => (
            <img src={`/resources/wdcc_photos/${item.photoFileName}`} alt={item.photoFileName} />
          )
          )}
        </PhotoGrid>
      </TeamPhotoScreen>
      <Footer />
    </>
  );
}

export default AboutPage;
