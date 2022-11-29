import "./App.css";
import NotesInput from "@components/NotesInput/NotesInput";
import NotesList from "@components/NotesList/NotesList";
import { NotesProvider } from "@context/NotesProvider";
import Header from "@components/Header/Header";
import GlobalStyles from "styles/global";
import { AppStyled } from "App.style";
import Container from "@components/UI/Container/Container";
import Button from "@components/UI/Button/Button";

function App() {

  return (
    <NotesProvider>
      <GlobalStyles />
      <AppStyled className="App h-full">
        <Container>
          <Header />
          <NotesList />
        </Container>
      </AppStyled>
    </NotesProvider>
  );
}

export default App;
