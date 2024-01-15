import React from "react";
import breakpoints from "../../../styles/breakpoints";
import styled from "styled-components";

interface SearchResultDisplayHeader {
  inputSearchValue: string;
}

const StyledSearchResultDisplayHeader = styled.div`
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid var(--secondary-color);
  h3 {
    transition: all 2s ease-in-out;
    font-size: 1.4rem;
    @media screen and (max-width: ${breakpoints.tablet}px) {
      font-size: 1.2rem;
    }
    .search-value {
      font-size: 2rem;
      text-transform: capitalize;
    }
  }
`;

const SearchResultDisplayHeader: React.FC<SearchResultDisplayHeader> = ({ inputSearchValue }) => {
  return (
    <StyledSearchResultDisplayHeader
      className="search-display-header-style"
      data-identifier="SearchResultDisplayHeader"
    >
      <h3>
        Votre recherche pour <span className="search-value">{inputSearchValue}</span>
      </h3>
    </StyledSearchResultDisplayHeader>
  );
};

export default SearchResultDisplayHeader;
