import { ReactNode } from "react";
import { Container } from "./FullScreenMenu.styled";
interface FullScreenMenuProps {
  children: ReactNode;
  isOpen: boolean;
  toggle: Function;
}

function FullScreenMenu({ children, isOpen, toggle }: FullScreenMenuProps) {
  const exitButtonPressed = () => {
    toggle();
  };

  return (
    <>
      <Container className={isOpen ? "visible" : "hidden"}>
        <span id="cross" onClick={exitButtonPressed}>
          <i className="fa-solid fa-xmark" />
        </span>

        <div>
          <ol>{children}</ol>
        </div>
      </Container>
    </>
  );
}

export default FullScreenMenu;
