import "./App.css";
import NotesList from "@components/NotesList/NotesList";
import { NotesProvider } from "@context/NotesProvider";
import Header from "@components/Header/Header";
import GlobalStyles from "styles/global";
import { AppStyled } from "App.style";
import Container from "@components/UI/Container/Container";
import { ModalProvider } from "@context/ModalProvider";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyled className="App h-full">
        <Container>
          <NotesProvider>
            <ModalProvider>
              <Header />
              <NotesList />
            </ModalProvider>
          </NotesProvider>
        </Container>
      </AppStyled>
    </>
  );
}

export default App;
