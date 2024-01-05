import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  const StyledSearchDiv = styled.div`
    display: flex;
    height: 40px;
    outline: none;
    border-radius: 5px;
    width: fit-content;
    overflow: hidden;
    &:focus-within {
      /* border: 1px solid #000; */
    }
    input {
      border: none;
      outline: none;
      width: 400px;
      padding-left: 10px;
    }
    button {
      border: none;
      width: 50px;
      cursor: pointer;
      background: rgb(255, 172, 7);
      svg {
        font-size: 20px;
      }
    }
  `;
  return (
    <StyledSearchDiv>
      <input type="text" placeholder="Rechercher..." />
      <button>
        <span role="img" aria-label="Loupe">
          <IoSearch />
        </span>
      </button>
    </StyledSearchDiv>
  );
};

const StyledFilterModule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
const FilerModule = () => {
  return (
    <StyledFilterModule>
      <SearchInput />
      <input type="text" />
      <input type="text" />
    </StyledFilterModule>
  );
};

export default FilerModule;
