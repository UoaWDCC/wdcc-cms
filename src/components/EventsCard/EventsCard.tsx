import EventDetails from "../EventDetails";
import { Container } from "./EventsCard.styled";

function EventsCard({ data }: { data: EventDetails }) {
  return (
    <Container>
      <img src="" alt="" />
      <div className="eventInfoContainer">
        <div className="eventSchedule">
          <h2>{data.schedule.date}</h2>
        </div>
        <div className="eventSummary">
          <p>{data.series}</p>
          <h1>{data.title}</h1>
          <p>{data.location}</p>
          <p>{data.schedule.time}</p>
        </div>
      </div>
    </Container>
  );
}

export default EventsCard;
