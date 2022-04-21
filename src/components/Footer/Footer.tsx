import { BannerBottom, Container } from "./Footer.styled";
import discordJoinBtn from "../../resources/discord-min.png";

function Footer() {
  return (
    <>
      <Container>
        <div className={"discord-container"}>
          <h4>Join the UoA Tech Clubs community!</h4>
          <a
            href={"https://discord.gg/9AC6xeXXzu"}
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={discordJoinBtn} alt={"Join on discord button"} />
          </a>
        </div>

        <ul>
          <li>
            <a
              href={"https://nz.linkedin.com/company/uoa-wdcc"}
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href={"https://www.facebook.com/uoa.wdcc"}
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a
              href={"https://www.instagram.com/uoa_wdcc/"}
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fab fa-instagram-square" />
            </a>
          </li>
          <li>
            <a
              href={"mailto:contact@wdcc.co.nz"}
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fas fa-envelope" />
            </a>
          </li>
          <li>
            <a
              href={"https://github.com/UoaWDCC"}
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fab fa-github-square" />
            </a>
          </li>
        </ul>
      </Container>

      <BannerBottom className={"banner-bottom"}>
        <p>Powered by WDCC using React + TypeScript</p>
        <p>
          &copy; {new Date().getFullYear()} Web Development & Consulting Club
          Incorporated. All rights reserved.
        </p>
      </BannerBottom>
    </>
  );
}

export default Footer;
