import { useState, useEffect, createContext } from "react";

export interface ModalContextProps {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  activeNote: string;
  setActiveNote: React.Dispatch<React.SetStateAction<string>>;
}
export const ModalContext = createContext<ModalContextProps | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ModalProvider = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveNote("");
  };

  const [activeNote, setActiveNote] = useState("");

  return <ModalContext.Provider value={{ handleOpenModal, handleCloseModal, isModalOpen, activeNote, setActiveNote }}>{children}</ModalContext.Provider>;
};
