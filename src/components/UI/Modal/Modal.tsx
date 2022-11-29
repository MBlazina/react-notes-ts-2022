import { ModalStyled } from './Modal.style'
import { ModalProps } from './Modal.types'

const Modal = ({ children, open, close }: ModalProps) => {
  
  if (!open) return null;
  return (
    <ModalStyled>
      <button onClick={close}>X</button>
      {children}
    </ModalStyled>
  )
}

export default Modal