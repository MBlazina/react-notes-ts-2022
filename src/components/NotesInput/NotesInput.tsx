import { NotesContext } from "@context/NotesProvider";
import {INITIAL_DATA} from '@data/initialFormData'
import React, { useContext, useState } from "react";
import uuid from 'react-uuid'
import { NoteInputProps } from "./NotesInput.types";

const NotesInput = ({close}:NoteInputProps) => {
  const [notes, setNotes] = useContext(NotesContext);
  const [noteTitle, setNoteTitle] = useState(INITIAL_DATA.title);
  const [noteDetails, setNoteDetails] = useState(INITIAL_DATA.description);

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
      details: noteDetails
    }

    setNoteTitle('');
    setNoteDetails('');
    setNotes([...notes, newNote]);
    close();
  };
  return (
    <form action="" autoComplete="off" onSubmit={handleAddNote}>
      <input type="text" value={noteTitle} onChange={handleNoteTitleChange} id="todos" name="todos" placeholder="What needs to be done?" required />
      <textarea name="" id="" onChange={handleNoteDetailsChange} value={noteDetails}></textarea>
      <button type="submit">Create</button>
    </form>
  );
};

export default NotesInput;
