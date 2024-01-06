// import React from "react";

import FilerModule from "../components/FilerModule";
import Header from "../components/Header";
import styled from "styled-components";
import MoviesDisplay from "../components/MoviesDisplay";

const StyledPageContainer = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 50px;
`;
const Home = () => {
  return (
    <div>
      <Header />
      <StyledPageContainer>
        <FilerModule />
        <MoviesDisplay />
      </StyledPageContainer>
    </div>
  );
};

export default Home;
