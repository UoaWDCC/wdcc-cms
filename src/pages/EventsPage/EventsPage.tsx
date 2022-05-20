import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Screen from "../../styles/Screen";
import EventsCards from "../../components/EventsCard/EventsCards";

function EventsPage() {
  return (
    <>
      <NavBar hasBg={true} />
      <Screen>Events!!</Screen>
      <EventsCards />
      <Footer />
    </>
  );
}

export default EventsPage;
