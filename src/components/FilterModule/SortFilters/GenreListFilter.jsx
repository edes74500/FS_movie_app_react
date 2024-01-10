import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";
// import { shownGenresFilm } from "../styles/globalStyles";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const StyledGenreListFilter = styled.div`
  /* display: flex; */
  flex-direction: column;
  outline: none;
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  /* cursor: pointer; */
  .movie-categories__title_container {
    border-radius: 5px;
    /* overflow: hidden; */
    position: relative;
    z-index: 20;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: var(--secondary-color);
    background-color: black;
    background-color: #c98d1e;
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
        @media screen and (max-width: 900px) {
          font-size: 1%.2;
        }
      }
    }
    h3 {
      display: flex;
      align-items: center;
      color: white;
      color: black;
      font-size: 1rem;
      font-family: roboto;
      /* @media screen and (max-width: 900px) {
        font-size: 0.9rem;
      } */
      svg {
        margin: 4px;
        font-size: 1rem;
      }
    }
  }
  .movie-categories__icons_container {
    z-index: 1;
    display: flex;
    /* position: absolute; */
    /* top: 50px; */
    /* z-index: 20; */
    border-radius: 0 0 5px 5px;
    background-color: ${({ isOnMobile }) => (isOnMobile ? "#4d4b4b" : "#00000092")};

    width: 100%;

    flex-direction: column;
    justify-content: center;
    /* transform: ${({ listIsOpen, isOnMobile }) => (listIsOpen && isOnMobile ? "translateY(-100%)" : "relative")}; */
    /* position: ${({ listIsOpen, isOnMobile }) => (listIsOpen && isOnMobile ? "absolute" : "relative")}; */
    transition: all 0.7s ease-in-out;
    /* &:hover {
      & div:not(:hover) {
        opacity: 0.8;
        h4,
        img {
          opacity: 1;
        }
      }
    } */
    @media screen and (max-width: 900px) {
      z-index: 200;
      /* flex-wrap: wrap; */
    }
    .icon_container {
      height: 35px;
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
        background-color: ${({ isOnMobile }) => (isOnMobile ? "#c4a66b " : "#a26f0a71")};

        .remove-icon {
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
const GenreListFilter = ({ data, filters, isOnMobile }) => {
  const listContainer = useRef();
  const [listIsOpen, setListIsOpen] = React.useState(isOnMobile ? false : true);
  const [selectedGenreID, setSelectedGenreID] = React.useState([]);

  const toogleListFilter = () => {
    setListIsOpen(!listIsOpen);
  };

  const handleRemoveFilter = (e) => {
    e.stopPropagation();
    console.log(e.currentTarget.parentElement.id);
    const genreIDclicked = e.currentTarget.parentElement.id; // Stock la valeur de l'id en string
    setSelectedGenreID(selectedGenreID.filter((oldArray) => oldArray !== genreIDclicked));
  };

  const handleOnClickFilter = (e) => {
    if (listIsOpen && e.currentTarget) {
      const genreId = e.currentTarget.id; // Stock la valeur de l'id de l'élément cliqué pour eviter qu'elle ne soit plus disponible au moment ou useState
      //check si la valeur de l'id de l'élément cliqué est deja dans la liste
      if (selectedGenreID.includes(genreId)) {
        //si la valeur de l'id de l'élément cliqué est deja dans la liste, creation d'une nouvelle liste avec toute les valeurs sauf celle de l'id de l'élément cliqué
        setSelectedGenreID(selectedGenreID.filter((oldArray) => oldArray !== genreId));
        // e.currentTarget.classList.remove("is-selected");
      } else if (genreId) {
        setSelectedGenreID((oldArray) => [...oldArray, genreId]); // si la valeur de l'id de l'élément cliqué est n'est pas dans la liste, ajout de la valeur de l'id
        console.log(genreId);
        // e.currentTarget.classList.add("is-selected");
      }
      console.log(selectedGenreID);
    } else {
      toogleListFilter();
    }
  };
  const framerMotionContainerOpener = {
    container: {
      hidden: { opacity: 1 },
      visible: {
        height: "auto",
        opacity: 1,

        transition: {
          duration: 0.7,
          delayChildren: 0.3,
          staggerChildren: 0.1,
        },
      },
      exit: {
        opacity: 0,

        transition: { ease: "easeIn", duration: 0.2 },
      },
    },

    item: {
      hidden: { x: -60, opacity: 0, scale: 0 },
      visible: {
        scale: 1,
        x: 0,
        opacity: 1,
      },
    },
  };

  const framerMotionContainerClose = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delayChildren: 0.4,
          staggerChildren: 0.1,
        },
      },
    },

    item: {
      hidden: {
        y: -100,
        x: 0,
        opacity: 0,
      },
      visible: {
        y: 0,
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <StyledGenreListFilter data-indentifier="GenreListFilter" listIsOpen={listIsOpen} isOnMobile={isOnMobile}>
      <div className="movie-categories__title_container" onClick={isOnMobile ? null : null}>
        <h3>
          {" "}
          <TbCategoryPlus />
          Trouver par envie :
        </h3>
        <span className="dropdown-icon">
          <MdOutlineArrowDropDownCircle />
        </span>
      </div>
      <AnimatePresence>
        {listIsOpen && (
          <motion.div
            className="movie-categories__icons_container"
            ref={listContainer}
            variants={framerMotionContainerOpener.container}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={48992}
          >
            {data.map((category, index) => {
              const displayedGenre = filters.find((genre) => genre.toLowerCase() === category.name.toLowerCase());
              const isSelected = selectedGenreID.includes(category.id.toString());
              console.log(typeof category.id, typeof selectedGenreID[index]);

              if (!displayedGenre) {
                return null;
              }
              return (
                <motion.div
                  key={category.id}
                  className={`icon_container ${isSelected ? "is-selected" : null}`}
                  id={category.id}
                  onClick={handleOnClickFilter}
                  variants={framerMotionContainerOpener.item}
                  exit={isSelected ? "" : "exit"}
                >
                  {/* <div
                    key={category.id}
                    className={`icon_container ${isSelected ? "is-selected" : null}`}
                    id={category.id}
                    onClick={handleOnClickFilter}
                  > */}
                  <img src={`./img/icones/movie-style/${category.name.toLowerCase()}.png`} alt="" /> <h4>{category.name}</h4>
                  <span className="remove-icon" onClick={handleRemoveFilter}>
                    <IoIosCloseCircle />
                  </span>
                  {/* </div> */}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!listIsOpen && (
          <motion.div
            className="movie-categories__icons_container "
            variants={framerMotionContainerClose.container}
            initial="hidden"
            animate="visible"
            key="48992"
          >
            {data.map((category, index) => {
              const displayedGenre = selectedGenreID.find((id) => id == category.id.toString());
              if (!displayedGenre) {
                return null;
              }
              return (
                <motion.div
                  key={category.id + index}
                  className={`icon_container is-selected`}
                  id={category.id}
                  onClick={handleOnClickFilter}
                  variants={framerMotionContainerClose.item}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <img src={`./img/icones/movie-style/${category.name.toLowerCase()}.png`} alt="" /> <h4>{category.name}</h4>
                  <span className="remove-icon" onClick={handleRemoveFilter}>
                    <IoIosCloseCircle />
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </StyledGenreListFilter>
  );
};

export default GenreListFilter;
