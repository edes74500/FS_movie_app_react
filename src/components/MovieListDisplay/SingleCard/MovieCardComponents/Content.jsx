import React from "react";
import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

const StyledContent = styled.p`
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Nombre de lignes à afficher */
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: ${breakpoints.mobile}px) {
    -webkit-line-clamp: 3; /* Nombre de lignes à afficher */
  }
`;
const Content = ({ movie }) => {
  return <StyledContent>{movie.overview}</StyledContent>;
};

export default Content;
