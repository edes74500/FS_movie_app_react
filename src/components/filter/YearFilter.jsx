import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";
// import { shownGenresFilm } from "../styles/globalStyles";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "rc-slider/assets/index.css"; // Importez le fichier CSS de rc-slider
import Slider from "rc-slider";

// import { shownGenresFilm } from "../styles/globalStyles";

const StyledMoviescategoriesContainerDiv = styled.div`
  /* display: flex; */
  flex-direction: column;
  outline: none;
  width: 100%;
  position: relative;
  cursor: pointer;
  .movie-categories__title_container {
    /* overflow: hidden; */
    border-radius: 5px 5px 0 0;
    /* overflow: hidden; */
    position: relative;
    z-index: 20;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: rgba(var(--secondary-color), 1);
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
      }
    }
    h3 {
      display: flex;

      align-items: center;
      color: white;
      color: black;
      font-size: 1rem;
      font-family: roboto;
      svg {
        margin: 4px;
        font-size: 1rem;
      }
    }
  }
  .years-container {
    display: flex;
    position: relative;
    /* height: 40px; */
    /* transform: translateY(-50%); */
    align-items: center;
    justify-content: space-around;
    /* margin-top: 10px; */
    .year-start,
    .year-end {
      display: block;
      position: absolute;
      top: 50%;
      font-size: 1rem;
      font-weight: 600;
      transform: translateY(50%);
    }
    .year-start {
      left: 5px;
    }
    .year-end {
      right: 5px;
    }
  }
  .rc-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50%;
    margin: 15px auto;
    .rc-slider-rail {
      height: 10px;
      border: 1px solid rgb(var(--secondary-color), 0.8);
      background-color: rgb(var(--primary-color), 0.8);
    }
    .rc-slider-track {
      height: 10px;
      background-color: rgb(var(--secondary-color), 0.8);
    }
    .rc-slider-handle {
      margin: 0px;
      color: white;
      opacity: 1;
      height: 20px;
      width: 20px;
      border: 1px solid rgb(var(--primary-color), 0.8);
    }
    .rc-slider-handle-dragging {
      box-shadow: 0px 1px 8px 6px rgba(var(--secondary-color), 0.8);
      transform: scale(4);
    }
  }

  .movie-categories__icons_container {
    z-index: 1;
    display: flex;
    top: 50px;
    border-radius: 0 0 5px 5px;
    background-color: #00000092;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
const SectionContainer = ({ isOnMobile }) => {
  const [debutAnnee, setDebutAnnee] = useState(1990);
  const [finAnnee, setFinAnnee] = useState(2023);

  const handleChange = (values) => {
    setDebutAnnee(values[0]);
    setFinAnnee(values[1]);
  };
  const listContainer = useRef();
  const [listIsOpen, setListIsOpen] = React.useState(isOnMobile ? false : true);

  const toogleListFilter = () => {
    setListIsOpen(!listIsOpen);
  };

  const framerMotionContainerOpener = {
    container: {
      hidden: { opacity: 1, height: 0 },
      visible: {
        height: "auto",
        opacity: 1,

        transition: {
          duration: 0.7,
          // delayChildren: 0.3,
          staggerChildren: 0.1,
        },
      },
      exit: {
        opacity: 0,
        height: 0,
        transition: { ease: "easeIn", duration: 0.2 },
      },
    },

    item: {
      hidden: { x: -60, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <StyledMoviescategoriesContainerDiv listIsOpen={listIsOpen}>
      <div className="movie-categories__title_container" onClick={isOnMobile ? { toogleListFilter } : null}>
        <h3>
          {" "}
          <TbCategoryPlus />
          Trouver par Annee :
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
            key={489892}
          >
            <div className="years-container">
              <span className="year-start">{debutAnnee}</span> <span className="year-end">{finAnnee}</span>
            </div>
            <Slider
              range
              allowCross={false}
              startPoint={1990}
              defaultValue={1990}
              min={1900}
              max={2023}
              step={10}
              defaultValue={[debutAnnee, finAnnee]}
              onChange={handleChange}
            />
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
          ></motion.div>
        )}
      </AnimatePresence>
    </StyledMoviescategoriesContainerDiv>
  );
};

export default SectionContainer;
