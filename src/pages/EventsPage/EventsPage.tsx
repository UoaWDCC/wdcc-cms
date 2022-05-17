import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import NavBar from "../../components/NavBar/NavBar";
import Screen from "../../styles/Screen";

function EventsPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal handleClose={handleClose} open={open} />

      <NavBar hasBg={true} />
      <button onClick={handleOpen}>click me to open modal!</button>
      <Screen>Events!!</Screen>

      <Footer />
    </>
  );
}

export default EventsPage;
