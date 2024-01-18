import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { displayFavMessage } from "../../actions/favList.action";

const StyledFavoriteIcone = styled.div`
  position: relative;
  svg {
    transition: 1s;
    text-decoration: none;
    font-weight: bold;
    top: 50%;
    font-size: 35px;
    color: lightgray;

    &.active {
      /* transition: 1s; */
      /* transform: scale(5); */
      animation: pulse 1s ease-in infinite;
    }
  }
  .list-length-display {
    position: absolute;
    bottom: -10px;
    left: 0px;
    transform: translateX(-50%);
    font-size: 15px;
    /* background: #ff5200; */
    font-weight: 900;
    padding: 5px 10px;
    border-radius: 10px;
    color: white;
    color: black;
    color: white;
    & * {
    }
  }
  .fav-toogle-display {
    width: auto;
    position: absolute;
    bottom: -50px;
    right: -10px;
    font-size: 15px;
    background: #ff5200;
    font-weight: 900;
    padding: 5px 10px;
    border-radius: 10px;
    color: white;
    color: black;
    animation: moveUp 0.3s ease-in-out forwards;
    &.added {
      background: #8bebd3;
    }
  }
  @keyframes moveUp {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      color: lightgray;
    }
    50% {
      transform: scale(1.2);
      color: red;
    }
    100% {
      transform: scale(1);
      color: lightgray;
    }
  }
`;

const FavoriteIcone = () => {
  const favList = useSelector((state) => state.favMoviesList.list);
  const favDisplay = useSelector((state) => state.favMoviesList.displayedMessage);
  return (
    <>
      <StyledFavoriteIcone>
        <FaHeart className={favDisplay === "added" ? "active" : ""} />
        <span className="list-length-display">{favList.length}</span>
        {favDisplay === "added" && <span className="fav-toogle-display added"> ajouté</span>}
        {/* {favDisplay === "removed" && <span className="fav-toogle-display removed"> supprime</span>} */}
      </StyledFavoriteIcone>
    </>
  );
};

export default FavoriteIcone;
