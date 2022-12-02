import NoteItem from "@components/NoteItem/NoteItem";
import { useContext, useEffect, useState } from "react";
import { NotesContext, NotesContextProps } from "@context/NotesProvider";
import { NoteItemProps } from "@components/NoteItem/NoteItem.type";
import Modal from "@components/UI/Modal/Modal";
import NotesInput from "@components/NotesInput/NotesInput";
import { NoteListStyled, NotesListHeader } from "./NotesList.style";
import Button from "@components/UI/Button/Button";
import NotesCounter from "@components/UI/NotesCounter/NotesCounter";
import { ModalContext, ModalContextProps } from "@context/ModalProvider";
import searchIcon from "@assets/magnifying-glass-solid.svg";

const NotesList = () => {
  const { notes } = useContext(NotesContext) as NotesContextProps;
  const { isModalOpen, handleOpenModal } = useContext(ModalContext) as ModalContextProps;
  const [filterNotesInput, setFilterNotesInput] = useState("");
  const [filteredNotes, setFilteredNotes] = useState<any[]>([]);

  useEffect(() => {
    if (!localStorage.getItem("notesStore")) {
      localStorage.setItem("notesStore","[]");
    }
    const filteredNotesArray = notes
      .filter((note) => note.title.toLowerCase().includes(filterNotesInput.toLowerCase()) || note.details.toLowerCase().includes(filterNotesInput.toLowerCase()))
      .map((note: NoteItemProps) => {
        return <NoteItem key={note.id} {...note} />;
      });
    setFilteredNotes(filteredNotesArray);
  }, [filterNotesInput, notes]);
  return (
    <>
      <Modal open={isModalOpen}>
        <NotesInput />
      </Modal>

      <NotesListHeader className="flex flex-col sm:flex-row sm:justify-between items-center pb-4">
        <div className="add-note">
          <Button className="mr-4" primary={true} onClick={handleOpenModal}>
            +
          </Button>
          <h2 className="inline-flex items-start">
            Notes <NotesCounter className="ml-2" data={filteredNotes.length} />
          </h2>
        </div>
        <div className="search w-[300px] mx-4 flex justify-end items-center">
          <input className="search-input w-full shadow-lg rounded-xl" type="text" value={filterNotesInput} onChange={(e) => setFilterNotesInput(e.target.value)} />
          <img src={searchIcon} width="15" />
        </div>
      </NotesListHeader>

      <NoteListStyled className="bg-white p-4 shadow-lg rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredNotes.length === 0 ? <h2>No results</h2> : filteredNotes}
      </NoteListStyled>
    </>
  );
};

export default NotesList;
