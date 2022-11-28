import NoteItem from "@components/NoteItem/NoteItem";
import { useContext } from "react";
import { NotesContext } from "@context/NotesProvider";
import { NoteItemProps } from "@components/NoteItem/NoteItem.type";

const NotesList = () => {
  const [notes, setNotes] = useContext(NotesContext);

  return (
    <ul>
      {notes.map((note: NoteItemProps) => {
        return <NoteItem key={note.id} {...note} />;
      })}
    </ul>
  );
};

export default NotesList;
