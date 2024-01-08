import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";
// import { shownGenresFilm } from "../styles/globalStyles";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedGenreID, setSelectedGenreID] = React.useState([]);

  const toogleListFilter = () => {
    // Array.from(listContainer.current.children).forEach((div) => div.classList.toggle("is-hidden"));
    setListIsOpen(!listIsOpen);
  };

  const handleRemoveFilter = (e) => {
    e.stopPropagation();
    e.currentTarget.parentElement.classList.remove("is-selected");
  };

  const handleOnClickFilter = (e) => {
    if (listIsOpen && e.currentTarget) {
      const genreId = e.currentTarget.id; // Stock la valeur de l'id de l'élément cliqué pour eviter qu'elle ne soit plus disponible au moment ou useState
      //check si la valeur de l'id de l'élément cliqué est deja dans la liste
      if (selectedGenreID.includes(genreId)) {
        //si la valeur de l'id de l'élément cliqué est deja dans la liste, creation d'une nouvelle liste avec toute les valeurs sauf celle de l'id de l'élément cliqué
        setSelectedGenreID(selectedGenreID.filter((oldArray) => oldArray !== genreId));
        e.currentTarget.classList.remove("is-selected");
      } else if (genreId) {
        setSelectedGenreID((oldArray) => [...oldArray, genreId]); // si la valeur de l'id de l'élément cliqué est n'est pas dans la liste, ajout de la valeur de l'id
        console.log(genreId);
        e.currentTarget.classList.add("is-selected");
      }
      console.log(selectedGenreID);
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

      {listIsOpen && (
        <div className="movie-categories__icons_container" ref={listContainer}>
          {data.map((category, index) => {
            const displayedGenre = filters.find((genre) => genre.toLowerCase() === category.name.toLowerCase());
            // console.log(displayedGenre);
            if (!displayedGenre) {
              return null;
            }
            return (
              <div key={category.id} className="icon_container " id={category.id} onClick={handleOnClickFilter}>
                <img src={`./img/icones/movie-style/${category.name.toLowerCase()}.png`} alt="" /> <h4>{category.name}</h4>
                <span className="remove-icon" onClick={handleRemoveFilter}>
                  <IoIosCloseCircle />
                </span>
              </div>
            );
          })}
        </div>
      )}
      {!listIsOpen && (
        <div className="movie-categories__icons_container">
          {data.map((category, index) => {
            const displayedGenre = selectedGenreID.find((id) => id == category.id);
            // console.log(displayedGenre);
            if (!displayedGenre) {
              return null;
            }
            return (
              <div key={category.id} className="icon_container is-selected" id={category.id} onClick={handleOnClickFilter}>
                <img src={`./img/icones/movie-style/${category.name.toLowerCase()}.png`} alt="" /> <h4>{category.name}</h4>
                <span className="remove-icon" onClick={handleRemoveFilter}>
                  <IoIosCloseCircle />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </StyledMoviescategoriesContainerDiv>
  );
};

export default ListFilter;
