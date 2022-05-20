import EventsCard from "./EventsCard";

// Get events data
import EVENTS_DATA from "./EventsCard.json";

function EventsCards() {
  return (
    <>
      {EVENTS_DATA.map((eventData) => <EventsCard {...eventData} />)}
    </>
  );
}

export default EventsCards;