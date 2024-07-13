import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./Components/Card";
import HomePage from "./Pages/HomePage";
import Mycontext from "./Context/Context";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <Mycontext>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/UpdateTask/:ID" element={<Card />} />
        </Routes>
      </Mycontext>
    </BrowserRouter>
  );
}

export default App;
