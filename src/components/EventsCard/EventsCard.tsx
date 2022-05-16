import { Container } from "./EventsCard.styled";

const DATA = require("./EventsCard.json");
function EventsCard() {
  return (
    <Container>
      <div className="eventInfoContainer">
        <div className="eventSchedule">
          <p>{DATA.schedule.month}</p>
          <h2>{DATA.schedule.date}</h2>
        </div>
        <div className="eventSummary">
          <p>{DATA.series}</p>
          <h1>{DATA.title}</h1>
          <p>{DATA.location}</p>
          <p>{DATA.schedule.time}</p>
        </div>
      </div>
    </Container>
  );
}

export default EventsCard;
