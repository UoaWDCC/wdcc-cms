import { BannerBottom, Container } from "./Footer.styled";
import discordJoinBtn from "../../resources/discord-min.png";
import LinkItem from "../LinkItem";

const DATA = require("./Footer.json");
function Footer() {
  return (
    <>
      <Container>
        <div className={"discord-container"}>
          <h4>{DATA.footerMsg}</h4>
          <a
            href={DATA.discord.link}
            target={DATA.discord.target}
            rel={DATA.discord.rel}
          >
            <img src={discordJoinBtn} alt={DATA.discord.alt} />
          </a>
        </div>

        <ul>
          {DATA.links.map((item: LinkItem) => (
            <li>
              <a href={item.link} target={item.target} rel={item.rel}>
                <i className={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <BannerBottom className={"banner-bottom"}>
        <p>{DATA.poweredBy}</p>
        <p>
          &copy; {new Date().getFullYear()} Web Development & Consulting Club
          Incorporated. All rights reserved.
        </p>
      </BannerBottom>
    </>
  );
}

export default Footer;
