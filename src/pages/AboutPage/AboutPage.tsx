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

const execNames = [
  "joel_hutchinson.jpg",
  "daniel_torrey.jpg",
  "raymond_feng.jpg",
  "dhwani_thakar.jpg",
  "ellen_zhang.jpg",
  "eve_zhang.jpg",
  "james_you.jpg",
  "alex_zhuang.jpg",
  "jason_ko.jpg",
  "lance_delos_reyes.png",
  "lucy_zhu.jpg",
  "brendan_zhou.jpg",

  "tony_cui.png",
  "youxiang_lei.jpg",
  "josh_feng.jpg",
];

function AboutPage() {
  return (
    <>
      <NavBar hasBg={true} />

      <TeamScreen>
        <TeamScreenGradient />

        <div>
          <AboutDescription>
            <h1>Who we are</h1>
            Web Development & Consulting Club Incorporated started as student
            club at the University of Auckland in 2019. Since then, we have
            expanded to a membership base of 450+ members, serving students
            across Auckland from both UoA and AUT. We are also an incorporated
            society with charities status, and you can view our recent annual
            filings here{" "}
            <a href="https://register.charities.govt.nz/CharitiesRegister/ViewCharity?accountId=71489b06-782a-ec11-8d9e-00155d5731b1&searchId=b52c8156-ff6d-47db-9579-fa2522f83201">
              on the charities register
            </a>
            .
          </AboutDescription>
        </div>
      </TeamScreen>

      <WhereScreen>
        <h1>Your team for 2022</h1>

        <ExecList>
          <li>President</li>
          <li>Raymond Feng</li>

          <li>Vice President</li>
          <li>Joel Hutchinson</li>

          <li>Treasurer</li>
          <li>Daniel Torrey</li>

          <li>Secretary</li>
          <li>Brendan Zhou</li>

          <li>Operations Director</li>
          <li>Ellen Zhang</li>

          <li>Marketing Director</li>
          <li>Dhwani Thakar</li>

          <li>Sponsorships & Outreach Director</li>
          <li>Alex Zhuang</li>

          <li>Consulting Director</li>
          <li>Youxiang Lei</li>

          <li>Projects Director</li>
          <li>James You</li>
          <li>Associate Projects Director</li>
          <li>Jason Ko</li>
          <li>Marketing Executive</li>
          <li>Tony Cui</li>
          <li>Marketing Executive</li>
          <li>Lucy Zhu</li>
          <li>General Executive</li>
          <li>Lance Delos Reyes</li>
          <li>General Executive</li>
          <li>Josh Feng</li>
          <li>General Executive</li>
          <li>Eve Zhang</li>
        </ExecList>

        <p>
          Wanting to join our team? Get in touch with us at{" "}
          <a href={"mailto:secretary@wdcc.co.nz"}>secretary@wdcc.co.nz</a>
        </p>
      </WhereScreen>

      <TeamPhotoScreen>
        <PhotoGrid>
          {execNames.map((it) => {
            return <img src={`/resources/wdcc_photos/${it}`} alt={it} />;
          })}
        </PhotoGrid>
      </TeamPhotoScreen>

      <Footer />
    </>
  );
}

export default AboutPage;
