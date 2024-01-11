import React from "react";
import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

const StyledGenreDisplay = styled.div`
  .genre {
    padding: 3px 10px;
    margin: 3px 3px 0;
    border-radius: 5px;
    display: inline-block;
    font-size: 0.7rem;
    user-select: none;
    font-weight: 700;
    box-shadow: 2px 2px 10px #f3f3f340;
    @media screen and (max-width: ${breakpoints.tablet}px) {
      font-size: 0.6rem;
    }
  }
`;
const GenreDisplay = ({ movie, moviesGenresAPIList }) => {
  return (
    <StyledGenreDisplay>
      {movie.genre_ids.map((id, index) => {
        // console.log(moviesGenresAPIList);
        const genre = moviesGenresAPIList.find((genre) => genre.id === id);
        return genre ? (
          <span key={genre.id} className="genre" style={{ background: genre.color }}>
            {genre.name}
            {"   "}
          </span>
        ) : null;
      })}
    </StyledGenreDisplay>
  );
};

export default GenreDisplay;
