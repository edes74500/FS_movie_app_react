import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import SortContainer from "./SortContainer";
import { variables } from "../../../styles/globalStyles";
import { shownGenresFilm } from "../../../styles/globalStyles";
// import { AnimatePresence, motion } from "framer-motion";

const StyledGenreListFilter = styled.div`
  height: ${variables.filterItemHeight}px;
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
`;

const StyledContentWrapper = styled.div`
  height: calc(5 * ${variables.filterItemHeight}px);

  height: ${({ $dataGenres, $genreListIsOpened }) =>
    $dataGenres.filter((genre) => genre.selected == true).length >= 5 && !$genreListIsOpened
      ? $dataGenres.filter((genre) => genre.selected == true).length * variables.filterItemHeight
      : $genreListIsOpened
      ? $dataGenres.filter((genre) => genre.displayed == true).length * variables.filterItemHeight
      : 5 * variables.filterItemHeight}px;
  transition: 1s;
  overflow: hidden;

  &.is-open {
    height: ${({ $dataGenres }) => ($dataGenres ? $dataGenres.filter((genre) => genre.displayed == true).length * variables.filterItemHeight : 0)}px;
  }
`;
const GenreListFilter = ({ data, filters }) => {
  const [userHasSelectedGenres, setUserHasSelectedGenres] = useState(false);
  const [genreListIsOpened, setGenreListIsOpened] = useState(false);
  const expandbleRef = useRef(null);
  const [dataGenres, setdataGenres] = useState([]);

  //A METTRE DES LA REQUETE API
  useEffect(() => {
    const newData = data.map((genre) => ({ ...genre, selected: false, displayed: shownGenresFilm.includes(genre.name) ? true : false }));
    setdataGenres(newData);
  }, [data]);

  //VARIABLES POUR ANNONCER SI DES FILTRES SONT SELECTIONNES
  useEffect(() => {
    setUserHasSelectedGenres(dataGenres.filter((genre) => genre.selected).length > 0 ? true : false);
  }, [dataGenres]);

  // CHECK SI LE FILTRE EST  SELECTED
  const handleToogleFiler = (e) => {
    const updatedDataGenres = dataGenres.map((genre) => {
      if (genre.id == Number(e.currentTarget.id)) {
        return { ...genre, selected: !genre.selected };
      } else {
        return genre;
      }
      
    }
   
    );
   if (genreListIsOpened) {
        setdataGenres((dataGenres) => dataGenres.sort((b, a) => a.selected - b.selected));
    console.log(updatedDataGenres);
    setdataGenres(updatedDataGenres);
  };

  //SUPPRIME TOUT LES FILTRES SELECTIONNES
  const onClickReset = () => {
    const updatedDataGenres = dataGenres.map((genre) => ({ ...genre, selected: false }));
    setdataGenres(updatedDataGenres);
    setGenreListIsOpened(false);
  };

  // OUVRE OU FERME LE VOLETS DE LA LISTE
  const toogleExpand = (close) => {
    if (!close) {
      expandbleRef.current.classList.toggle("is-open");
      setGenreListIsOpened(!genreListIsOpened);
      if (genreListIsOpened) {
        setdataGenres((dataGenres) => dataGenres.sort((b, a) => a.selected - b.selected));
      }
      console.log(genreListIsOpened);
    } else if (close === "close") {
      setGenreListIsOpened(false);
    }
  };

  return (
    <>
      <SortContainer
        filterName="Genre"
        userHasSelectedGenres={userHasSelectedGenres}
        onClickReset={() => {
          onClickReset();
          toogleExpand("close");
        }}
        toogleExpand={toogleExpand}
        // closeExpand={() => closeExpand()}
        moreOptions={true}
      >
        <StyledContentWrapper className="content-wrapper" ref={expandbleRef} $dataGenres={dataGenres} $genreListIsOpened={genreListIsOpened}>
          {dataGenres.map((category, index) => {
            if (category.displayed) {
              return (
                <StyledGenreListFilter
                  key={category.id}
                  id={category.id}
                  data-indentifier="GenreListFilter"
                  onClick={handleToogleFiler}
                  className={category.selected ? "is-selected" : null}
                >
                  <img src={`./img/icones/movie-style/${category.name.toLowerCase()}.png`} alt="" /> <h4>{category.name}</h4>
                  <span className="remove-icon">
                    <IoIosCloseCircle />
                  </span>
                </StyledGenreListFilter>
              );
            }
          })}
        </StyledContentWrapper>
      </SortContainer>
    </>
  );
};

export default GenreListFilter;

{
  /* <SortContainer filterName="Genre" icon={userHasSelectedGenres ? MdOutlineCancel : ""} onClick={handleResetFilter} onClickExpand={handleExpand}>
    //   <StyledContentWrapper ref={expandbleRef} className="content-wrapper" displayedGenresID={displayedGenresID}>
    //     {data.map((category, index) => { */
}
{
  /* //       const displayedGenreV = filters.find((genre) => genre.toLowerCase() === category.name.toLowerCase()) ? String(category.id) : null;
    //       if (!displayedGenreV) { */
}
{
  /* // return null; */
}
{
  /* //       }

    //       displayedGenresID.push({ id: displayedGenreV, selected: checkFilterSelected(displayedGenreV) });
    //       displayedGenresID.sort((a, b) => b.selected - a.selected);
    //       console.log(dataGenres);
    //       // console.log(selectedGenreID);

    //       return (
    //         <StyledGenreListFilter
    //           key={category.id}
    //           id={category.id}
    //           data-indentifier="GenreListFilter"
    //           onClick={handleToogleFiler}
    //           className={checkFilterSelected(String(category.id)) ? "is-selected" : null}
    //         >
    //           <img src={`./img/icones/movie-style/${category.name.toLowerCase()}.png`} alt="" /> <h4>{category.name}</h4>
    //           <span className="remove-icon" onClick={handleRemoveFilter}>
    //             <IoIosCloseCircle />
    //           </span>
    //         </StyledGenreListFilter> */
}
{
  /* //       );
    //     })}
    //   </StyledContentWrapper>
    // </SortContainer> */
}

// displayedGenresID.push({ id: displayedGenreV, selected: checkFilterSelected(displayedGenreV) });
// displayedGenresID.sort((a, b) => b.selected - a.selected);

// console.log(selectedGenreID);

// const displayedGenreV = filters.find((genre) => genre.toLowerCase() === category.name.toLowerCase()) ? String(category.id) : null;

// const handleRemoveFilter = (e) => {
//   const updatedDataGenres = dataGenres.map((genre) => {
//     if (genre.id == Number(e.currentTarget.id)) {
//       return { ...genre, selected: false };
//     } else return genre;
//   });
//   updatedDataGenres.sort((a, b) => b.selected - a.selected);
//   console.log(updatedDataGenres);
//   setdataGenres(updatedDataGenres);
// };
