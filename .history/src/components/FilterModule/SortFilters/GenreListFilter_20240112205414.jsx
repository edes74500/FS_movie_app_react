import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import SortContainer from "./SortContainer";
// import ItemListContainer from "./ItemListContainer";
import { MdOutlineCancel } from "react-icons/md";
import { variables } from "../../../styles/globalStyles";

const StyledGenreListFilter = styled.div`
  height: ${variables.filterItemHeight}px;
  border-radius: 5px;
  /* margin: 1px 0; */
  position: relative;
  display: flex;
  padding-left: 10px;
  align-items: center;
  cursor: pointer;

  &.is-selected {
    display: flex;
    position: relative;
    background-color: var(--filter-selected-color);
    .remove-icon {
      height: 100%;
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 10px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
  }
  &:hover {
    opacity: 1;
    filter: blur(0) luminosity(300);
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #2566cf65;
      left: 0;
    }
    img {
      transform: scale(1.1);
    }
    h4 {
      transform: scale(1.1);
    }
  }
  h4 {
    color: var(--item-category-text-color);
    font-size: 1rem;
    font-weight: 600;
    /* &:hover {
          opacity: 1;
        } */
  }
  img {
    padding-right: 15px;
    display: none;
    height: 20px;
    cursor: pointer;
  }
  .remove-icon {
    display: none;
  }
  .content-wrapper {
    height: 220px;
    overflow: hidden;
    &.is-open {
      height: auto;
      /* overflow: visible; */
    }
  }
`;

const StyledContentWrapper = styled.div`
  height: calc(5 * ${variables.filterItemHeight}px);
  transition: 1s;
  overflow: hidden;

  &.is-open {
    color: var(--primary-color);
    height: ${({ displayedGenresID }) => (displayedGenresID ? displayedGenresID.length * variables.filterItemHeight : 0)}px;

    /* overflow: visible; */
  }
`;
const GenreListFilter = ({ data, filters }) => {
  const [selectedGenreID, setSelectedGenreID] = React.useState([]);
  const [userHasSelectedGenres, setUserHasSelectedGenres] = useState(false);
  const displayedGenresID = [];
  const expandbleRef = useRef(null);

  const handleToogleFiler = (e) => {
    if (selectedGenreID.includes(e.currentTarget.id)) {
      setSelectedGenreID(selectedGenreID.filter((id) => id !== e.currentTarget.id));
    } else {
      setSelectedGenreID([...selectedGenreID, e.currentTarget.id]);
    }
  };

  useEffect(() => {
    setUserHasSelectedGenres(selectedGenreID.length > 0 ? true : false);
  }, [selectedGenreID]);

  const checkFilterSelected = (id) => {
    return selectedGenreID.includes(id);
  };

  const handleResetFilter = (e) => {
    e.stopPropagation();
    setSelectedGenreID([]);
    setUserHasSelectedGenres(false);
  };

  const handleExpand = () => {
    expandbleRef.current.classList.toggle("is-open");
  };

  const handleRemoveFilter = (e) => {
    e.stopPropagation();
    e.currentTarget.parentElement.id;
    const id = e.currentTarget.parentElement.id; // Stock la valeur de l'id en string
    setSelectedGenreID(selectedGenreID.filter((oldArray) => oldArray !== id));
  };

  return (
    <SortContainer filterName="Genre" icon={userHasSelectedGenres ? MdOutlineCancel : ""} onClick={handleResetFilter} onClickExpand={handleExpand}>
      <StyledContentWrapper ref={expandbleRef} className="content-wrapper" displayedGenresID={displayedGenresID}>
        {data.map((category, index) => {
          const displayedGenreV = filters.find((genre) => genre.toLowerCase() === category.name.toLowerCase()) ? String(category.id) : null;
          if (!displayedGenreV) {
            return null;
          }

          displayedGenresID.push({ id: displayedGenreV, selected: checkFilterSelected(displayedGenreV) });
          console.log(typeof displayedGenreV);

          return (
            <StyledGenreListFilter
              key={category.id}
              id={category.id}
              data-indentifier="GenreListFilter"
              onClick={handleToogleFiler}
              className={checkFilterSelected(String(category.id)) ? "is-selected" : null}
            >
              <img src={`./img/icones/movie-style/${category.name.toLowerCase()}.png`} alt="" /> <h4>{category.name}</h4>
              <span className="remove-icon" onClick={handleRemoveFilter}>
                <IoIosCloseCircle />
              </span>
            </StyledGenreListFilter>
          );
        })}
      </StyledContentWrapper>
    </SortContainer>
  );
};

export default GenreListFilter;
