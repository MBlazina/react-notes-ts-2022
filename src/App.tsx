import { useState } from "react";
import "./App.css";
import NotesInput from "@components/NotesInput/NotesInput";
import NotesList from "@components/NotesList/NotesList";
import Footer from "@components/Footer/Footer";
import { NotesProvider } from "@context/NotesProvider";
import NoteItemModal from "@components/NoteItemModal/NoteItemModal";
function App() {
  return (
    <NotesProvider>
      <div className="App">
        <h1>Notes App</h1>
        <NotesInput />
        <NotesList />
        <Footer />
      </div>
    </NotesProvider>
  );
}

export default App;
