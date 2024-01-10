import React, { useEffect } from "react";
import styled from "styled-components";
import { shownGenresFilm } from "../../styles/globalStyles";
import GenreListFilter from "./SortFilters/GenreListFilter";
import YearFilter from "./SortFilters/YearFilter";
import customBreakpoints from "../../styles/customBreakpoints";
import { TbFilterSearch } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { TbH1 } from "react-icons/tb";
import MobileFilterHandle from "./FilterModuleSearchButton";

/* Styles communs à toutes les tailles d'écran */

const StyledFilterModule = styled.div`
  position: relative;
  transition: 1s ease-in-out;
  .filter-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 10px;
    height: fit-content;
    justify-content: center;
  }
  ${customBreakpoints.lessThan("desktop")`
    position: fixed;
    top: 50%;
    transform: ${({ onMobileFilterOpen }) => (onMobileFilterOpen ? "translate(2%, -50%)" : "translate(100%, -50%)")};
    z-index: 300;
    background-color: var(--primary-color);
    border-radius: 0 0 0 10px;
    right: 0px;
    width: 300px;
    border: var(--secondary-color) 1px solid;
       box-shadow:${({ onMobileFilterOpen }) => (onMobileFilterOpen ? "-9px 11px 20px 4px rgb(255 172 7 / 31%)" : "")};
    .mobile-scroll-filter-wrapper{
      height: auto;
      max-height: 70vh; /* Hauteur fixe */
      overflow-y: auto; 
      margin: 10px;
        .filter-wrapper {
          margin-top: 0px;
          padding : 25px;

    }
  }
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

const StyledMobileCloseFilterHandle = styled(IoCloseSharp)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
  font-size: 2rem;
  border-radius: 50%;
  background-color: var(--secondary-color);
`;

const StyledMobileFilterHandle = styled(TbFilterSearch)`
  transition: 1s;
  background-color: var(--secondary-color);
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  z-index: 10;
  left: 0;
  border: 1px solid white;
  transform: translate(-100%, -50%);
  font-size: 4rem;
  opacity: 0;
  animation: upAdnDown 2s 1s ease-in-out infinite, fadeIN 1s 1s forwards;
  /* animation: fadeIN 1s 1s forwards; */
  @keyframes fadeIN {
    0% {
      opacity: 0;
      top: 20%;
    }
    100% {
      opacity: 1;
      top: 50%;
    }
  }
  @keyframes upAdnDown {
    0% {
      transform: translate(-100%, -50%);
    }
    50% {
      transform: translate(-100%, -45%);
    }
    100% {
      transform: translate(-100%, -50%);
    }
  }
`;

const FilerModule = ({ moviesGenres }) => {
  const [isOnMobile, setIsOnMobile] = React.useState(false);
  const [onMobileFilterOpen, setOnMobileFilterOpen] = React.useState(false);

  const handleResize = () => {
    setIsOnMobile(window.innerWidth <= 900 ? true : false);
  };

  const MobileFilterHanle = () => {
    setOnMobileFilterOpen(!onMobileFilterOpen);
    console.log(onMobileFilterOpen);
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
    <>
      <StyledFilterModule isOnMobile={isOnMobile} onMobileFilterOpen={onMobileFilterOpen} data-identifier="FilterModule">
        {/* on mobile icone pour ouvrir */}
        {isOnMobile ? (
          onMobileFilterOpen ? (
            <StyledMobileCloseFilterHandle onClick={MobileFilterHanle} />
          ) : (
            <StyledMobileFilterHandle onClick={MobileFilterHanle} />
          )
        ) : null}
        {/* </StyledMobileFilterHandle> */}
        {/* // {onMobileFilterOpen ? <IoCloseSharp /> : <TbFilterSearch />} */}
        {/* ) : null} */}
        <div className="mobile-scroll-filter-wrapper">
          <div className="filter-wrapper">
            {/* <CategoriesIcones data={moviesGenres} filters={shownGenresFilm} /> */}
            <GenreListFilter data={moviesGenres} filters={shownGenresFilm} isOnMobile={isOnMobile} />
            <YearFilter isOnMobile={isOnMobile} />
            {/* <SectionContainer isOnMobile={isOnMobile} /> */}
          </div>
        </div>
      </StyledFilterModule>
    </>
  );
};

export default FilerModule;
