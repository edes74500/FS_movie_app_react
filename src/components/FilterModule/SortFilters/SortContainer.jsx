import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";
// import { shownGenresFilm } from "../styles/globalStyles";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import breakpoints from "../../../styles/breakpoints";
import { AnimatePresence, motion } from "framer-motion";
const StyledGenreListFilter = styled.div`
  /* display: flex; */
  flex-direction: column;
  outline: none;
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  /* cursor: pointer; */
  box-shadow: 4px 5px 30px -28px var(--secondary-color);
  .filter-title-container {
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid var(--secondary-color);
    position: relative;
    cursor: pointer;
    z-index: 20;
    height: 40px;
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--secondary-color-07) 0%, var(--primary-color) 100%);
    background: var(--filer-gategory-header-color);
    .dropdown-icon {
      display: flex;
      position: absolute;
      align-items: center;
      font-size: 25px;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      svg {
        transition: 0.5s ease-in-out;
        transform: ${({ $listIsOpen }) => ($listIsOpen ? "rotate(0)" : "rotate(-180deg)")};
      }
    }
    .reset-icon {
      display: flex;
      cursor: pointer;
      position: absolute;
      align-items: center;
      font-size: 20px;
      right: -20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      svg {
        transition: 0.5s ease-in-out;
        font-size: 1.5rem;
        color: lightgray;
        @media screen and (max-width: ${breakpoints.desktop}px) {
        }
      }
    }
    h3 {
      display: flex;
      align-items: center;
      color: black;
      color: var(--filter-categery-header-text-color);
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: 2px;
      font-size: 1.2rem;
      font-family: roboto;
      /* font-size: 5rem; */

      svg {
        margin: 4px;
        font-size: 1rem;
      }
    }
  }
  .filter-content-container {
    z-index: 1;
    display: flex;
    border-radius: ${({ $moreOptions }) => ($moreOptions ? "0 0 0 0" : " 0 0 5px 5px")};
    background-color: #89858539;
    background-color: var(--item-category-color);
    width: 100%;
    flex-direction: column;
    justify-content: center;
    transition: all 0.7s ease-in-out;
    @media screen and (max-width: ${breakpoints.mobile}px) {
      /* display: none; */
    }
  }
  .is-open {
    /* transform: scale(2); */
  }
  .handle-list-open {
    height: auto;
    width: auto;
  }
  .more-content {
    border-radius: 0 0 5px 5px;
    position: relative;
    /* z-index: 20; */
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: right;
    font-size: 0.9rem;
    cursor: pointer;
    /* text-transform: uppercase; */
    background: var(--filer-gategory-header-color);
  }
  .more-content-reset {
    /* border-radius: 0 0 5px 5px; */
    position: relative;
    /* z-index: 20; */
    height: 30px;
    /* color: #000000a1; */
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    font-weight: 500;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: right;
    font-size: 0.9rem;
    font-style: italic;
    cursor: pointer;
    background: var(--filter-reset-button-color);
    background-color: var(--filter-reset-button-color);
  }
`;

const SortContainer = ({
  filterName,
  children,
  userHasSelectedFilter,
  onClickReset,
  toogleExpand,
  moreOptions,
  test,
}) => {
  const [listIsOpen, setListIsOpen] = React.useState(false);

  const toogleListFilter = (close) => {
    if (close) {
      setListIsOpen(false);
    } else {
      setListIsOpen(!listIsOpen);
    }
  };

  return (
    <StyledGenreListFilter data-indentifier="GenreListFilter" $moreOptions={moreOptions} $listIsOpen={listIsOpen}>
      <div
        className="filter-title-container"
        onClick={() => {
          toogleListFilter();
          moreOptions && toogleExpand();
        }}
      >
        <h3>
          <TbCategoryPlus />
          Par {filterName}
        </h3>
        {moreOptions && (
          <span className="dropdown-icon">
            <MdOutlineArrowDropDownCircle />
          </span>
        )}
        {/* <div className="handle-list-open" onClick={closeList}> */}
        {/* {userHasSelectedGenres && (
          <span className="reset-icon">
            <MdOutlineCancel
              onClick={() => {
                closeList();
                onClickReset();
              }}
            />
          </span>
        )} */}
      </div>
      <AnimatePresence>
        {onClickReset && userHasSelectedFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "30px", transition: { duration: 0.3 } }}
            exit={{ opacity: 0, height: 0 }}
            key={2990987}
            className="more-content-reset"
            onClick={(e) => {
              toogleListFilter("close");
              onClickReset(e);
            }}
          >
            supprimer les options
          </motion.div>
        )}
      </AnimatePresence>
      <div className="filter-content-container">{children}</div>
      {moreOptions && (
        <div
          className="more-content"
          onClick={() => {
            toogleExpand();
            toogleListFilter();
          }}
        >
          {listIsOpen ? "- d'options" : "+ d'options"}
        </div>
      )}
    </StyledGenreListFilter>
  );
};

export default SortContainer;
