import { NoteItemProps } from "@components/NoteItem/NoteItem.type";
import { useState, useEffect, createContext } from "react";

export interface NotesContextProps {
  notes: NoteItemProps[],
  setNotes:React.Dispatch<NoteItemProps[]>
}

export const NotesContext = createContext<NotesContextProps | null>(null);

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
    const notesStore = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY) || "");

    if (notesStore) {
      setNotes(notesStore);
    } else {
      localStorage.setItem(LOCAL_STORE_KEY, "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(notes));
  }, [notes]);



  return <NotesContext.Provider value={{notes:notes as NoteItemProps[], setNotes}}>{children}</NotesContext.Provider>;
};
