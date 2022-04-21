import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { EventsScreen } from "./EventsPage.styled";
function EventsPage() {
  return (
    <>
      <NavBar hasBg={true} />
      <EventsScreen>Events!!</EventsScreen>
      <Footer />
    </>
  );
}

export default EventsPage;
