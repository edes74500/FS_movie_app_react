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
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    @media screen and (max-width: ${breakpoints.tablet}px) {
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
