import React from "react";
import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

const StyledDiscoverMovieButton = styled.button`
  position: absolute;
  width: 200px;
  font-size: 0.7;
  font-weight: 600;
  padding: 5px;
  cursor: pointer;
  background: var(--secondary-color-08);
  border: 2px solid transparent;
  border-radius: 5px;
  bottom: 10px;
  transition: all 0.3s ease-in-out;
  will-change: transform;
  &:hover {
    background-color: white; /* Couleur de fond au survol */
    color: black; /* Couleur du texte au survol */
    border: 2px solid #4caf50; /* Bordure ajoutée au survol */
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    /* display: none; */
    width: 120px;
    position: relative;
    bottom: 0;
    font-size: 0.7rem;
  }
`;
const DiscoverMovieButton = () => {
  return <StyledDiscoverMovieButton>Decouvrir ce film</StyledDiscoverMovieButton>;
};

export default DiscoverMovieButton;
