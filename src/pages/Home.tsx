// impimport React from 'react'ort React from "react";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import FilerModule from "../components/FilterModule/FilerModule";
// import Header from "../components/Header/Header";
import MoviesDisplay from "../components/MovieListDisplay/MovieListDisplay";
import { useEffect, useState } from "react";
import { couleursGenresFilm } from "../styles/globalStyles";
import breakpoints from "../styles/breakpoints";
// import HeaderSecond from "../components/Header/HeroSection2";
import Navbar from "../components/Header/Navbar";
import NavBarSecond from "../components/Header/NavBarSecond";
import HeroSection2 from "../components/Header/HeroSection2";

interface Movie {
  id: number;
  title: string;
  popularity: number;
  // Ajoutez d'autres propriétés de film ici si nécessaire
}

interface moviesGenresAPIList {
  id: number;
  name: string;
}

interface MovieListInputSearchResult {
  id: number;
  title: string;
  popularity: number;
  genre: string;
}

const StyledHomePage = styled.div`
  max-width: 1300px;
  /* overflow-x: hidden; */
  width: 95%;
  height: auto;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 22% 70%;
  gap: 8%;
  position: relative;
  transition: 1s ease-in-out;
  @media screen and (max-width: ${breakpoints.desktop}px) {
    width: 95%;
    display: flex;
    flex-direction: column;
  }
`;

const Home: React.FC = () => {
  const [MovieListPopularMoviesFR, setMovieListPopularMoviesFR] = useState<Movie[]>([]);
  const [moviesGenresAPIList, setmoviesGenresAPIList] = useState<moviesGenresAPIList[]>([]);
  // const [MovieListInputSearchResult, setMovieListInputSearchResult] = useState<Movie[]>([]);
  // const [inputSearchValue, setInputSearchValue] = useState("");

  const tMDBoptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_API_HEADERS_AUTHORIZATION,
    },
  };

  // useEffect(() => {
  //   if (inputSearchValue !== null && inputSearchValue !== undefined) {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/search/movie?query=${inputSearchValue}&include_adult=true&language=fr-FR&page=1`,
  //         tMDBoptions
  //       )
  //       .then((res) => {
  //         const results: Movie[] = res.data.results;
  //         setMovieListInputSearchResult(results.filter((moviesToDisplay) => moviesToDisplay.popularity > 0));
  //         // setMovieListInputSearchResult(results);
  //         // setSearchedMovieListPopularMoviesFR(false);
  //       });
  //   }
  // }, [inputSearchValue]);

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
      <NavBarSecond />
      <HeroSection2
      // setInputSearchValue={setInputSearchValue}
      />
      <StyledHomePage data-identifier="Home">
        <FilerModule moviesGenresAPIList={moviesGenresAPIList} />
        <MoviesDisplay
          moviesGenresAPIList={moviesGenresAPIList}
          // MovieListInputSearchResult={MovieListInputSearchResult}
          MovieListPopularMoviesFR={MovieListPopularMoviesFR}
          // inputSearchValue={inputSearchValue}
        />
      </StyledHomePage>
      {/* <StyledTest className="test"></StyledTest> */}
    </>
  );
};

export default Home;
