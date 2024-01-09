import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { TbH4 } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { FaThumbsDown } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";
import MovieSortButtons from "./MovieSortButtons";

const StyledSearchDisplayHeader = styled.div`
  width: 100%;
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
`;

// COMPOSANT SEARCH DYSPLAY HEADER
const SearchDisplayHeader = ({ inputSearchValue, MovieListDisplayed }) => {
  return (
    <StyledSearchDisplayHeader className="search-display-header-style">
      {inputSearchValue && (
        <h3 style={{ opacity: inputSearchValue ? "1" : "0" }}>
          Votre recherche pour <span className="search-value">{inputSearchValue}</span>
        </h3>
      )}
      {/* {!inputSearchValue && <h3>{MovieListDisplayed[0].listName}</h3>} */}
    </StyledSearchDisplayHeader>
  );
};

/// COMNPOSANT ERROR MESSAGE
const StyledErrorDisplayHeader = styled.div`
  width: 100%;
  .error-message {
    padding: 50px 0;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
    span {
      font-size: 4rem;
      text-align: center;
    }
  }
  h3 {
    margin-top: 50px;
  }
`;

const ErrorDisplayHeader = () => {
  return (
    <StyledErrorDisplayHeader className="error-display-header-style">
      <div className="error-message">
        <h2>Desole aucun film ne correspond a votre recherche </h2>
        <span>😥</span>
      </div>
      <h3>En attendant...</h3>
    </StyledErrorDisplayHeader>
  );
};

const StyledMoviesDisplay = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const MoviesDisplay = ({ moviesGenres, MovieListInputSearchResult, MovieListPopularMoviesFR, inputSearchValue }) => {
  // const [MovieListInputSearchResult, setMovieListInputSearchResult] = React.useState([]);
  const [MovieListDisplayed, setMovieListDisplayed] = useState([]);
  const [moviesSort, setMoviesSort] = React.useState({ id: "vote", ascendant: false });

  // Reset le tri pour qu'il soit ascendant des que le map de film change
  useEffect(() => {
    setMoviesSort((oldArray) => ({ id: oldArray.id, ascendant: false }));
  }, [MovieListDisplayed]);

  // Set the ARRAY to be displayed
  useEffect(() => {
    MovieListInputSearchResult.length > 0 ? setMovieListDisplayed(MovieListInputSearchResult) : setMovieListDisplayed(MovieListPopularMoviesFR);
  }, [MovieListInputSearchResult, MovieListPopularMoviesFR]);

  return (
    <>
      <StyledMoviesDisplay data-identifier="MoviesDisplay">
        {
          // inputSearchValue.length > 0 &&
          <SearchDisplayHeader inputSearchValue={inputSearchValue} MovieListDisplayed={MovieListDisplayed} />
        }
        {MovieListInputSearchResult.length < 1 && inputSearchValue.length !== 0 && <ErrorDisplayHeader />}
        <MovieSortButtons inputSearchValue={inputSearchValue} moviesSort={moviesSort} setMoviesSort={setMoviesSort} />
        <AnimatePresence>
          <MovieCard
            MovieListDisplayed={MovieListDisplayed.slice().sort((a, b) => {
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
      </StyledMoviesDisplay>
    </>
  );
};

export default MoviesDisplay;
