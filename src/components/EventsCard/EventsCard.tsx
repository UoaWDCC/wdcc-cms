import { Container } from "./EventsCard.styled";

interface EventsCardProps {
  photo: any;
  month: string;
  date: string;
  series: string;
  title: string;
  location: string;
  time: string;
}

function EventsCard({
  photo,
  month,
  date,
  series,
  title,
  location,
  time,
}: EventsCardProps) {
  return (
    <Container>
      <div>
        <img src={photo} />
      </div>
      <div className="text">
        <div className="black">
          <p>{month}</p>
          <h2>{date}</h2>
        </div>
        <div className="blue">
          <p>{series}</p>
          <h1>{title}</h1>
          <p>{location}</p>
          <p>{time}</p>
        </div>
      </div>
    </Container>
  );
}

export default EventsCard;
