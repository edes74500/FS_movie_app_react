import React, { useEffect } from "react";
import styled from "styled-components";
import { shownGenresFilm } from "../styles/globalStyles";
import GenreListFilter from "./SortFilters/GenreListFilter";
import YearFilter from "./SortFilters/YearFilter";
import media from "styled-media-query";

const StyledFilterModule = styled.div`
  /* Styles communs à toutes les tailles d'écran */

  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 50px;
  height: fit-content;
  justify-content: center;
  transition: 1s ease-in-out;
  ${media.lessThan("large")`
      position: fixed;
    top: 10%;
    right: 0;
    z-index: 300;
    background-color: green;
    padding: 30px;
    width: 300px;
    /* Styles pour les écrans plus petits que la taille 'medium' */
  `}
`;

const CSSContainerCollapse = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  transition: 1s;
  min-height: 0;
  /* padding: 10px; */
  &.is-hidden {
    /* padding: 0px; */
    grid-template-rows: 0fr;
    transform: translateY(100%) scale(0);
  }
  > :first-child {
    min-height: 0;
  }
`;

const FilerModule = ({ moviesGenres }) => {
  const [isOnMobile, setIsOnMobile] = React.useState(false);

  const handleResize = () => {
    setIsOnMobile(window.innerWidth <= 900 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const onMobile = window.innerWidth <= 900 ? true : false;
    setIsOnMobile(onMobile);
  }, []);

  return (
    <StyledFilterModule isOnMobile={isOnMobile} data-identifier="FilterModule">
      {/* <CategoriesIcones data={moviesGenres} filters={shownGenresFilm} /> */}
      <GenreListFilter data={moviesGenres} filters={shownGenresFilm} isOnMobile={isOnMobile} />
      <YearFilter isOnMobile={isOnMobile} />
      {/* <SectionContainer isOnMobile={isOnMobile} /> */}
    </StyledFilterModule>
  );
};

export default FilerModule;
