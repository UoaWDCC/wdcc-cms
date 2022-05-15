import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Screen from "../../styles/Screen";
import EventsCard from "../../components/EventsCard/EventsCard";

function EventsPage() {
  return (
    <>
      <NavBar hasBg={true} />
      <Screen>Events!!</Screen>
      <EventsCard photo="" month="Apr" date="8" series="Web Dev Essentials" title="HTML/CSS Workshop" location="201-439 Eng Building" time="10am-4pm"></EventsCard>
      <Footer />
    </>
  );
}

export default EventsPage;
