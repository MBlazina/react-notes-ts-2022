import NoteEdit from "@components/NoteEdit/NoteEdit";
import NoteItemModal from "@components/NoteItemModal/NoteItemModal";
import Modal from "@components/UI/Modal/Modal";
import { NotesContext } from "@context/NotesProvider";
import { truncateText } from "@hooks/truncateText";
import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { NoteItemStyled } from "./NoteItem.style";
import { NoteItemProps } from "./NoteItem.type";
import deleteIcon from '@assets/trash-can-regular.svg';
import editIcon from '@assets/pen-to-square-solid.svg';
import {randomBackgroundColor, randomNoteRotation} from '@hooks/random'

const NoteItem = (note: NoteItemProps, handleOpenModal: () => void) => {
  const [notes, setNotes] = useContext(NotesContext);

  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  const handleDeleteNote = (id: string) => {
    const newNotes = [...notes].filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <NoteItemStyled className={`shadow-lg m-4 ${randomNoteRotation()} h-fit hover:cursor-pointer bg-white rounded-md overflow-hidden`}>
        <h3 className={`${randomBackgroundColor()} p-2`}>{note.title}</h3>
        <div onClick={handleOpenModal} className="p-2">
          <ReactMarkdown>{truncateText(note.details, 70)}</ReactMarkdown>
        </div>
        <div className="notes-icons">
          <button onClick={() => handleDeleteNote(note.id)}><img src={deleteIcon} width="15"/></button>
          <button onClick={handleOpenModal}><img src={editIcon} width="15" /></button>
        </div>
      </NoteItemStyled>
    </>
  );
};

export default NoteItem;
