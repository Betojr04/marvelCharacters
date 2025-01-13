import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./HomePage/Home";
import NotFound from "./NotFound";

const App = () => {
  return( 
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
};

export default App;
