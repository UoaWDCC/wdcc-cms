import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Screen from "../../styles/Screen";
import EventsCard from "../../components/EventsCard/EventsCard";
import EventDetails from "../../components/EventDetails";
import { Container } from "./EventsPage.styled";

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
        <Container>
          <EventsCard
            photo={details.photo}
            date={details.date}
            subtitle={details.series}
            title={details.title}
            location={details.location}
            time={details.time}
          />
          <EventsCard
            photo={details.photo}
            date={details.date}
            subtitle={details.series}
            title={details.title}
            location={details.location}
            time={details.time}
          />
          <EventsCard
            photo={details.photo}
            date={details.date}
            subtitle={details.series}
            title={details.title}
            location={details.location}
            time={details.time}
          />
          <EventsCard
            photo={details.photo}
            date={details.date}
            subtitle={details.series}
            title={details.title}
            location={details.location}
            time={details.time}
          />
        </Container>
      </Screen>

      <Footer />
    </>
  );
}

export default EventsPage;
