import { useContext, useState } from "react";
import { NotesContext } from "@context/NotesProvider";
import { NoteEditProps } from "./NoteEdit.types";

const NoteEdit = ({ note, close }: NoteEditProps) => {
  const [notes, setNotes] = useContext(NotesContext);
  const [modifiedNoteTitle, setModifiedNoteTitle] = useState(note.title);
  const [modifiedNoteDetails, setModifiedNoteDetails] = useState(note.details);

  const handleModifiedNoteTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifiedNoteTitle(e.target.value);
  };

  const handleModifiedNoteDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModifiedNoteDetails(e.target.value);
  };

  const handleUpdateNote = (id: string) => {
    const newNotes = [...notes];

    newNotes.map((note) => {
      if (note.id === id) {
        note.title = modifiedNoteTitle;
        note.details = modifiedNoteDetails;
      }
    });

    setNotes(newNotes);
    close();
  };
  return (
    <>
      <div>NoteEdit</div>

      <form action="" onSubmit={() => handleUpdateNote(note.id)}>
        <input type="text" defaultValue={note.title} onChange={handleModifiedNoteTitle} />
        <textarea onChange={handleModifiedNoteDescription} defaultValue={note.details}></textarea>
        <button onClick={close}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default NoteEdit;
