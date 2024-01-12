import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { shownGenresFilm } from "../../styles/globalStyles";
import GenreListFilter from "./SortFilters/GenreListFilter";
import YearFilter from "./SortFilters/YearFilter";
import breakpoints from "../../styles/breakpoints";
import { TbFilterSearch } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";

/* Styles communs à toutes les tailles d'écran */

const StyledFilterModule = styled.div`
  position: relative;
  position: sticky;
  top: 0%;
  transition: 1s ease-in-out;
  .filter-wrapper {
    gap: 50px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    height: fit-content;
    justify-content: center;
  }

  @media screen and (max-width: ${breakpoints.desktop}px) {
    position: fixed;
    top: 0;
    transform: ${({ $onMobileFilterOpen }) => ($onMobileFilterOpen ? "translateX(0%)" : "translateX(100%)")};
    z-index: 300;
    background-color: var(--primary-color);
    border-radius: 0 0 0 10px;
    right: 0px;
    width: 300px;
    border-right: var(--secondary-color) 1px solid;
    box-shadow: ${({ $onMobileFilterOpen }) => ($onMobileFilterOpen ? "0px 0px 20px 0px var(--filter-selected-color)" : "none")};
    .mobile-scroll-filter-wrapper {
      height: auto;
      min-height: 100vh; /* Hauteur fixe */
      max-height: 70vh; /* Hauteur fixe */
      overflow-y: auto;
      margin: 10px;
      .filter-wrapper {
        margin-top: 0px;
        padding: 25px;
      }
    }
  }
`;

const StyledCloseButton = styled(IoCloseSharp)`
  transition: 1s;
  background-color: var(--filter-selected-color);
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  z-index: 10;
  left: 0px;
  top: 50%;
  border: 1px solid white;
  transform: translate(-100%, -45%);
  font-size: 4rem;
  opacity: 1;
`;

const StyledFilterButton = styled(TbFilterSearch)`
  transition: 1s;
  background-color: var(--filter-selected-color);
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  z-index: 10;
  left: -20px;
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

const FilerModule = ({ moviesGenresAPIList }) => {
  const filterModule = useRef();

  const [isOnMobile, setIsOnMobile] = React.useState(false);
  const [onMobileFilterOpen, setOnMobileFilterOpen] = React.useState(false);

  const handleResize = () => {
    const desktopBreakpoint = breakpoints.desktop;
    setIsOnMobile(window.innerWidth <= desktopBreakpoint);
  };

  const onMobileTriggerFilterPannel = () => {
    setOnMobileFilterOpen(!onMobileFilterOpen);
    onMobileFilterOpen;
  };

  const MobileFilterHanleClose = () => {
    setOnMobileFilterOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const onMobile = window.innerWidth <= breakpoints.desktop;
    setIsOnMobile(onMobile);
  }, []);

  const handlers = useSwipeable({
    onSwipedRight: () => onMobileTriggerFilterPannel(),
    preventDefaultTouchmoveEvent: true,
    swipeDuration: 150,
    trackMouse: true,
  });

  const handleClickOutside = (e) => {
    // e.stopPropagation();
    // console.log(e);
    if (filterModule.current && !filterModule.current.contains(e.target)) {
      // if (  filterButton.current && !filterButton.current.contains(e.target)) {
      setOnMobileFilterOpen(false);
      // }
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <StyledFilterModule ref={filterModule} $isOnMobile={isOnMobile} $onMobileFilterOpen={onMobileFilterOpen} data-identifier="FilterModule">
        {isOnMobile ? (
          onMobileFilterOpen ? (
            <StyledCloseButton onClick={onMobileTriggerFilterPannel} />
          ) : (
            <StyledFilterButton onClick={onMobileTriggerFilterPannel} />
          )
        ) : null}
        <div {...handlers} className="mobile-scroll-filter-wrapper">
          <div className="filter-wrapper">
            <GenreListFilter data={moviesGenresAPIList} filters={shownGenresFilm} />
            <YearFilter />
          </div>
        </div>
      </StyledFilterModule>
    </>
  );
};

export default FilerModule;
