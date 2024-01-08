import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";
// import { shownGenresFilm } from "../styles/globalStyles";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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

const StyledMoviescategoriesContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  .movie-categories__title_container {
    overflow: hidden;
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(var(--secondary-color), 0.8);
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
        transform: ${({ listIsOpen }) => (listIsOpen ? "rotate(0)" : "rotate(-180deg)")};
      }
    }
    h3 {
      display: flex;

      align-items: center;
      color: black;
      font-size: 1rem;
      font-family: roboto;
      svg {
        margin: 4px;
        font-size: 1rem;
      }
    }
  }
  .movie-categories__icons_container {
    display: flex;
    /* position: absolute; */
    top: 50px;
    /* z-index: 20; */
    border-radius: 0 0 5px 5px;
    background-color: #00000092;

    width: 100%;

    flex-direction: column;
    justify-content: center;
    /* transition: all 0.7s ease-in-out; */
    /* &:hover {
      & div:not(:hover) {
        opacity: 0.8;
        h4,
        img {
          opacity: 1;
        }
      }
    } */

    .icon_container {
      height: 40px;
      position: relative;
      display: flex;
      padding: 10px;
      align-items: center;
      cursor: pointer;
      /* transition: all 0.3s ease-in-out; */

      .remove-icon {
        display: none;
      }
      &.is-hidden {
        display: none;
      }
      &.is-selected {
        display: flex;
        position: relative;
        background-color: #a26f0a71;
        .remove-icon {
          /* background-color: red; */
          height: 100%;
          width: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;

          right: 10px;
        }
      }
      &:hover {
        opacity: 1;
        /* background-color: #a26f0a2a; */

        filter: blur(0) luminosity(300);
        img {
          transform: scale(1.05);
        }
        h4 {
          transform: scale(1.05) translateZ(0);
        }
      }

      h4 {
        /* transition: all 0.3s ease-in-out; */
        color: white;
        font-size: 0.8rem;
        font-weight: 600;
        /* &:hover {
          opacity: 1;
        } */
      }
      img {
        /* transition: all 0.3s ease-in-out; */
        padding-right: 15px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
`;
const ListFilter = ({ data, filters }) => {
  const listContainer = useRef();
  const [listIsOpen, setListIsOpen] = React.useState(false);

  const toogleListFilter = () => {
    Array.from(listContainer.current.children).forEach((div) => div.classList.toggle("is-hidden"));
    setListIsOpen(!listIsOpen);
  };

  const handleRemoveFilter = (e) => {
    e.stopPropagation();
    e.currentTarget.parentElement.classList.remove("is-selected");
  };

  const handleOnClick = (e) => {
    if (listIsOpen) {
      e.currentTarget.classList.toggle("is-selected");
    } else {
      toogleListFilter();
    }
  };

  return (
    <StyledMoviescategoriesContainerDiv listIsOpen={listIsOpen}>
      <div className="movie-categories__title_container" onClick={toogleListFilter}>
        <h3>
          {" "}
          <TbCategoryPlus />
          Trouver par envie :
        </h3>
        <span className="dropdown-icon">
          <MdOutlineArrowDropDownCircle />
        </span>
      </div>

      <div className="movie-categories__icons_container" ref={listContainer}>
        {data.map((category, index) => {
          const displayedGenre = filters.find((genre) => genre.toLowerCase() === category.name.toLowerCase());
          console.log(displayedGenre);
          if (!displayedGenre) {
            return null;
          }
          return (
            <div key={category.id} className="icon_container is-hidden" id={category.id} onClick={handleOnClick}>
              <img src={`./img/icones/movie-style/${category.name.toLowerCase()}.png`} alt="" /> <h4>{category.name}</h4>
              <span className="remove-icon" onClick={handleRemoveFilter}>
                <IoIosCloseCircle />
              </span>
            </div>
          );
        })}
      </div>
    </StyledMoviescategoriesContainerDiv>
  );
};

export default ListFilter;
