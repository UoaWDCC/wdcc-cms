import EventDetails from "../EventDetails";
import { Container } from "./EventsCard.styled";
import { EventInfo } from "./EventsCard.styled";
import { EventSchedule } from "./EventsCard.styled";
import { EventSummary } from "./EventsCard.styled";
import { Image } from "./EventsCard.styled";

function EventsCard({ data }: { data: EventDetails }) {
  console.log(data);

  return (
    <Container>
      <Image>
        <img src={require(`../../resources${data.photo}`).default} alt="" />
      </Image>
      <EventInfo>
        <EventSchedule>
          <h2>{data.date}</h2>
        </EventSchedule>
        <EventSummary>
          <p>{data.series}</p>
          <h1>{data.title}</h1>
          <p>{data.location}</p>
          <p>{data.time}</p>
        </EventSummary>
      </EventInfo>
    </Container>
  );
}

export default EventsCard;
