import React from "react";
import styled from "styled-components";
import ReactRating from "react-rating";
import { TiStarFullOutline } from "react-icons/ti";
import breakpoints from "../../../../styles/breakpoints";

const StyledNoteDisplay = styled.div`
  text-align: center;
  margin: auto;
  @media screen and (max-width: ${breakpoints.tablet}px) {
    font-size: 0.7rem;
  }
  /* align-items: center; */
  span {
    font-size: 1rem;
    @media screen and (max-width: ${breakpoints.tablet}px) {
      font-size: 0.7rem;
    }
  }
  .nbr-votes {
    font-size: 0.5rem;
  }
`;
const FullStar = styled(TiStarFullOutline)`
  /* background-color: gold; */
  color: gold; // ou toute autre couleur pour l'étoile remplie
`;
const EmptyStar = styled(TiStarFullOutline)`
  color: grey; // ou toute autre couleur pour l'étoile vide
`;
const NoteDisplay = ({ movie }) => {
  return (
    <StyledNoteDisplay>
      <ReactRating initialRating={movie.vote_average} emptySymbol={<EmptyStar />} fullSymbol={<FullStar />} readonly stop={5} />{" "}
      {parseFloat((movie.vote_average / 2).toFixed(1))} <br />
      <span className="nbr-votes">({movie.vote_count.toLocaleString("fr-FR")} votes)</span>
    </StyledNoteDisplay>
  );
};

export default NoteDisplay;
