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
import {ModalContext } from '@context/ModalProvider';

const NotesList = () => {
  const { notes} = useContext(NotesContext);
const {isModalOpen, handleOpenModal, handleCloseModal}= useContext(ModalContext)
  return (
    <>
      <Modal open={isModalOpen} close={handleCloseModal}>
        <NotesInput />
      </Modal>

      <NotesListHeader className="flex items-center pb-4">
        <Button className="mr-4" primary={true}  click={handleOpenModal}>
          +
        </Button>
        <h2 className="inline-flex items-start">
          Notes <NotesCounter className="ml-2" data={notes?.length ?? 0} />
        </h2>
      </NotesListHeader>

      <NoteListStyled className="bg-white p-4 drop-shadow-3xl rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          
          notes?.map((note: NoteItemProps) => {
            return <NoteItem key={note.id} {...note} />;
        })}
      </NoteListStyled>
    </>
  );
};

export default NotesList;
