import { ModalContext } from "@context/ModalProvider";
import { NotesContext } from "@context/NotesProvider";
import { INITIAL_DATA } from "@data/initialFormData";
import React, { useContext, useState } from "react";
import uuid from "react-uuid";

const NotesInput = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const { handleCloseModal, activeNote } = useContext(ModalContext);

  let activeNoteSet = {
    title: INITIAL_DATA.title,
    details: INITIAL_DATA.description,
  };
  if (activeNote) {
    activeNoteSet = notes?.find((note) => note.id === activeNote) ?? { title: INITIAL_DATA.title, details: INITIAL_DATA.description };
  }

  const [noteTitle, setNoteTitle] = useState(activeNoteSet.title);
  const [noteDetails, setNoteDetails] = useState(activeNoteSet.details);

  const handleNoteTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteTitle(e.target.value);
  };

  const handleNoteDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteDetails(e.target.value);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();

    const newNote = {
      id: uuid(),
      title: noteTitle,
      details: noteDetails,
    };

    setNoteTitle("");
    setNoteDetails("");
    if (activeNote) {
      const newNotes = notes?.map((note) => {
        if (note.id === activeNote) {
          return newNote;
        }
        return note;
      });
      setNotes?.(newNotes!)
    } else {
      setNotes?.([...notes!, newNote]);
    }
    handleCloseModal?.();
  };
  return (
    <form action="" autoComplete="off" onSubmit={handleAddNote}>
      <input type="text" value={noteTitle} onChange={handleNoteTitleChange} id="todos" name="todos" placeholder="What needs to be done?" required />
      <textarea name="" id="" onChange={handleNoteDetailsChange} value={noteDetails}></textarea>

      {activeNote && <button type="button" onClick={handleCloseModal}> Cancel</button>}
      <button type="submit">{activeNote ? "Save" : "Create"}</button>
    </form>
  );
};

export default NotesInput;
