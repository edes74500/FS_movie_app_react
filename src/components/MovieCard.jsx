import React from "react";
import styled from "styled-components";
import ReactRating from "react-rating";
import { TiStarFullOutline } from "react-icons/ti";

const StyledMovieWrapper = styled.div`
  display: flex;
  border: 1px solid rgb(var(--secondary-color));
`;

const StyledImageContainer = styled.div`
  max-width: 200px;
  position: relative;
  img {
    width: 100%;
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(2, 16, 27);
    background: linear-gradient(0deg, rgb(var(--main-color)) 0%, rgba(0, 0, 0, 0) 20%);
    background: linear-gradient(0deg, rgb(var(--main-color)) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 84%, rgb(var(--main-color)) 100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(2, 16, 27);
    background: linear-gradient(0deg, rgb(var(--main-color)) 0%, rgba(0, 0, 0, 0) 20%);
    background: linear-gradient(90deg, rgb(var(--main-color)) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgb(var(--main-color)) 100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FullStar = styled(TiStarFullOutline)`
  /* background-color: gold; */
  color: gold; // ou toute autre couleur pour l'étoile remplie
`;
const EmptyStar = styled(TiStarFullOutline)`
  color: grey; // ou toute autre couleur pour l'étoile vide
`;
const NoteDisplay = ({ note, votes }) => {
  console.log(note);
  return (
    <div>
      <ReactRating initialRating={note} emptySymbol={<EmptyStar />} fullSymbol={<FullStar />} readonly stop={5} /> {parseFloat(note.toFixed(1))} (
      {votes.toLocaleString("fr-FR")} votes)
    </div>
  );
};

const MovieCard = ({ moviesSearch }) => {
  return (
    <>
      {moviesSearch.map((movie) => {
        return (
          <StyledMovieWrapper key={movie.id}>
            <StyledImageContainer>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            </StyledImageContainer>
            <StyledInfoContainer>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>

              <div>
                <NoteDisplay note={movie.vote_average / 2} votes={movie.vote_count} />
              </div>
            </StyledInfoContainer>
          </StyledMovieWrapper>
        );
      })}
    </>
  );
};

export default MovieCard;
