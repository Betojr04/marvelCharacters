import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home.jsx";
import NotFound from "./NotFound";
import Navigation from "./Navbar/Navigation.jsx";
import Characters from "./AllCharacters/Characters.jsx";
import CharacterDetails from "./AllCharacters/CharacterDetails.jsx";
import EditCharacter from "./EditCharacter.jsx";
import CreateCharacter from "./AllCharacters/CreateCharacter.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/create-character" element={<CreateCharacter />} />
        <Route path="/edit-character/:id" element={<EditCharacter />} />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
