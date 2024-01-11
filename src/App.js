import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import Supportpage from "./Pages/Supportpage/Supportpage";
import Layoutpage from "./Pages/Layoutpage/Layoutpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoutpage />}>
          <Route path="/" element={<Homepage />} />
          <Route path="supportpage" element={<Supportpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
