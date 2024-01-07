import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { TbH4 } from "react-icons/tb";

const StyledMoviesContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const MoviesDisplay = ({ moviesGenres, moviesSearch, popularMovies }) => {
  // const [moviesSearch, setMoviesSearch] = React.useState([]);
  const [moviesSort, setMoviesSort] = React.useState({ id: "vote", ascendant: false });
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);

  const handleOnClickButton = (e) => {
    setMoviesSort((oldArray) => {
      const id = e.target.id;
      const ascendant = oldArray.id == id ? !oldArray.ascendant : false;
      return { id: id, ascendant: ascendant };
    });
  };

  useEffect(() => {
    setMoviesSort((oldArray) => ({ id: oldArray.id, ascendant: false }));
  }, [moviesToDisplay]);

  useEffect(() => {
    moviesSearch.length > 0 ? setMoviesToDisplay(moviesSearch) : setMoviesToDisplay(popularMovies);
  }, [moviesSearch, popularMovies]);

  return (
    <>
      <StyledMoviesContainer>
        <button id="vote" onClick={handleOnClickButton}>
          trier par note
        </button>{" "}
        <button id="popularity" onClick={handleOnClickButton}>
          trier par poularite
        </button>
        {moviesSearch.length < 1 && (
          <>
            <h2 style={{ fontSize: "2rem", textAlign: "center" }}>Desole aucun film ne correspond a votre recherche </h2>
            <span style={{ fontSize: "4rem", textAlign: "center" }}>😥</span>
            <h3 style={{ marginTop: "50px" }}>Voici les films populaires du moment en attendant...</h3>
          </>
        )}
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
      </StyledMoviesContainer>
    </>
  );
};

export default MoviesDisplay;
