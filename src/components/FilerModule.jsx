import React, { useEffect } from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";
import { shownGenresFilm } from "../styles/globalStyles";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

import Select from "react-select";
import ListFilter from "./filter/ListFilter";
import YearFilter from "./filter/YearFilter";
import SectionContainer from "./filter/SectionContainer";

const StyledFilterModule = styled.div`
  display: flex;

  margin-top: 50px;
  flex-direction: column;
  gap: 50px;
  /* flex-direction: column; */
  height: fit-content;
  /* align-items: center; */
  justify-content: center;
  transition: 1s ease-in-out;
  @media screen and (max-width: 900px) {
    position: fixed;
    top: 10%;
    left: 0;
    z-index: 300;
    background-color: green;
    padding: 30px;
    width: 300px;
  }
  /* width: 100%;
  /* } */
`;

const StyledMoviescategoriesContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  position: relative;
  /* overflow: hidden; */
  /* gap: 10px; */
  background-color: #ffffff14;
  /* border-radius: 0; */
  .movie-categories__title_container {
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    h3 {
      display: flex;
      cursor: pointer;
      align-items: center;
      background-color: rgba(var(--secondary-color), 0.8);
      /* backdrop-filter: opacity(20%); */
      padding: 10px;
      color: black;
      font-size: 1rem;
      font-family: roboto;
      /* color: var(--secondary-color); */
      svg {
        margin: 4px;
        font-size: 1rem;
      }
    }
  }
  /* overflow: hidden; */
  .movie-categories__icons_container {
    display: flex;
    position: absolute;
    z-index: 20;
    border-radius: 0 0 5px 5px;
    background-color: #00000092;

    width: 100%;

    flex-direction: column;
    justify-content: center;
    transition: all 0.7s ease-in-out;
    &:hover {
      /* opacity: 0.6; */
      & div:not(:hover) {
        transition: all 0.7s ease-in-out;
        opacity: 0.8;
      }
    }

    .icon_container,
    .icon_container-first-pick {
      height: 50px;
      position: relative;
      display: flex;
      padding: 10px;
      align-items: center;
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      .dropdown-icon {
        display: none;
      }
      &.is-hidden {
        display: none;
      }
      &.is-selected {
        display: flex;
        position: relative;
        &:hover {
          background-color: red;
        }
        .dropdown-icon {
          display: block;
          position: absolute;
          right: 10px;
        }
      }
      will-change: transform;
      &:hover {
        filter: blur(0);
        transform: scale(1.05) translateZ(0);
        opacity: 1;
        img {
          /* filter: blur(0); */
        }
        h4 {
          /* transform: scale(1.05) translateZ(0); */
        }
      }

      h4 {
        transition: all 0.3s ease-in-out;

        /* font-size: 1rem;
        position: absolute;
        /* top: 50%; */
        top: 0;
        left: 50%;

        color: white;
        /* opacity: 0; */
        &:hover {
          opacity: 1;
        }
      }
      img {
        transition: all 0.3s ease-in-out;
        padding-right: 15px;
        height: 25px;
        /* filter: invert(100%) saturate(0) brightness(300); */
        cursor: pointer;
      }
    }
  }
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

const CategoriesIcones = ({ data, filters }) => {
  function Category(name, id) {
    this.name = name;
    this.id = id;
  }

  const Categories = [new Category("action", 1), new Category("famille", 2)];

  const handleOnClick = (e) => {
    const allDiv = document.querySelectorAll(".icon_container");
    console.log(e.currentTarget.classList);

    if (e.currentTarget.classList.contains("is-selected")) {
      document.querySelector(".icon_container-first-pick").classList.add("is-hidden");
      document.querySelector(".icon_container-first-pick").classList.remove("is-selected");
      allDiv.forEach((div) => div.classList.remove("is-hidden", "is-selected"));
    } else {
      allDiv.forEach((element) => {
        element.classList.add("is-hidden");
      });
      const divTarget = document.getElementById(e.currentTarget.id);
      divTarget.classList.remove("is-hidden");
      divTarget.classList.add("is-selected");
    }
    // console.log(e);

    // array.forEach((element) => {});
  };

  return (
    <StyledMoviescategoriesContainerDiv>
      <div className="movie-categories__title_container">
        <h3>
          {" "}
          <TbCategoryPlus />
          Trouver par envie :
        </h3>
      </div>
      <CSSContainerCollapse className="container-collapse">
        <div className="movie-categories__icons_container">
          <div className="icon_container-first-pick is-selected" id={"first-pick"} onClick={handleOnClick}>
            <span className="dropdown-icon">
              <MdOutlineArrowDropDownCircle />
            </span>
          </div>
          {data.map((category, index) => {
            const displayedGenre = filters.find((genre) => genre.toLowerCase() === category.name.toLowerCase());
            console.log(displayedGenre);
            if (!displayedGenre) {
              return null;
            }
            return (
              <div key={category.id} className="icon_container is-hidden" id={category.id} onClick={handleOnClick}>
                <img src={`./img/icones/movie-style/${category.name.toLowerCase()}.png`} alt="" /> <h4>{category.name}</h4>
                <span className="dropdown-icon">
                  <MdOutlineArrowDropDownCircle />
                </span>
              </div>
            );
          })}
        </div>
      </CSSContainerCollapse>
    </StyledMoviescategoriesContainerDiv>
  );
};

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
    <StyledFilterModule isOnMobile={isOnMobile}>
      {/* <CategoriesIcones data={moviesGenres} filters={shownGenresFilm} /> */}
      <ListFilter data={moviesGenres} filters={shownGenresFilm} isOnMobile={isOnMobile} />
      <YearFilter isOnMobile={isOnMobile} />
      {/* <SectionContainer isOnMobile={isOnMobile} /> */}
    </StyledFilterModule>
  );
};

export default FilerModule;
