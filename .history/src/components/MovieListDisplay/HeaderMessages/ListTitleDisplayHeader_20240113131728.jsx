import React from "react";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

const StyledListTitleDisplayHeader = styled.div`
  transition: all 2s ease-in-out;
  margin-bottom: 40px;
  border-radius: 5px 5px 0 0;
  padding: 5px 0;
  /* background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(var(--secondary-color), 0.8) 37%,
    rgba(var(--secondary-color), 0.8) 68%,
    rgba(255, 255, 255, 0) 100%
  ); */
  /* background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--secondary-color-08) 100%); */
  border-bottom: 1px solid var(--secondary-color);

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    @media screen and (max-width: ${breakpoints.tablet}px) {
      font-size: 1rem;
      padding: 10px 0;
      /* margin-bottom: 100px; */
    }
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
