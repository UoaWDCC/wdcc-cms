import { BannerBottom, Container } from "./Footer.styled";
import discordJoinBtn from "../../resources/discord-min.png";

const DATA = require("./Footer.json");
function Footer() {
  return (
    <>
      <Container>
        <div className={"discord-container"}>
          <h4>{DATA.footerMsg}</h4>
          <a
            href={DATA.discordLink}
            target={DATA.linkTarget}
            rel={DATA.linkRel}
          >
            <img src={discordJoinBtn} alt={"Join on discord button"} />
          </a>
        </div>

        <ul>
          <li>
            <a
              href={DATA.linkedinLink}
              target={DATA.linkTarget}
              rel={DATA.linkRel}
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href={DATA.fbLink} target={DATA.linkTarget} rel={DATA.linkRel}>
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href={DATA.igLink} target={DATA.linkTarget} rel={DATA.linkRel}>
              <i className="fab fa-instagram-square" />
            </a>
          </li>
          <li>
            <a
              href={DATA.contactEmail}
              target={DATA.linkTarget}
              rel={DATA.linkRel}
            >
              <i className="fas fa-envelope" />
            </a>
          </li>
          <li>
            <a
              href={DATA.githubLink}
              target={DATA.linkTarget}
              rel={DATA.linkRel}
            >
              <i className="fab fa-github-square" />
            </a>
          </li>
        </ul>
      </Container>

      <BannerBottom className={"banner-bottom"}>
        <p>DATA.poweredBy</p>
        <p>
          &copy; {new Date().getFullYear()} Web Development & Consulting Club
          Incorporated. All rights reserved.
        </p>
      </BannerBottom>
    </>
  );
}

export default Footer;
