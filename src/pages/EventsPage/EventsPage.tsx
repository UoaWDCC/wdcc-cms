import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Screen from "../../styles/Screen";
import EventsCard from "../../components/EventsCard/EventsCard";
import EventDetails from "../../components/EventDetails";

const DATA = require("./EventsCard.json");
function EventsPage() {
  const details: EventDetails = {
    photo: DATA.photo,
    date: DATA.date,
    time: DATA.time,
    series: DATA.series,
    title: DATA.title,
    location: DATA.location,
  };
  return (
    <>
      <NavBar hasBg={true} />
      <Screen>
        Events!!
        <EventsCard data={details} />
      </Screen>

      <Footer />
    </>
  );
}

export default EventsPage;
