import React from "react";
import styled from "styled-components";

const StyledListTitleDisplayHeader = styled.div`
  h3 {
    font-size: 1.5rem;
    margin: 0 0 0px 0;
  }
  border-radius: 5px;
  padding: 5px 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(var(--secondary-color), 0.8) 37%,
    rgba(var(--secondary-color), 0.8) 68%,
    rgba(255, 255, 255, 0) 100%
  );

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,

    rgba(var(--secondary-color), 0.8) 100%
  );
  margin-bottom: 20px;
`;
const ListTitleDisplayHeader = ({ MovieListDisplayed }) => {
  return (
    <>
      <StyledListTitleDisplayHeader className="movie-list-name" data-identifier="ListTitleDisplayHeader">
        <h3> {MovieListDisplayed[0].listName}</h3>{" "}
      </StyledListTitleDisplayHeader>
    </>
  );
};

export default ListTitleDisplayHeader;
