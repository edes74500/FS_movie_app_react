// import React from "react";
import styled from "styled-components";
import axios from "axios";
import FilerModule from "../components/FilterModule/FilerModule";
import Header from "../components/Header/Header";
import MoviesDisplay from "../components/MovieListDisplay/MovieListDisplay";
import { useEffect, useState } from "react";
import { couleursGenresFilm } from "../styles/globalStyles";
import breakpoints from "../styles/breakpoints";
import HeaderSecond from "../components/Header/headerSecond";

const StyledHomePage = styled.div`
  max-width: 1300px;
  overflow-x: hidden;
  width: 95%;
  height: 100vh;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 22% 70%;
  gap: 8%;
  position: relative;
  /* background-color: red; */
  transition: 1s ease-in-out;
  transition: 1s ease-in-out;
  @media screen and (max-width: ${breakpoints.desktop}px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;
const Home = () => {
  const [MovieListPopularMoviesFR, setMovieListPopularMoviesFR] = useState([]);
  const [moviesGenresAPIList, setmoviesGenresAPIList] = useState([]);
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
  //       (res.data.results);
  //       const results = res.data.results;
  //       setMovieListInputSearchResult(results.filter((moviesToDisplay) => moviesToDisplay.popularity > 0));
  //       // setSearchedMovieListPopularMoviesFR(false);
  //     });
  //   }
  // }, [inputSearchValue]);

  //FETCH POPULAR MOVIES
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1", tMDBoptions).then((response) => {
      response.data.results;
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
        //push des couleurs en fonction des genres - contient maintenant ID Name et color EG. 7: {id: 10751, name: 'Familial', color: '#36ea42'}
        const newReponse = response.data.genres.map((genre, index) => ({ ...genre, color: couleursGenresFilm[index] }));
        setmoviesGenresAPIList(newReponse);
        newReponse;
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* <Header setInputSearchValue={setInputSearchValue} /> */}
      <HeaderSecond setInputSearchValue={setInputSearchValue} />
      <StyledHomePage data-identifier="Home">
        <FilerModule moviesGenresAPIList={moviesGenresAPIList} />
        <MoviesDisplay
          moviesGenresAPIList={moviesGenresAPIList}
          MovieListInputSearchResult={MovieListInputSearchResult}
          MovieListPopularMoviesFR={MovieListPopularMoviesFR}
          inputSearchValue={inputSearchValue}
        />
      </StyledHomePage>
    </>
  );
};

export default Home;
