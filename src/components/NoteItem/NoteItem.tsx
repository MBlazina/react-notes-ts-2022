import NoteEdit from "@components/NoteEdit/NoteEdit";
import NoteItemModal from "@components/NoteItemModal/NoteItemModal";
import Modal from "@components/UI/Modal/Modal";
import { NotesContext } from "@context/NotesProvider";
import { useContext, useState } from "react";
import ReactMarkdown from "react-markdown";
import { NoteItemProps } from "./NoteItem.type";

const NoteItem = (note: NoteItemProps) => {
  const [notes, setNotes] = useContext(NotesContext);

  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  const handleDeleteNote = (id: string) => {
    const newNotes = [...notes].filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleOpenNoteModal = () => {
    setIsNoteModalOpen(true);
  };

  const handleCancelEditNote = () => {
    setIsNoteModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <><Modal open={isModalOpen} close={() => setIsModalOpen(false)}>
      
      <NoteEdit close={() => setIsModalOpen(false)} note={note} />
    </Modal>
      {/* <NoteItemModal open={isNoteModalOpen} closeModal={handleCancelEditNote} note={note} /> */}
      <li>
        <label htmlFor={note.id}>
          <h2>{note.title}</h2>
          <ReactMarkdown>{note.details}</ReactMarkdown>
        </label>
        <button onClick={()=>setIsModalOpen(true)}>edit</button>
        <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
      </li>
    </>
  );
};

export default NoteItem;
