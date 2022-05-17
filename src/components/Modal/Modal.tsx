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

import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
            <ModalButton icon={faXmark} />
            <ModalContent>
              <h5>web dev essentials</h5>
              <h1>html/css workshop</h1>
            </ModalContent>
            <ModalImg
              src={
                "https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1627554145/itpro/google_sign_mountain_view_shutterstock.jpg"
              }
            />
            <Container>
              <Information>
                <div>401-439 engineering building</div>
                <div>sat 02 apr, 10:00am - 4:00pm</div>
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
                veritatis aliquid, facilis unde in nulla. Deleniti molestiae
                alias nulla sed aut numquam iusto natus, nobis nisi quibusdam,
                quaerat tempora assumenda! Perspiciatis doloremque quia
                excepturi corrupti ipsum! Dolorum nobis quis possimus magni
                perferendis placeat ea dolore eos. Expedita tempora quo natus
                odit explicabo dolore placeat sit perspiciatis. Obcaecati vitae
                necessitatibus dolorem soluta laboriosam ipsa quia ipsum nulla
                voluptates quo a accusamus nam quae commodi delectus ipsam
                doloribus odit modi dolorum ratione voluptatem pariatur,
                voluptatibus debitis provident! Exercitationem necessitatibus
                voluptate ut debitis, quia nostrum error distinctio, quis
                provident, magnam numquam! Repudiandae, necessitatibus error,
                quas vero asperiores nisi voluptate a illum dolor sint
                cupiditate veniam officiis? Amet tenetur adipisci non beatae
                blanditiis eaque repudiandae culpa veniam porro sapiente ipsam
                nam minus impedit, ullam aliquid modi inventore consectetur
                rerum sed nisi explicabo. Ducimus magni ipsum repellendus
                officia debitis sed necessitatibus. Deleniti aliquam est
                similique, dolores itaque eligendi, excepturi maiores cupiditate
                recusandae voluptatum quae et quidem accusamus omnis architecto
                sit amet consequatur? Nulla exercitationem deserunt neque quas
                unde aut iure eligendi perferendis provident, accusamus placeat
                modi obcaecati maiores error sint sequi quos libero laudantium
                quibusdam id veniam. Quam commodi rem mollitia in nihil vel a?
                Commodi at fuga, animi quae alias possimus dicta itaque
                recusandae excepturi provident quasi ut vero mollitia neque
                labore nostrum! Voluptatibus id soluta, omnis quo itaque
                excepturi?
              </p>
            </Container>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default Modal;
