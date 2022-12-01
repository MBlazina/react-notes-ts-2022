import Button from "@components/UI/Button/Button";
import Container from "@components/UI/Container/Container";
import { ModalContext, ModalContextProps } from "@context/ModalProvider";
import { NotesContext, NotesContextProps } from "@context/NotesProvider";
import { INITIAL_DATA } from "@data/initialFormData";
import React, { useContext, useState } from "react";
import uuid from "react-uuid";
import closeIcon from '@assets/xmark-solid.svg'
import { NotesInputStyled } from "./NotesInput.style";

const NotesInput = () => {
  const { notes, setNotes } = useContext(NotesContext) as NotesContextProps;
  const { handleCloseModal, activeNote } = useContext(ModalContext) as ModalContextProps;

  let activeNoteSet = {
    title: INITIAL_DATA.title,
    details: INITIAL_DATA.details,
  };
  if (activeNote) {
    activeNoteSet = notes.find((note) => note.id === activeNote) ?? { title: INITIAL_DATA.title, details: INITIAL_DATA.details };
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
      const newNotes = notes.map((note) => {
        if (note.id === activeNote) {
          return newNote;
        }
        return note;
      });
      setNotes(newNotes);
    } else {
      setNotes([...notes, newNote]);
    }
    handleCloseModal();
  };
  return (
    <Container className="flex justify-center">
      <NotesInputStyled autoComplete="off" onSubmit={handleAddNote} className="flex flex-col rounded-xl p-4">
        <div className="input-header flex justify-between items-center py-2">
          <h2>Edit note:</h2>
          <Button close onClick={handleCloseModal} className="self-end">
            <img src={closeIcon} alt="" width="10"/>
          </Button>
        </div>
        <input type="text" value={noteTitle} onChange={handleNoteTitleChange} id="todos" name="todos" placeholder="What needs to be done?" required />
        <textarea onChange={handleNoteDetailsChange} value={noteDetails}></textarea>
        <div className="flex items-center justify-end">
          {activeNote && (
            <Button type="button" onClick={handleCloseModal}>
              Cancel
            </Button>
          )}
          <Button primary type="submit">{activeNote ? "Save" : "Create"}</Button>
        </div>
      </NotesInputStyled>
    </Container>
  );
};

export default NotesInput;
