import React from "react";
import styled from "styled-components";
import ReactRating from "react-rating";
import { FaHeart } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBookmark } from "react-icons/hi";

const StyledMovieWrapper = styled.div`
  display: flex;
  box-shadow: 50px 30px 25px rgba(var(--secondary-color), 0.7);
  background-color: rgb(var(--main-color));

  /* border-top: 1px solid rgb(var(--secondary-color)); */
  /* border-left: 1px solid rgb(var(--secondary-color)); */
`;

const StyledImageContainer = styled.div`
  min-height: 250px;
  position: relative;
  /* width: auto; */
  /* min-width: 150px; */
  /* height: auto; */
  aspect-ratio: 2/2.7;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  img {
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
  .rank {
    position: absolute;
    z-index: 4;
  }
  .is-absolute {
    position: absolute;
    z-index: 4;
    color: rgba(var(--secondary-color), 0.9);
    &.icone {
      font-size: 3rem;
      left: -20px;
      top: -12px;
    }
    &.rank {
      left: 4px;
      transform: translateX(-50%);
      font-size: 0.8rem;
    }
  }
`;

const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  flex-direction: column;
  justify-content: center;
  margin: 10px 20px;
  width: 100%;
  position: relative;
  gap: 20px;

  .info-container-text {
    display: flex;
    margin-top: 8px;
    width: 100%;
    flex-direction: column;
    gap: 12px;
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      /* margin: 10px 0; */
    }
    p {
      font-size: 0.8rem;
      display: -webkit-box;
      -webkit-line-clamp: 4; /* Nombre de lignes à afficher */
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .genre {
      padding: 3px 10px;
      margin: 3px 3px 0;
      border-radius: 5px;
      display: inline-block;
      font-size: 0.7rem;
    }
    .date-container {
      margin-left: 2px;
      font-size: 0.8rem;
      font-style: italic;
      text-transform: capitalize;
    }
    button {
      position: absolute;
      width: 200px;
      font-size: 0.7;
      font-weight: bold;
      padding: 5px;
      cursor: pointer;
      background: rgb(var(--secondary-color));
      border: none;
      border-radius: 5px;
      bottom: 7px;
    }
  }
  .right-side-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .favori-icone {
      svg {
        font-size: 3rem;
        color: #d3d3d35e;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
    }
    .note-display {
      text-align: center;
      span {
        font-size: 1rem;
      }
      .nbr-votes {
        font-size: 0.5rem;
      }
    }
  }
`;

const FullStar = styled(TiStarFullOutline)`
  /* background-color: gold; */
  color: gold; // ou toute autre couleur pour l'étoile remplie
`;
const EmptyStar = styled(TiStarFullOutline)`
  color: grey; // ou toute autre couleur pour l'étoile vide
`;
const NoteDisplay = ({ note, votes }) => {
  return (
    <>
      <ReactRating initialRating={note} emptySymbol={<EmptyStar />} fullSymbol={<FullStar />} readonly stop={5} /> {parseFloat(note.toFixed(1))}{" "}
      <br />
      <span className="nbr-votes">({votes.toLocaleString("fr-FR")} votes)</span>
    </>
  );
};

const MovieCard = ({ moviesToDisplay, moviesGenres, isReverse }) => {
  return (
    <>
      {moviesToDisplay.map((movie, index) => {
        return (
          <motion.div
            key={`${movie.title}-${movie.id}-${index}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.3, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="movie-card"
          >
            <StyledMovieWrapper>
              <StyledImageContainer
                style={{
                  backgroundImage: movie.poster_path ? `url(https://image.tmdb.org/t/p/original${movie.poster_path})` : `url(./img/affiche.jpg)`,
                }}
              >
                <div className="rank is-absolute">{!isReverse ? index + 1 : Math.abs(index - moviesToDisplay.length)}</div>
                <div className="icone  is-absolute">
                  {" "}
                  <HiOutlineBookmark />{" "}
                </div>
              </StyledImageContainer>
              <StyledInfoContainer>
                <div className="info-container-text">
                  <div className="title">
                    <h2>{movie.title}</h2>
                    <p className="date-container">
                      {/* {movie.release_date} */}
                      {new Intl.DateTimeFormat("fr-FR", { year: "numeric", month: "long" }).format(new Date(movie.release_date))}
                    </p>
                  </div>
                  <div className="movie-genres">
                    {movie.genre_ids.map((id, index) => {
                      const genre = moviesGenres.find((genre) => genre.id === id);
                      return genre ? (
                        <span key={genre.id} className="genre" style={{ background: "red" }}>
                          {genre.name}
                          {"   "}
                        </span>
                      ) : null;
                    })}
                  </div>
                  <p>{movie.overview}</p>
                  <button>Decouvrir ce film</button>
                </div>
                <div className="right-side-container">
                  <div className="favori-icone">
                    <FaHeart />
                  </div>
                  <div className="note-display">
                    <NoteDisplay note={movie.vote_average / 2} votes={movie.vote_count} />
                  </div>
                </div>
              </StyledInfoContainer>
            </StyledMovieWrapper>
          </motion.div>
        );
      })}
      {/* </AnimatePresence> */};
    </>
  );
};

export default MovieCard;
