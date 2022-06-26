import EventsCard from "./EventsCard";

// Get events data
import EVENTS_DATA from "./EventsCard.json";

function EventsCards() {
  return (
    <>
      {EVENTS_DATA.map(
        (eventData, i) =>
          i < 1 && (
            <EventsCard date={""} subtitle={""} time={""} {...eventData} />
          )
      )}
    </>
  );
}

export default EventsCards;
