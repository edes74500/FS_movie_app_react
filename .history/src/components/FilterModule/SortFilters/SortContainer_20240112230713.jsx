import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";
// import { shownGenresFilm } from "../styles/globalStyles";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
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
    /* background-color: var(--secondary-color); */
    /* background-color: #c98114; */
    /* background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(201, 129, 20, 1) 13%, rgba(201, 129, 20, 1) 93%, rgba(255, 255, 255, 0) 100%); */
    &::before {
      /* content: ""; */
      position: absolute;
      height: 100%;
      width: 100%;
      /* background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--secondary-color) 0%, var(--primary-color) 100%); */
      left: 0;
      top: 0;
      z-index: -2;
    }
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      /* background: linear-gradient(180deg, var(--primary-color) 0%, rgba(201, 129, 20, 0) 10%, rgba(201, 129, 20, 0) 90%, var(--primary-color) 100%); */
      left: 0;
      top: 0;
      z-index: -1;
    }
    .dropdown-icon {
      display: flex;
      cursor: pointer;
      position: absolute;
      align-items: center;
      font-size: 20px;
      right: 5px;
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
    border-radius: ${{ moreOptions }=> { moreOptions ? "0 0 0 0" : " 0 0 5px 5px" } } :
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
    height: 50px;
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--secondary-color-07) 0%, var(--primary-color) 100%);
    background: var(--filer-gategory-header-color);
  }
`;

const SortContainer = ({ filterName, children, icon: Icon, onClickReset, toogleExpand, moreOptions }) => {
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
      <div className="filter-title-container">
        <h3>
          <TbCategoryPlus />
          Par {filterName}
        </h3>
        {/* <div className="handle-list-open" onClick={closeList}> */}
        <span className="dropdown-icon">
          {Icon && (
            <Icon
              onClick={() => {
                onClickReset();
                closeList();
                toogleExpand("close");
              }}
            />
          )}
        </span>
        {/* </div> */}
      </div>
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
