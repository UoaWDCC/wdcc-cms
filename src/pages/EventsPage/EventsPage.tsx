import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Screen from "../../styles/Screen";
import EventsCard from "../../components/EventsCard/EventsCard";
import EventDetails from "../../components/EventDetails";
import { Container } from "./EventsPage.styled";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const DATA = require("./EventsCard.json");
function EventsPage() {
  const details: EventDetails = {
    photo: DATA.photo,
    date: DATA.date,
    time: DATA.time,
    series: DATA.series,
    title: DATA.title,
    location: DATA.location,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        handleClose={handleClose}
        information={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cum."
        }
        photo={require(`../../resources/about_grad.png`).default}
        schedule={{
          date: "23rd Aug",
          time: "10am - 4pm",
        }}
        subtitle={"WEB DEV ESSENTIALS"}
        title={"HTML / CSS Workshop"}
        location={"201-439 Eng building"}
      />
      <NavBar hasBg={true} />
      <Container>
        <EventsCard
          photo={details.photo}
          date={details.date}
          subtitle={details.series}
          title={details.title}
          location={details.location}
          time={details.time}
          handleOpen={handleOpen}
        />
        <EventsCard
          photo={details.photo}
          date={details.date}
          subtitle={details.series}
          title={details.title}
          location={details.location}
          time={details.time}
          handleOpen={handleOpen}
        />
        <EventsCard
          photo={details.photo}
          date={details.date}
          subtitle={details.series}
          title={details.title}
          location={details.location}
          time={details.time}
          handleOpen={handleOpen}
        />
        <EventsCard
          photo={details.photo}
          date={details.date}
          subtitle={details.series}
          title={details.title}
          location={details.location}
          time={details.time}
          handleOpen={handleOpen}
        />
        <EventsCard
          photo={details.photo}
          date={details.date}
          subtitle={details.series}
          title={details.title}
          location={details.location}
          time={details.time}
          handleOpen={handleOpen}
        />
        <EventsCard
          photo={details.photo}
          date={details.date}
          subtitle={details.series}
          title={details.title}
          location={details.location}
          time={details.time}
          handleOpen={handleOpen}
        />
        <EventsCard
          photo={details.photo}
          date={details.date}
          subtitle={details.series}
          title={details.title}
          location={details.location}
          time={details.time}
          handleOpen={handleOpen}
        />
        <EventsCard
          photo={details.photo}
          date={details.date}
          subtitle={details.series}
          title={details.title}
          location={details.location}
          time={details.time}
          handleOpen={handleOpen}
        />
      </Container>

      <Footer />
    </>
  );
}

export default EventsPage;
