import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import breakpoints from "../../../styles/breakpoints";
import GenreDisplay from "./MovieCardComponents/GenreDisplay";
import TitleDate from "./MovieCardComponents/TitleDate";
import Content from "./MovieCardComponents/Content";
import AddFavorite from "./MovieCardComponents/AddFavorite";
import NoteDisplay from "./MovieCardComponents/NoteDisplay";
import DiscoverMovieButton from "./MovieCardComponents/DiscoverMovieButton";
import ImageDisplay from "./MovieCardComponents/ImageDisplay";

const StyledSingleMovieCard = styled.div`
  width: 100%;
  display: flex;
  transition: all 2s ease-in-out;
  flex-direction: column;
  gap: 15px;

  /* height: 500px; */
  .card-wrapper {
    background-color: var(--single-movie-card-background-color);
    position: relative; // set position to relative for divider
    border-radius: 10px 10px 10px 10px;
    box-shadow: -1px -1px 20px 0px rgb(191 100 0 / 17%);
    box-shadow: 2px 0px 7px 0px rgb(191 100 0 / 17%);
    display: flex;
    /* background-color: var(--primary-color);
     */
    .image-container {
      /* height: 220px; */
      /* overflow: hidden; */
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 220px;
      aspect-ratio: 2/2.7;
      @media screen and (max-width: ${breakpoints.mobile}px) {
        min-height: 200px;
      }
    }
    .infos-container {
      border-radius: 0 10px 10px 0;
      display: grid;
      width: 100%;
      background-color: var(--single-movie-card-background-color);

      grid-template-areas:
        "title title "
        "info rating ";
      grid-template-columns: 75% 25%;
      padding: 0px 20px;
      position: relative;
      @media screen and (max-width: ${breakpoints.mobile}px) {
        gap: 5px;
        justify-content: start;
        display: flex;
        padding: 0px 0px;

        flex-direction: column;
        margin: 10px;
      }

      @media screen and (max-width: ${breakpoints.tablet}px) {
      }
      /* gap: 20px; */

      .left-side-container {
        display: flex;
        grid-area: info;
        margin-top: 8px;
        width: 100%;
        min-width: 100%;
        flex-direction: column;
        gap: 12px;
        @media screen and (max-width: ${breakpoints.mobile}px) {
          margin-top: 0px;
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
        @media screen and (max-width: ${breakpoints.mobile}px) {
          position: absolute;
          bottom: 0;
          flex-direction: row;
          justify-content: center;
          padding: 0px;
          gap: 10px;
          padding-top: 10px;
          /* gap: 10px; */
          /* width: auto; */
          margin: auto;
        }
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
    var(--secondary-color-05) 37%,
    var(--secondary-color-05) 68%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const SingleMovieCard = ({ MovieListDisplayed, moviesGenresAPIList, isReverse }) => {
  const [isOnMobile, setIsOnMobile] = useState(window.innerWidth < breakpoints.mobile);

  const handleIsOnMobile = () => {
    console.log(window.innerWidth < breakpoints.mobile);
    setIsOnMobile(window.innerWidth < breakpoints.mobile);
  };

  useEffect(() => {
    window.addEventListener("resize", handleIsOnMobile);
    return () => window.removeEventListener("resize", handleIsOnMobile);
  }, []);

  return (
    <StyledSingleMovieCard data-identifier="MovieCard">
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
            <div className="card-wrapper">
              <StyledDivDivider />
              <div className="image-container">
                <ImageDisplay
                  movie={movie}
                  isReverse={isReverse}
                  MovieListDisplayed={MovieListDisplayed}
                  index={index}
                />
              </div>
              <div className="infos-container">
                <TitleDate movie={movie} />
                <div className="left-side-container">
                  <GenreDisplay movie={movie} moviesGenresAPIList={moviesGenresAPIList} />
                  <Content movie={movie} />
                  {!isOnMobile && <DiscoverMovieButton />}
                </div>
                <div className="right-side-container">
                  {isOnMobile && <DiscoverMovieButton />}
                  <NoteDisplay movie={movie} />
                  <AddFavorite movie={movie} />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </StyledSingleMovieCard>
  );
};

export default SingleMovieCard;
