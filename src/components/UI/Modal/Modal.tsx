import Button from "@components/UI/Button/Button";
import Container from "../Container/Container";
import { ModalStyled } from "./Modal.style";
import { ModalProps } from "./Modal.types";
import { ModalContext, ModalContextProps } from "@context/ModalProvider";
import { useContext } from "react";

const Modal = ({ children, open }: ModalProps) => {
  const { handleCloseModal } = useContext(ModalContext) as ModalContextProps;
  if (!open) return null;
  return (
    <ModalStyled onClick={handleCloseModal}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </ModalStyled>
  );
};

export default Modal;
