import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import NavBar from "../../components/NavBar/NavBar";
import Screen from "../../styles/Screen";

function EventsPage() {
  const [openModal, setOpenModal] = useState(false);

  const modalButton = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      {openModal && <Modal modalButton={modalButton} />}
      <NavBar hasBg={true} />
      <button onClick={modalButton}>click me to open modal!</button>
      <Screen>Events!!</Screen>

      <Footer />
    </>
  );
}

export default EventsPage;
