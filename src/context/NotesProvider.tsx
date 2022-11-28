import { NoteItemProps } from "@components/NoteItem/NoteItem.type";
import { useState, useEffect, createContext } from "react";

export const NotesContext = createContext<NoteItemProps | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const NotesProvider = ({ children }: Props) => {
  const LOCAL_STORE_KEY = "notesStore";
  const store = localStorage.getItem(LOCAL_STORE_KEY);

  let initState = [];
  if (store) {
    initState = JSON.parse(store);
  } else {
    initState = [];
  }

  const [notes, setNotes] = useState(initState);

  useEffect(() => {
    const notesStore = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY) || '');
    if (notesStore) setNotes(notesStore);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(notes));
  }, [notes]);

  return <NotesContext.Provider value={[notes, setNotes]}>{children}</NotesContext.Provider>;
};
