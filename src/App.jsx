import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/home";
import styled from "styled-components";
import Favorite from "./pages/favorite";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color:#1a1a1a;
  color: white;
}`;

const PageContainer = styled.div`
  max-width: 1000px;
  /* display: flex; */
  margin: 0 auto;
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
