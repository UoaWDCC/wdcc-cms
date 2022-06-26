// import { Container } from "./EventsCard.styled";

// interface Schedule {
//   month: string;
//   date: string;
//   time: string;
// }

// // Single event data
// export interface EventData {
//   photo: string;
//   schedule: Schedule;
//   series: string;
//   title: string;
//   location: string;
// }

// function EventsCard(eventData: EventData) {
//   return (
//     <Container>
//       <div className="eventInfoContainer">
//         <div className="eventSchedule">
//           <p>{eventData.schedule.month}</p>
//           <h2>{eventData.schedule.date}</h2>
//         </div>
//         <div className="eventSummary">
//           <p>{eventData.series}</p>
//           <h1>{eventData.title}</h1>
//           <p>{eventData.location}</p>
//           <p>{eventData.schedule.time}</p>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default EventsCard;
import EventDetails from "../EventDetails";
import {
  Container,
  EventInfo,
  EventSchedule,
  EventSummary,
  Image,
} from "./EventsCard.styled";

interface EventsCardProps {
  photo: string;
  date: string;
  subtitle: string;
  title: string;
  location: string;
  time: string;
}

function EventsCard({
  photo,
  date,
  subtitle,
  title,
  location,
  time,
}: EventsCardProps) {
  return (
    <Container>
      <Image src={require(`../../resources${photo}`).default} alt="" />
      <EventInfo>
        <EventSchedule>
          <h4>{date}</h4>
        </EventSchedule>
        <EventSummary>
          <div>
            <p>{subtitle}</p>
            <p>{title}</p>
            <p>{location}</p>
          </div>
          <h6>{time}</h6>
        </EventSummary>
      </EventInfo>
    </Container>
  );
}

export default EventsCard;
