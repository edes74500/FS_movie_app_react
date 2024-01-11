// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { globalStyles } from "./styles/globalStyles";
import "typeface-lato";
import "typeface-roboto";
import "@fontsource-variable/cinzel";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Header/Navbar";
import "styled-components";
import ButtonToTheTop from "./components/Shared/ButtonToTheTop";

const GlobalStyle = createGlobalStyle`
${globalStyles}
`;

function App() {
  return (
    <Router>
      {/* <AnimatePresence> */}
      <Navbar />
      <GlobalStyle data-identifier="StyledGlobalStyle" />

      <Routes>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ButtonToTheTop />
      {/* </AnimatePresence> */}
    </Router>
  );
}

export default App;
