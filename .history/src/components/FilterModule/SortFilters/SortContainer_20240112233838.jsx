import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";
// import { shownGenresFilm } from "../styles/globalStyles";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import breakpoints from "../../../styles/breakpoints";

const StyledGenreListFilter = styled.div`
  /* display: flex; */
  flex-direction: column;
  outline: none;
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  /* cursor: pointer; */
  .filter-title-container {
    border-radius: 5px 5px 0 0;
    position: relative;
    z-index: 20;
    height: 50px;
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
    border-radius: ${({ moreOptions }) => (moreOptions ? "0 0 0 0" : " 0 0 5px 5px")};
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
    z-index: 20;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: right;
    font-size: 0.9rem;
    /* text-transform: uppercase; */
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--secondary-color-07) 0%, var(--primary-color) 100%);
    background: var(--filer-gategory-header-color);
  }
`;

const SortContainer = ({ filterName, children, userHasSelectedGenres, onClickReset, toogleExpand, moreOptions }) => {
  const [listIsOpen, setListIsOpen] = React.useState(false);

  const toogleListFilter = () => {
    setListIsOpen(!listIsOpen);
  };

  const closeList = () => {
    setListIsOpen(false);
    console.log(listIsOpen);
  };

  return (
    <StyledGenreListFilter data-indentifier="GenreListFilter" moreOptions={moreOptions}>
      <div
        className="filter-title-container"
        onClick={() => {
          toogleExpand();
          toogleListFilter();
        }}
      >
        <h3>
          <TbCategoryPlus />
          Par {filterName}
        </h3>
        {/* <div className="handle-list-open" onClick={closeList}> */}
        {userHasSelectedGenres && (
          <span className="reset-icon">
            <MdOutlineCancel
              onClick={() => {
                onClickReset();
                closeList();
                toogleExpand(false);
              }}
            />
          </span>
        )}
      </div>
      {moreOptions && (
        <div className="more-content-reset" onClick={() => {}}>
          {listIsOpen ? "- d'options" : "+ d'options"}
        </div>
      )}
      <div className="filter-content-container">{children}</div>
      {moreOptions && (
        <div
          className="more-content"
          onClick={() => {
            toogleExpand();
            toogleListFilter(true);
          }}
        >
          {listIsOpen ? "- d'options" : "+ d'options"}
        </div>
      )}
    </StyledGenreListFilter>
  );
};

export default SortContainer;
