import { Container } from "./EventsCard.styled";

interface Schedule {
  month: string,
  date: string,
  time: string
}

// Single event data
export interface EventData {
  photo: string;
  schedule: Schedule;
  series: string;
  title: string;
  location: string; 
}

function EventsCard(eventData : EventData) {
  return (
    <Container>
      <div className="eventInfoContainer">
        <div className="eventSchedule">
          <p>{eventData.schedule.month}</p>
          <h2>{eventData.schedule.date}</h2>
        </div>
        <div className="eventSummary">
          <p>{eventData.series}</p>
          <h1>{eventData.title}</h1>
          <p>{eventData.location}</p>
          <p>{eventData.schedule.time}</p>
        </div>
      </div>
    </Container>
  );
}

export default EventsCard;