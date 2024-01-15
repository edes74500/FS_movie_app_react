import React from "react";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

interface Movie {
  listName: string;
}

interface ListTitleDisplayHeaderProps {
  MovieListDisplayed: Movie[];
}

const StyledListTitleDisplayHeader = styled.div`
  /* transition: all 2s ease-in-out; */
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid var(--secondary-color);
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    @media screen and (max-width: ${breakpoints.tablet}px) {
      font-size: 1.2rem;
    }
  }
`;
const ListTitleDisplayHeader: React.FC<ListTitleDisplayHeaderProps> = ({ MovieListDisplayed }) => {
  return (
    <>
      <StyledListTitleDisplayHeader className="movie-list-name" data-identifier="ListTitleDisplayHeader">
        <h3> {MovieListDisplayed[0].listName}</h3>{" "}
      </StyledListTitleDisplayHeader>
    </>
  );
};

export default ListTitleDisplayHeader;
