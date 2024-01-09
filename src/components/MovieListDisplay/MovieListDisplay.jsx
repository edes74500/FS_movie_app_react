import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieSingleCard";
import { AnimatePresence } from "framer-motion";
import MovieSortButtons from "./MovieSortButtons";
import ErrorDisplayHeader from "./HeaderMessages/ErrorDisplayHeader";
import ListTitleHeaderDisplay from "./HeaderMessages/ListTitleDisplayHeader";
import SearchResultDisplayHeader from "./HeaderMessages/SearchResultDisplayHeader";

const StyledMoviesDisplay = styled.div`
  gap: 10px;
  position: relative;
  transition: all 2s ease-in-out;
  /* position: relative; */
  flex-direction: column;
  .movie-list-name {
  }
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
        {/* //Affichage de la valeur de la recherche si elle existe */}
        {inputSearchValue && <SearchResultDisplayHeader inputSearchValue={inputSearchValue} />}
        <AnimatePresence>
          {/* //Affichage de l'erreur de recherche si la recherche n'a rien donne' */}
          {MovieListInputSearchResult.length < 1 && inputSearchValue.length !== 0 && <ErrorDisplayHeader />}
        </AnimatePresence>
        {/* //Affichage du titre de la liste si elle existe sur les listes prefetch*/}
        {MovieListDisplayed.length > 0 && MovieListDisplayed[0].listName ? <ListTitleHeaderDisplay MovieListDisplayed={MovieListDisplayed} /> : null}

        {/* //Affichage des boutons de sort */}
        <MovieSortButtons inputSearchValue={inputSearchValue} moviesSort={moviesSort} setMoviesSort={setMoviesSort} />

        {/* //debut du map de la liste de film */}
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
