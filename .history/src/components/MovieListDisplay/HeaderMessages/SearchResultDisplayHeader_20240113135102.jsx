import React from "react";
import breakpoints from "../../../styles/breakpoints";
import styled from "styled-components";

const StyledSearchResultDisplayHeader = styled.div`
  width: 100%;
  /* position: absolute; */
  /* transform: translate(0%, -100%); */
  border-bottom: 1px solid var(--secondary-color);
  margin-bottom: 20px;
  h3 {
    transition: all 2s ease-in-out;
    font-size: 1.4rem;
    @media screen and (max-width: ${breakpoints.tablet}px) {
      margin-bottom: 50px;
      text-align: center;
      font-size: 1rem;
    }
    .search-value {
      font-size: 2rem;
      text-transform: capitalize;
    }
  }
`;

const SearchResultDisplayHeader = ({ inputSearchValue }) => {
  return (
    <StyledSearchResultDisplayHeader className="search-display-header-style" data-identifier="SearchResultDisplayHeader">
      <h3>
        Votre recherche pour <span className="search-value">{inputSearchValue}</span>
      </h3>
    </StyledSearchResultDisplayHeader>
  );
};

export default SearchResultDisplayHeader;
