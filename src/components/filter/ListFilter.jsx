import React, { useEffect } from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";
// import { shownGenresFilm } from "../styles/globalStyles";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

const StyledMoviescategoriesContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  position: relative;
  overflow: hidden;
  border-radius: 5px; /* background-color: #ffffff14; */
  .movie-categories__title_container {
    overflow: hidden;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(var(--secondary-color), 0.8);
    .dropdown-icon {
      display: block;
      position: absolute;
      right: 10px;
    }
    h3 {
      display: flex;
      cursor: pointer;
      align-items: center;
      /* backdrop-filter: opacity(20%); */
      /* padding: 10px; */
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
    /* position: absolute; */
    top: 50px;
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
      transition: all 0.3s ease-in-out;

      .dropdown-icon {
        display: none;
      }
      &.is-hidden {
        display: none;
      }
      &.is-selected {
        display: flex;
        position: relative;
        background-color: green;
        .dropdown-icon {
          display: block;
          position: absolute;
          right: 10px;
        }
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
        h4 {
          opacity: 1;
          transform: scale(1.2);
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
  /* .is-hidden {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease-in-out;
  } */
`;
const ListFilter = ({ data, filters }) => {
  const [allFilters, setAllFilters] = React.useState(filters);

  useEffect(() => {
    const filters = document.querySelectorAll(".icon_container");
    setAllFilters(filters);
  }, []);

  const toogleListFilter = (e) => {
    allFilters.forEach((div) => div.classList.toggle("is-hidden"));
  };

  const handleOnClick = (e) => {
    console.log(e.currentTarget.classList);
    if (e.currentTarget.classList.toggle("is-selected")) {
      // if (e.currentTarget.classList.contains("is-selected")) {
      //   document.querySelector(".icon_container-first-pick").classList.add("is-hidden");
      //   document.querySelector(".icon_container-first-pick").classList.remove("is-selected");
      //   allFilters.forEach((div) => div.classList.remove("is-hidden", "is-selected"));
      // } else {
      //   allFilters.forEach((element) => {
      //     element.classList.add("is-hidden");
      //   });
      //   const divTarget = document.getElementById(e.currentTarget.id);
      //   divTarget.classList.remove("is-hidden");
      //   divTarget.classList.add("is-selected");
    }
  };

  return (
    <StyledMoviescategoriesContainerDiv>
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

      <div className="movie-categories__icons_container">
        {/* <div className="icon_container-first-pick is-selected" id={"first-pick"} onClick={handleOnClick}>
          <span className="dropdown-icon">
            <MdOutlineArrowDropDownCircle />
          </span>
        </div> */}
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
