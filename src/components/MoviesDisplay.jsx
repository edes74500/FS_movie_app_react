import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { TbH4 } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { FaThumbsDown } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";

const StyledMoviesContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledMovieDisplayHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;

  h3 {
    margin-bottom: 20px;
    transition: all 2s ease-in-out;
    @media screen and (max-width: 750px) {
      margin-bottom: 50px;
      text-align: center;
    }
    .search-value {
      font-size: 2rem;
      text-transform: capitalize;
    }
  }
  .button-container {
    position: absolute;
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

  .error-message {
    padding: 50px 0;
    text-align: center;
  }
`;

const MoviesDisplay = ({ moviesGenres, moviesSearch, popularMovies, inputSearchValue }) => {
  // const [moviesSearch, setMoviesSearch] = React.useState([]);
  const [moviesSort, setMoviesSort] = React.useState({ id: "vote", ascendant: false });
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);

  useEffect(() => {
    setMoviesSort((oldArray) => ({ id: oldArray.id, ascendant: false }));
  }, [moviesToDisplay]);

  useEffect(() => {
    moviesSearch.length > 0 ? setMoviesToDisplay(moviesSearch) : setMoviesToDisplay(popularMovies);
  }, [moviesSearch, popularMovies]);

  const MovieDysplayHeader = ({ inputSearchValue, moviesSort }) => {
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
      <StyledMovieDisplayHeader>
        <h3 style={{ opacity: inputSearchValue ? "1" : "0" }}>
          Votre recherche pour <span className="search-value">{inputSearchValue}</span>
        </h3>
        {moviesSearch.length > 0 && (
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
        )}

        {moviesSearch.length < 1 && (
          <>
            <div className="error-message">
              <h2 style={{ fontSize: "2rem", textAlign: "center" }}>Desole aucun film ne correspond a votre recherche </h2>
              <span style={{ fontSize: "4rem", textAlign: "center" }}>😥</span>
            </div>
            <h3 style={{ marginTop: "50px" }}>En attendant...</h3>
          </>
        )}
      </StyledMovieDisplayHeader>
    );
  };

  return (
    <>
      <StyledMoviesContainer>
        {inputSearchValue.length > 0 && <MovieDysplayHeader inputSearchValue={inputSearchValue} moviesSort={moviesSort} />}
        <AnimatePresence>
          <MovieCard
            moviesToDisplay={moviesToDisplay
              .slice()

              .sort((a, b) => {
                // console.log(moviesSort);
                if (moviesSort.id == "vote") {
                  return moviesSort.ascendant ? a.vote_average - b.vote_average : b.vote_average - a.vote_average;
                } else if (moviesSort.id == "popularity") {
                  return moviesSort.ascendant ? a.popularity - b.popularity : b.popularity - a.popularity;
                }
                return 0;
              })}
            moviesGenres={moviesGenres}
            isReverse={moviesSort.ascendant}
          />
        </AnimatePresence>
      </StyledMoviesContainer>
    </>
  );
};

export default MoviesDisplay;
