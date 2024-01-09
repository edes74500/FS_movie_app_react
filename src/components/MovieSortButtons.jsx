import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { TbH4 } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { FaThumbsDown } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";
// import MovieSortBouttons from "./MovieSortBouttons";

const StyledButtonSortContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 3;
  .button-container {
    position: absolute;
    transform: translateY(-50%);
    @media screen and (max-width: 750px) {
      position: relative;
    }
    right: 0;
    top: 50%;
    display: flex;
    align-items: center;
    color: rgb(var(--secondary-color));
    span {
      white-space: pre;
      font-size: 0.7rem;
    }

    .filter-buttons {
      text-transform: capitalize;
      background: none;
      border: 2px transparent solid;
      color: #ffffff9c;
      font-family: Lato;
      padding: 5px;
      margin: 5px;
      cursor: pointer;
      &.is-selected {
        border: 2px rgb(var(--secondary-color)) solid;
        color: white;
        border-radius: 5px;
      }
    }
    .top-flop-buttons {
      display: block;
      cursor: pointer;
      /* z-index: 2; */
      font-size: 1.4rem;
      padding: 5px;
      color: #ffffff9c;
      &.is-selected {
        color: rgb(var(--secondary-color));
      }
      svg {
        pointer-events: none;
      }
    }
  }
`;
const MovieSortButtons = ({ moviesSort, setMoviesSort }) => {
  //   const [moviesSort, setMoviesSort] = React.useState({ id: "vote", ascendant: false });

  const handleOnClickButton = (e) => {
    setMoviesSort((oldArray) => {
      const id = e.target.id;
      const ascendant = oldArray.id == id ? oldArray.ascendant : false;
      return { id: id, ascendant: ascendant };
    });
  };

  const handleOnClickSortTopFLop = (e) => {
    console.log(e.target.id);
    if (e.currentTarget) {
      setMoviesSort((oldArray) => {
        const id = oldArray.id;
        const ascendant = e.target.id === "ascendant-top" ? false : true;
        return { id: id, ascendant: ascendant };
      });
    } else {
      console.log("Current target is null");
    }
  };

  return (
    <StyledButtonSortContainer>
      <div className="button-container">
        <span>Trier par : </span>
        <input
          type="button"
          value="Note"
          id="vote"
          className={`filter-buttons ${moviesSort.id === "vote" ? "is-selected" : ""}`}
          onClick={handleOnClickButton}
        />
        <input
          type="button"
          value="popularite"
          id="popularity"
          className={`filter-buttons ${moviesSort.id === "popularity" ? "is-selected" : ""}`}
          onClick={handleOnClickButton}
        />
        <span id="ascendant-top" className={`top-flop-buttons ${moviesSort.ascendant ? "" : "is-selected"}`} onClick={handleOnClickSortTopFLop}>
          <FaThumbsUp />
          {/* test */}
        </span>
        <span id="ascendant-flop" className={`top-flop-buttons ${moviesSort.ascendant ? "is-selected" : ""}`} onClick={handleOnClickSortTopFLop}>
          <FaThumbsDown />
        </span>
      </div>
    </StyledButtonSortContainer>
  );
};

export default MovieSortButtons;
