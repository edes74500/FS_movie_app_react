import styled from "styled-components";
import { FaThumbsDown } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";
import breakpoints from "../../styles/breakpoints";
// import MovieSortBouttons from "./MovieSortBouttons";

const StyledButtonSortContainer = styled.div`
  justify-content: right;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5px 0; /* color: rgb(var(--secondary-color)); */ /* bottom: 10px; */ /* right: 0; */ //Singlebar With no height
  /* display: flex; */ /* position: relative; */ /* z-index: 3; */
  /* @media screen and (max-width: ${breakpoints.largeScreen}px) {
    height: 5px;
  } */ /* .button-container { */ /* position: absolute; */
  /* @media screen and (max-width: ${breakpoints.largeScreen}px) {
    transform: translateY(-100%);
    top: 0;
    bottom: unset;
    /* position: relative; */ /* } */
  span {
    white-space: pre;
    font-size: 0.7rem;
  }

  .filter-buttons {
    text-transform: capitalize;
    background: none;
    border: 2px transparent solid;
    color: #ffffff9c;
    /* font-family: Lato; */
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    &.is-selected {
      border: 2px var(--secondary-color) solid;
      color: white;
      border-radius: 5px;
    }
  }
  .top-flop-buttons {
    display: block;
    font-size: 1.4rem;
    padding: 5px;
    cursor: pointer;
    color: #ffffff9c;
    /* z-index: 2; */
    &.is-selected {
      color: var(--secondary-color);
    }
    svg {
      pointer-events: none;
    }
  }
  /* } */
`;
const MovieSortButtons = ({ moviesSort, setMoviesSort }) => {
  //   const [moviesSort, setMoviesSort] = React.useState({ id: "vote", ascendant: false });

  const handleOnClickButton = (e) => {
    console.log(e.target.id);
    setMoviesSort((oldArray) => {
      const id = e.target.id;
      const ascendant = oldArray.id == id ? !oldArray.ascendant : false;
      return { id: id, ascendant: ascendant };
    });
  };

  const handleOnClickSortTopFLop = (e) => {
    e.target.id;
    if (e.currentTarget) {
      setMoviesSort((oldArray) => {
        const id = oldArray.id;
        const ascendant = e.target.id === "ascendant-top" ? false : true;
        return { id: id, ascendant: ascendant };
      });
    } else {
      ("Current target is null");
    }
  };

  return (
    <StyledButtonSortContainer data-identifier="MovieSortButtons">
      {/* <div className="button-container"> */}
      <span>Trier par : </span>
      <input
        type="button"
        value="Note"
        id="vote"
        className={`filter-buttons ${moviesSort.id === "vote" ? "is-selected" : ""}`}
        onClick={handleOnClickButton}
      />
      <input
        type="button"
        value="popularite"
        id="popularity"
        className={`filter-buttons ${moviesSort.id === "popularity" ? "is-selected" : ""}`}
        onClick={handleOnClickButton}
      />
      <span
        id="ascendant-top"
        className={`top-flop-buttons ${moviesSort.ascendant ? "" : "is-selected"}`}
        onClick={handleOnClickSortTopFLop}
      >
        <FaThumbsUp />
        {/* test */}
      </span>
      <span
        id="ascendant-flop"
        className={`top-flop-buttons ${moviesSort.ascendant ? "is-selected" : ""}`}
        onClick={handleOnClickSortTopFLop}
      >
        <FaThumbsDown />
      </span>
      {/* </div> */}
    </StyledButtonSortContainer>
  );
};

export default MovieSortButtons;
