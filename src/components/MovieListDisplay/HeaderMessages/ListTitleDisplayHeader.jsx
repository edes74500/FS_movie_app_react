import React from "react";
import styled from "styled-components";

const StyledListTitleDisplayHeader = styled.div`
  transition: all 2s ease-in-out;
  margin-bottom: 30px;
  border-radius: 5px 5px 0 0;
  padding: 5px 0;
  /* background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(var(--secondary-color), 0.8) 37%,
    rgba(var(--secondary-color), 0.8) 68%,
    rgba(255, 255, 255, 0) 100%
  ); */
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,

    var(--secondary-color) 100%
  );
  h3 {
    font-size: 1.5rem;
  }
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
