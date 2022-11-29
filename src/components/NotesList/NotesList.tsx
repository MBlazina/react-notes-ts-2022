import NoteItem from "@components/NoteItem/NoteItem";
import { useContext, useState } from "react";
import { NotesContext } from "@context/NotesProvider";
import { NoteItemProps } from "@components/NoteItem/NoteItem.type";
import Modal from "@components/UI/Modal/Modal";
import NotesInput from "@components/NotesInput/NotesInput";
import { NoteListStyled, NotesListHeader } from "./NotesList.style";
import Button from "@components/UI/Button/Button";
import { colors } from "@mixins";
import NotesCounter from "@components/UI/NotesCounter/NotesCounter";

const NotesList = () => {
  const [notes, setNotes] = useContext(NotesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal open={isModalOpen} close={() => setIsModalOpen(false)}>
        <NotesInput />
      </Modal>

      <NotesListHeader className="flex items-center pb-4">
        <Button className="mr-4" primary={true} click={() => setIsModalOpen(true)}>
          New
        </Button>
        <h2 className="inline-flex items-start">
          Notes <NotesCounter className="ml-2" data={notes.length} />
        </h2>
      </NotesListHeader>

      <NoteListStyled className="bg-white p-4 drop-shadow-3xl rounded-xl grid grid-cols-4">
  {/*     <NoteListStyled className="bg-white p-4 drop-shadow-3xl rounded-xl flex flex-wrap"> */}
        {
          
          notes.map((note: NoteItemProps) => {
            return <NoteItem key={note.id} {...note} />;
        })}
      </NoteListStyled>
    </>
  );
};

export default NotesList;
