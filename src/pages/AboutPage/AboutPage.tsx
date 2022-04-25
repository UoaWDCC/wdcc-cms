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
          {DATA.team.map((item: string, i: any) => (
            <li key={i}>{item}</li>
          ))}
        </ExecList>
        <p>
          {DATA.teamDescription}
          <a href={`mailto:${DATA.email}`}>{DATA.email}</a>
        </p>
      </WhereScreen>
      <TeamPhotoScreen>
        <PhotoGrid>
          {DATA.teamImages.map((it: string) => {
            return <img src={`/resources/wdcc_photos/${it}`} alt={it} />;
          })}
        </PhotoGrid>
      </TeamPhotoScreen>
      <Footer />
    </>
  );
}

export default AboutPage;
