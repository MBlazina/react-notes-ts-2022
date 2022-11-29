import NoteItem from "@components/NoteItem/NoteItem";
import { useContext, useState } from "react";
import { NotesContext } from "@context/NotesProvider";
import { NoteItemProps } from "@components/NoteItem/NoteItem.type";
import Modal from "@components/UI/Modal/Modal";
import NotesInput from "@components/NotesInput/NotesInput";

const NotesList = () => {
  const [notes, setNotes] = useContext(NotesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ul>
      <button onClick={() => setIsModalOpen(true)}>New note</button>
      <Modal open={isModalOpen} close={() => setIsModalOpen(false)}>
        <NotesInput />
      </Modal>
      {notes.map((note: NoteItemProps) => {
        return <NoteItem key={note.id} {...note} />;
      })}
    </ul>
  );
};

export default NotesList;
