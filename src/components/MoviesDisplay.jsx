import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const StyledMoviesContainer = styled.div`
  overflow: hidden;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const MoviesDisplay = () => {
  const [moviesSearch, setMoviesSearch] = React.useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzMyNTI5YWQ2N2ZlODc0OGVmN2I5NGUwODgyZWJlZCIsInN1YiI6IjY1OTY4YWY1NjBjNTFkN2IyZjk3ODc4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JrL3wCMu69gYTBXgOdhijJ3syoBCDbnYCQt6xopPSlQ",
    },
  };

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/search/movie?query=fast and fu& include_adult=false & language=en - US & page=1", options).then((res) => {
      console.log(res.data.results);
      setMoviesSearch(res.data.results);
    });
  }, []);

  return (
    <StyledMoviesContainer>
      <MovieCard moviesSearch={moviesSearch} />
    </StyledMoviesContainer>
  );
};

export default MoviesDisplay;
