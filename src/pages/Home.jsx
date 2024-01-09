// import React from "react";
import FilerModule from "../components/FilerModule";
import Header from "../components/Header";
import styled from "styled-components";
import MoviesDisplay from "../components/MoviesDisplay";
import axios from "axios";
import { useEffect, useState } from "react";
import { couleursGenresFilm } from "../styles/globalStyles";

// import { tMDBoptions } from "../../secrets";

const StyledHomePage = styled.div`
  max-width: 1200px;
  /* overflow-x: hidden; */
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 70%;
  gap: 10%;
  transition: 1s ease-in-out;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
const Home = () => {
  const [MovieListPopularMoviesFR, setMovieListPopularMoviesFR] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [MovieListInputSearchResult, setMovieListInputSearchResult] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState("");

  const tMDBoptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_API_HEADERS_AUTHORIZATION,
    },
  };

  useEffect(() => {
    if (inputSearchValue !== null && inputSearchValue !== undefined) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?query=${inputSearchValue}&include_adult=true&language=fr-FR&page=1`, tMDBoptions)
        .then((res) => {
          const results = res.data.results;
          setMovieListInputSearchResult(results.filter((moviesToDisplay) => moviesToDisplay.popularity > 0));
          // setMovieListInputSearchResult(results);
          // setSearchedMovieListPopularMoviesFR(false);
        });
    }
  }, [inputSearchValue]);

  // useEffect(() => {
  //   if (inputSearchValue !== null && inputSearchValue !== undefined) {
  //     axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1`, options).then((res) => {
  //       console.log(res.data.results);
  //       const results = res.data.results;
  //       setMovieListInputSearchResult(results.filter((moviesToDisplay) => moviesToDisplay.popularity > 0));
  //       // setSearchedMovieListPopularMoviesFR(false);
  //     });
  //   }
  // }, [inputSearchValue]);

  //FETCH POPULAR MOVIES
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1", tMDBoptions).then((response) => {
      console.log(response.data.results);
      const moviesListData = response.data.results.map((movie) => {
        return {
          ...movie,
          listName: "Les films les plus populaires en France en ce moment",
        };
      });
      setMovieListPopularMoviesFR(moviesListData);
    });
  }, []);

  // FETCH LIST GENRES
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?language=fr", tMDBoptions)
      .then((response) => {
        const newReponse = response.data.genres.map((genre, index) => ({ ...genre, color: couleursGenresFilm[index] }));
        setMoviesGenres(newReponse);
        console.log(newReponse);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header setInputSearchValue={setInputSearchValue} />
      <StyledHomePage data-identifier="Home">
        <FilerModule moviesGenres={moviesGenres} />
        <MoviesDisplay
          moviesGenres={moviesGenres}
          MovieListInputSearchResult={MovieListInputSearchResult}
          MovieListPopularMoviesFR={MovieListPopularMoviesFR}
          inputSearchValue={inputSearchValue}
        />
      </StyledHomePage>
    </>
  );
};

export default Home;
