// import React from "react";

import FilerModule from "../components/FilerModule";
import Header from "../components/Header";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
const Home = () => {
  return (
    <div>
      <Header />
      <StyledPageContainer>
        <FilerModule />
        <div className="second-div"> aa</div>
      </StyledPageContainer>
    </div>
  );
};

export default Home;
