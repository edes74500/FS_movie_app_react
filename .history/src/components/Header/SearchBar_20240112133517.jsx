import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import breakpoints from "../../styles/breakpoints";

const StyledSearchDiv = styled.div`
  display: flex;
  height: 40px;
  outline: none;
  border-radius: 5px;
  width: fit-content;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border: 1px solid var(--primary-color);
  &:focus-within {
  }
  input {
    border: none;
    outline: none;
    width: 400px;
    padding-left: 10px;
    @media screen and (max-width: ${breakpoints.tablet}px) {
      width: 250px;
    }
  }
  button {
    border: none;
    width: 50px;
    cursor: pointer;
    background: var(--secondary-color);
    svg {
      font-size: 20px;
    }
  }
`;

const SearchBar = ({ setInputSearchValue }) => {
  const timeoutRef = useRef(null);

  const handleOnChange = (e) => {
    const searchValue = e.target.value;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setInputSearchValue(searchValue);
    }, 800);
  };

  return (
    <StyledSearchDiv>
      <input type="text" placeholder="Rechercher..." onChange={handleOnChange} />
      <button>
        <span role="img" aria-label="Loupe">
          <IoSearch />
        </span>
      </button>
    </StyledSearchDiv>
  );
};

export default SearchBar;
