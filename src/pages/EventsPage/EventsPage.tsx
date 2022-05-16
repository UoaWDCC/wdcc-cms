import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Screen from "../../styles/Screen";
import EventsCard from "../../components/EventsCard/EventsCard";

function EventsPage() {
  return (
    <>
      <NavBar hasBg={true} />
      <Screen>Events!!</Screen>
      <EventsCard></EventsCard>
      <Footer />
    </>
  );
}

export default EventsPage;
