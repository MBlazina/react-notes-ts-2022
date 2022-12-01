import { NotesContext, NotesContextProps } from "@context/NotesProvider";
import { useTruncateText } from "@hooks/useTruncateText";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { NoteItemStyled } from "./NoteItem.style";
import { NoteItemProps } from "./NoteItem.type";
import deleteIcon from "@assets/trash-can-regular.svg";
import editIcon from "@assets/pen-to-square-solid.svg";
import { useRandomBackgroundColor, useRandomNoteRotation } from "@hooks/useRandom";
import { ModalContext, ModalContextProps } from "@context/ModalProvider";

const NoteItem = ({ id, title, details }: NoteItemProps) => {
  const { notes, setNotes } = useContext(NotesContext) as NotesContextProps;
  const { isModalOpen, handleOpenModal, handleCloseModal, activeNote, setActiveNote } = useContext(ModalContext) as ModalContextProps;

  const handleDeleteNote = (id: string) => {
    const newNotes = [...notes].filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleEditNote = (id: string) => {
    setActiveNote(id);
    handleOpenModal();
  };
  return (
    <>
      <NoteItemStyled className={`shadow-lg m-4 ${useRandomNoteRotation()} h-fit hover:cursor-pointer bg-white rounded-md overflow-hidden`}>
        <h3 onClick={() => handleEditNote(id)} className={`${useRandomBackgroundColor()} p-2`}>
          <ReactMarkdown>{title}</ReactMarkdown>
        </h3>
        <div onClick={() => handleEditNote(id)} className="p-2">
          <ReactMarkdown>{useTruncateText(details, 70)}</ReactMarkdown>
        </div>
        <div className="notes-icons">
          <button onClick={() => handleDeleteNote(id)}>
            <img src={deleteIcon} width="15" />
          </button>
          <button onClick={() => handleEditNote(id)}>
            <img src={editIcon} width="15" />
          </button>
        </div>
      </NoteItemStyled>
    </>
  );
};

export default NoteItem;
