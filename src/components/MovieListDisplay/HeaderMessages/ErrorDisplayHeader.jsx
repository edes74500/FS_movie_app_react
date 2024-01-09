import React from "react";
import styled from "styled-components";

const StyledErrorDisplayHeader = styled.div`
  width: 100%;
  .error-message {
    padding-bottom: 50px;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
    span {
      font-size: 4rem;
      text-align: center;
    }
  }
  h3 {
    margin-top: 50px;
  }
`;
const ErrorDisplayHeader = () => {
  return (
    <>
      <StyledErrorDisplayHeader className="error-display-header-style" data-identifier="ErrorDisplayHeader">
        <div className="error-message">
          <h2>Desole aucun film ne correspond a votre recherche </h2>
          <span>😥</span>
        </div>
        <h3>En attendant...</h3>
      </StyledErrorDisplayHeader>
    </>
  );
};

export default ErrorDisplayHeader;
