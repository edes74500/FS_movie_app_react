// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { globalStyles } from "./styles/globalStyles";
import "typeface-lato";
import "@fontsource-variable/cinzel";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
${globalStyles}
`;

const PageContainer = styled.div`
  /* max-width: 1000px; */
  /* display: flex; */
  /* margin: 0 auto; */
  background-color: green;
`;
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

export default App;
