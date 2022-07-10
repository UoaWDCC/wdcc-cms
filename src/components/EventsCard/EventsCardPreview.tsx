import EventDetails from "../EventDetails";
import {
  Container,
  EventInfo,
  EventSchedule,
  EventSummary,
  EventImg,
  Image,
} from "./EventsCardPreview.styled";

interface EventsCardProps {
  photo: string;
  date: string;
  subtitle: string;
  title: string;
  location: string;
  time: string;
}

function EventsCardPreview({
  photo,
  date,
  subtitle,
  title,
  location,
  time,
}: EventsCardProps) {
  return (
    <Container>
      <EventImg>
        <Image src={require(`../../resources${photo}`).default} alt="" />
      </EventImg>
      <EventInfo>
        <EventSchedule>
          <p>{date}</p>
          <p>{time}</p>
        </EventSchedule>
        <EventSummary>
          <div>
            <p>{subtitle}</p>
            <p>{title}</p>
            <p>{location}</p>
          </div>
        </EventSummary>
      </EventInfo>
    </Container>
  );
}

export default EventsCardPreview;
