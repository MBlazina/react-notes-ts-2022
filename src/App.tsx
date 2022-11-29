import "./App.css";
import NotesInput from "@components/NotesInput/NotesInput";
import NotesList from "@components/NotesList/NotesList";
import { NotesProvider } from "@context/NotesProvider";

function App() {
  return (
    <NotesProvider>
      <div className="App">
        <h1>Notes App</h1>
       
        <NotesList />
      </div>
    </NotesProvider>
  );
}

export default App;
