import { useState } from "react";
import EventDetails from "../EventDetails";
import Modal from "../Modal/Modal";
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
  handleOpen: () => void;
}

function EventsCard({
  photo,
  date,
  subtitle,
  title,
  location,
  time,
  handleOpen,
}: EventsCardProps) {
  return (
    <Container onClick={handleOpen}>
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
