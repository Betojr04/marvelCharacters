import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./HomePage/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

import NotFound from "./NotFound";
import Navigation from "./Navbar/Navigation";
import CharacterList from "./CharacterListPage/CharacterList";

const App = () => {
  return( 
  <>
  <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<CharacterList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
};

export default App;
