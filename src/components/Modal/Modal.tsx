import { useEffect, useRef } from "react";
import {
  ModalBackground,
  ModalWrapper,
  ModalImg,
  ModalContent,
  ModalButton,
  Information,
  Container,
} from "./Modal.styled";

import {
  faXmark,
  faLocationDot,
  faClockFour,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  information: string;
  photo: string;
  schedule: {
    date: string;
    time: string;
  };
  subtitle: string;
  title: string;
  location: string;
}

const Modal = ({
  open,
  handleClose,
  information,
  photo,
  schedule,
  subtitle,
  title,
  location,
}: ModalProps) => {
  // Logic which handles modal close upon clicking the background
  const modalRef: any = useRef();
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      handleClose();
    }
  };

  // Handle logic to disable scroll on the background when the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    <>
      {open && (
        <ModalBackground ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            {/* Close Button */}
            <ModalButton icon={faXmark} onClick={handleClose} />

            {/* Title */}
            <ModalContent>
              <h5>{subtitle}</h5>
              <h1>{title}</h1>
            </ModalContent>

            {/* Image */}
            <ModalImg src={photo} />

            {/* Contains location, time and extended details */}
            <Container>
              <Information>
                <div>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {location}
                </div>
                <div>
                  <FontAwesomeIcon icon={faClockFour} />
                  {schedule.date + "," + schedule.time}
                </div>
              </Information>
              <p>{information}</p>
            </Container>
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
