// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/globalStyles";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import "typeface-lato";
import "typeface-roboto";
import "@fontsource-variable/cinzel";
import "styled-components";
import ButtonToTheTop from "./components/Shared/ButtonToTheTop";

const GlobalStyle = createGlobalStyle`
${globalStyles}
`;

//REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import LoadStaticData from "./components/LoadStaticData";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const App = () => {
  return (
    <Provider store={store}>
      <LoadStaticData />
      <Router>
        <GlobalStyle data-identifier="StyledGlobalStyle" />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <ButtonToTheTop />
      </Router>
    </Provider>
  );
};

export default App;
