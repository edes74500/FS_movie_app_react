import React from "react";
import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";
import { HiOutlineBookmark } from "react-icons/hi";

const StyledImageDisplay = styled.div`
  /* min-height: inherit; */
  height: 100%;
  /* padding: 10px; */
  border-radius: 10px 0 0 10px;
  /* overflow: hidden; */
  aspect-ratio: 2/2.7;
  max-width: 100%;
  position: relative;
  /* padding: px; */
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* overflow: hidden; */
  @media screen and (max-width: ${breakpoints.mobile}px) {
    min-height: inherit;
  }
  /* &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(2, 16, 27);
    background: linear-gradient(0deg, var(--single-movie-card-background-color) 0%, rgba(0, 0, 0, 0) 20%);
    background: linear-gradient(
      0deg,
      var(--single-movie-card-background-color) 0%,
      rgba(0, 0, 0, 0) 15%,
      rgba(0, 0, 0, 0) 84%,
      var(--single-movie-card-background-color) 100%
    );
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
    background: linear-gradient(0deg, var(--single-movie-card-background-color) 0%, rgba(0, 0, 0, 0) 20%);
    background: linear-gradient(
      90deg,
      var(--single-movie-card-background-color) 0%,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0) 80%,
      var(--single-movie-card-background-color) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  } */
  .rank {
    position: absolute;
    z-index: 4;
  }
  .is-absolute {
    position: absolute;
    z-index: 4;
    /* color: var(--filter-selected-color); */
    color: var(--secondary-color);

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
const ImageDisplay = ({ movie, isReverse, MovieListDisplayed, index }) => {
  return (
    <StyledImageDisplay
      style={{
        backgroundImage: movie.poster_path
          ? `url(https://image.tmdb.org/t/p/original${movie.poster_path})`
          : `url(./img/affiche.jpg)`,
      }}
    >
      <div className="rank is-absolute">{!isReverse ? index + 1 : Math.abs(index - MovieListDisplayed.length)}</div>
      <div className="icone  is-absolute">
        {" "}
        <HiOutlineBookmark />{" "}
      </div>
    </StyledImageDisplay>
  );
};

export default ImageDisplay;
