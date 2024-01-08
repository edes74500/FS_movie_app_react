// import React from "react";
import FilerModule from "../components/FilerModule";
import Header from "../components/Header";
import styled from "styled-components";
import MoviesDisplay from "../components/MoviesDisplay";
import axios from "axios";
import { useEffect, useState } from "react";
import { couleursGenresFilm } from "../styles/globalStyles";

// import { tMDBoptions } from "../../secrets";

const StyledPageContainer = styled.div`
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
  const [popularMovies, setPopularMovies] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState("v");

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
          setMoviesSearch(results.filter((moviesToDisplay) => moviesToDisplay.popularity > 0));
          // setMoviesSearch(results);
          // setSearchedPopularMovies(false);
        });
    }
  }, [inputSearchValue]);

  // useEffect(() => {
  //   if (inputSearchValue !== null && inputSearchValue !== undefined) {
  //     axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1`, options).then((res) => {
  //       console.log(res.data.results);
  //       const results = res.data.results;
  //       setMoviesSearch(results.filter((moviesToDisplay) => moviesToDisplay.popularity > 0));
  //       // setSearchedPopularMovies(false);
  //     });
  //   }
  // }, [inputSearchValue]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1", tMDBoptions).then((response) => {
      console.log(response.data.results);
      setPopularMovies(response.data.results);
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
    <div>
      <Header setInputSearchValue={setInputSearchValue} />
      <StyledPageContainer>
        <FilerModule moviesGenres={moviesGenres} />
        <MoviesDisplay moviesGenres={moviesGenres} moviesSearch={moviesSearch} popularMovies={popularMovies} inputSearchValue={inputSearchValue} />
      </StyledPageContainer>
    </div>
  );
};

export default Home;
