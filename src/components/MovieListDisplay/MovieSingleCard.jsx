import React from "react";
import styled from "styled-components";
import ReactRating from "react-rating";
import { FaHeart } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBookmark } from "react-icons/hi";

const StyledMovieCard = styled.div`
  width: 100%;
  display: flex;
  transition: all 2s ease-in-out;
  flex-direction: column;
  gap: 15px;
`;

const StyledMovieWrapper = styled.div`
  display: flex;
  background-color: rgb(var(--main-color));
  position: relative;
  z-index: 2;
`;

const StyledImageContainer = styled.div`
  min-height: 250px;
  position: relative;
  cursor: pointer;
  aspect-ratio: 2/2.7;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @media screen and (max-width: 750) {
    max-width: 150px;
  }

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
  width: 100%;
  grid-template-areas:
    "title title "
    "info rating ";
  grid-template-columns: 75% 25%;
  min-width: inherit;

  grid-template-columns: 75% 25%;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 750px) {
    justify-content: start;
    display: flex;
    margin: 10px auto;
    gap: 5px;
  }
  margin: 10px 20px;
  /* width: auto; */
  position: relative;
  @media screen and (max-width: 750px) {
  }
  /* gap: 20px; */
  .title {
    grid-area: title;
    .date-container {
      margin-left: 2px;
      font-size: 0.8rem;
      font-style: italic;
      text-transform: capitalize;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      @media screen and (max-width: 750px) {
        font-size: 1rem;
      }
      /* margin: 10px 0; */
    }
  }
  .info-container-text {
    display: flex;
    grid-area: info;
    margin-top: 8px;
    width: 100%;
    min-width: 100%;
    flex-direction: column;
    gap: 12px;
    p {
      font-size: 0.8rem;
      display: -webkit-box;
      -webkit-line-clamp: 4; /* Nombre de lignes à afficher */
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media screen and (max-width: 750px) {
        /* display: none; */
        -webkit-line-clamp: 2; /* Nombre de lignes à afficher */
      }
      @media screen and (max-width: 500px) {
        display: none;
        -webkit-line-clamp: 2; /* Nombre de lignes à afficher */
      }
    }
    .genre {
      padding: 3px 10px;
      margin: 3px 3px 0;
      border-radius: 5px;
      display: inline-block;
      font-size: 0.7rem;
      user-select: none;
      /* text-transform: uppercase; */
      font-weight: 700;
      box-shadow: 2px 2px 10px #f3f3f340;
      @media screen and (max-width: 750px) {
        font-size: 0.6rem;
      }
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
      transition: all 0.3s ease-in-out;
      will-change: transform;
      &:hover {
        filter: blur(0);
        transform: scale(1.04) translateZ(0);
      }
      @media screen and (max-width: 750px) {
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .right-side-container {
    grid-area: rating;
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 50px;
    align-items: center;
    @media screen and (max-width: 750px) {
      flex-direction: row;
      justify-content: center;
    }
    .favori-icone {
      svg {
        font-size: 3rem;
        color: #d3d3d35e;
        cursor: pointer;
        &:hover {
          color: white;
        }
        @media screen and (max-width: 750px) {
          font-size: 2rem;
        }
      }
    }
    .note-display {
      text-align: center;
      span {
        font-size: 1rem;
        @media screen and (max-width: 750px) {
          font-size: 0.7rem;
        }
      }
      .nbr-votes {
        font-size: 0.5rem;
      }
    }
  }
`;

const StyledDivDivider = styled.hr`
  position: absolute;
  width: 100%;
  height: 10px;
  bottom: 0;
  border: none;
  transform: translateY(100%);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(var(--secondary-color), 0.8) 37%,
    rgba(var(--secondary-color), 0.8) 68%,
    rgba(255, 255, 255, 0) 100%
  );
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

const MovieCard = ({ MovieListDisplayed, moviesGenres, isReverse }) => {
  return (
    <StyledMovieCard data-identifier="MovieCard">
      {/* {MovieListDisplayed.length > 0 && MovieListDisplayed[0].listName ? <h3> {MovieListDisplayed[0].listName} a</h3> : null} */}
      {MovieListDisplayed.map((movie, index) => {
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
              <StyledDivDivider />
              <StyledImageContainer
                style={{
                  backgroundImage: movie.poster_path ? `url(https://image.tmdb.org/t/p/original${movie.poster_path})` : `url(./img/affiche.jpg)`,
                }}
              >
                <div className="rank is-absolute">{!isReverse ? index + 1 : Math.abs(index - MovieListDisplayed.length)}</div>
                <div className="icone  is-absolute">
                  {" "}
                  <HiOutlineBookmark />{" "}
                </div>
              </StyledImageContainer>
              <StyledInfoContainer>
                <div className="title">
                  <h2>{movie.title}</h2>
                  <p className="date-container">
                    {/* {movie.release_date} */}
                    {movie.release_date
                      ? new Intl.DateTimeFormat("fr-FR", {
                          year: "numeric",
                          month: "long",
                        }).format(new Date(movie.release_date))
                      : "Release date not available"}
                  </p>
                </div>
                <div className="info-container-text">
                  <div className="movie-genres">
                    {movie.genre_ids.map((id, index) => {
                      const genre = moviesGenres.find((genre) => genre.id === id);
                      return genre ? (
                        <span key={genre.id} className="genre" style={{ background: genre.color }}>
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
                  <div className="note-display">
                    <NoteDisplay note={movie.vote_average / 2} votes={movie.vote_count} />
                  </div>
                  <div className="favori-icone">
                    <FaHeart />
                  </div>
                </div>
              </StyledInfoContainer>
            </StyledMovieWrapper>
          </motion.div>
        );
      })}
      {/* </AnimatePresence> */}
    </StyledMovieCard>
  );
};

export default MovieCard;
