import React from "react";
import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

const StyledTitleDate = styled.div`
  grid-area: title;
  .date-container {
    margin-left: 2px;
    font-size: 0.8rem;
    font-style: italic;
    text-transform: capitalize;
    color: lightgray;
    margin-top: 10pxpx;
    @media screen and (max-width: ${breakpoints.tablette}px) {
      font-size: 0.7rem;
      /* margin-top: 3px; */
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 0.7rem;
    }
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 1rem;
    }

    /* margin: 10px 0; */
  }
`;
const TitleDate = ({ movie }) => {
  return (
    <StyledTitleDate>
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
    </StyledTitleDate>
  );
};

export default TitleDate;
