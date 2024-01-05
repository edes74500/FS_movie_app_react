// import React from "react";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const StyledBannerContainer = styled.div`
  /* max-height: 500px; */
  min-height: 400px;
  background-position: center center;
  overflow: hidden;
  background-image: url(./img/banner2.png);
  position: relative;
  background-size: cover;
  margin-bottom: 50px;
  &::before {
    content: "";
    /* display: block; */
    width: 100%;
    height: 100%;
    background: rgb(2, 16, 27);
    background: linear-gradient(0deg, var(--main-color) 0%, rgba(0, 0, 0, 0) 20%);
    background: linear-gradient(0deg, var(--main-color) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 84%, var(--main-color) 100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const StyledHeaderContainer = styled.div`
  position: absolute;
  left: 10%;
  bottom: 40px;
  /* font-family: "Cinzel Variable"; */
  text-shadow: 1px 1px 1px #000000d6;
  h2 {
    font-family: "Feed";
    /* color: #ffffffd6; */
    font-size: 3.5rem;
    /* letter-spacing: -7px; */
  }
  h3 {
    font-size: 1.5rem;
  }
`;

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
    background: rgb(var(--secondary-color));
    svg {
      font-size: 20px;
    }
  }
`;

const SearchInput = () => {
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

const Header = () => {
  return (
    <StyledBannerContainer>
      <StyledHeaderContainer>
        <h2>CINE ADDICT</h2>
        <h3>Trouve ton prochain film !</h3>
      </StyledHeaderContainer>
      <SearchInput />
      {/* test */}
      {/* <img src="./img/banner.png" alt="" /> */}
    </StyledBannerContainer>
  );
};

export default Header;
