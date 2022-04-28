import Faq from "react-faq-component";
import NavBar from "../../components/NavBar/NavBar";
import Screen from "../../styles/Screen";
import Footer from "../../components/Footer/Footer";
import { Container, styles } from "./FaqPage.styled";

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
const DATA = require("./Faq.json");
function FAQPage() {
  return (
    <>
      <NavBar hasBg={true} />
      <Screen>
        <Container>
          <Faq data={DATA} styles={styles} config={config} />
        </Container>
      </Screen>
      <Footer />
    </>
  );
}

export default FAQPage;
