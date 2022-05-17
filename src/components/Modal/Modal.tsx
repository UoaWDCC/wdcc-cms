import { useEffect, useRef } from "react";
import {
  Background,
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

const Modal = ({ open, handleClose }: any) => {
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
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            {/* Close Button */}
            <ModalButton icon={faXmark} onClick={handleClose} />

            {/* Title */}
            <ModalContent>
              <h5>web dev essentials</h5>
              <h1>html/css workshop</h1>
            </ModalContent>

            {/* Image */}
            <ModalImg
              src={
                "https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1627554145/itpro/google_sign_mountain_view_shutterstock.jpg"
              }
            />

            {/* Contains location, time and extended details */}
            <Container>
              <Information>
                <div>
                  <FontAwesomeIcon icon={faLocationDot} />
                  401-439 engineering building
                </div>
                <div>
                  <FontAwesomeIcon icon={faClockFour} />
                  sat 02 apr, 10:00am - 4:00pm
                </div>
              </Information>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                enim quibusdam magni voluptatibus dicta quas error minima porro
                alias eius, dolorum dolorem commodi officia soluta vitae, odio
                rem suscipit iusto a beatae fugit deserunt molestiae laborum
                voluptatum. Enim laudantium sit vero eaque, reiciendis illum
                officiis libero ad, possimus dolores iusto? Vitae dignissimos
                repellat eligendi laudantium ipsum sint cum! Officia possimus
                reiciendis atque voluptates ratione hic, nemo excepturi autem
                porro, corrupti sint officiis! Accusamus, fuga illum,
                repellendus iusto officiis necessitatibus dicta maiores eos quas
              </p>
            </Container>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default Modal;
