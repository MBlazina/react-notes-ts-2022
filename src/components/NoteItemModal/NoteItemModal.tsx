import { useContext, useState } from "react";
import { NotesContext } from "@context/NotesProvider";
import { NoteItemModalProps } from "./NoteItemModal.types";
import { NoteItemModalStyled } from "./NoteItemModal.style";


const NoteItemModal = ({note, open, closeModal}: NoteItemModalProps) => {

  const [notes, setNotes] = useContext(NotesContext);

  const [modifiedNoteTitle, setModifiedNoteTitle] = useState(note.title);
  const [modifiedNoteDetails, setModifiedNoteDetails] = useState(note.details);

  const handleModifiedNoteTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifiedNoteTitle(e.target.value);
  };

  const handleModifiedNoteDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModifiedNoteDetails(e.target.value);
  };

  const handleSaveNote = (id: string) => {
    const newNotes = [...notes];

    newNotes.map((note) => {
      if (note.id === id) {
        note.title = modifiedNoteTitle;
        note.details = modifiedNoteDetails;
      }
    });

    setNotes(newNotes);
    closeModal();
  };

  if (!open) return null;

  return (
    
      <NoteItemModalStyled >
      <h2>NoteItemModal</h2>
      <input type="text" defaultValue={note.title} onChange={handleModifiedNoteTitle} />
      <textarea onChange={handleModifiedNoteDescription} defaultValue={note.details}></textarea>
      <button onClick={closeModal}>Cancel</button>
        <button onClick={() => handleSaveNote(note.id)}>Save</button>
        </NoteItemModalStyled>
    
  );
};

export default NoteItemModal;
