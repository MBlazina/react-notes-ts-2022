import NoteEdit from "@components/NoteEdit/NoteEdit";
import NoteItemModal from "@components/NoteItemModal/NoteItemModal";
import Modal from "@components/UI/Modal/Modal";
import { NotesContext } from "@context/NotesProvider";
import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { NoteItemProps } from "./NoteItem.type";

const NoteItem = (note: NoteItemProps) => {
  const [notes, setNotes] = useContext(NotesContext);

  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  const handleDeleteNote = (id: string) => {
    const newNotes = [...notes].filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleOpenNoteModal = () => {
    setIsNoteModalOpen(true);
  };

  const handleCancelEditNote = () => {
    setIsNoteModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorArray = ["bg-rose-200", "bg-fuchsia-200", "bg-indigo-200", "bg-cyan-200", "bg-teal-200", "bg-lime-200", "bg-yellow-200"];
  const rotationArray = ["rotate-1", "rotate-0", "rotate-[-1deg]"];
  const [randomBackground, setRandomBackground] = useState("white");
  const [randomRotation, setRandomRotation] = useState("rotation-0");

  useEffect(() => {
    setRandomBackground(colorArray[Math.floor(Math.random() * colorArray.length)]);
    setRandomRotation(rotationArray[Math.floor(Math.random() * rotationArray.length)]);
  }, []);

  const truncateText = (text: string, characters: number) => {
    return text.length > characters ? text.substring(0, characters) + "..." : text;
  };

  const handleExpand = () => {};
  return (
    <>
      <Modal open={isModalOpen} close={() => setIsModalOpen(false)}>
        <NoteEdit close={() => setIsModalOpen(false)} note={note} />
      </Modal>

      <li className={`shadow-lg m-4 ${randomRotation} h-fit hover:cursor-pointer bg-white rounded-md overflow-hidden`}>
        <h3 className={`${randomBackground} p-2`}>{note.title}</h3>
        <div onClick={() => setIsModalOpen(true)} className="p-2">
          <ReactMarkdown>{truncateText(note.details, 50)}</ReactMarkdown>
        </div>
        <button onClick={() => setIsModalOpen(true)}>edit</button>
        <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
      </li>
    </>
  );
};

export default NoteItem;
