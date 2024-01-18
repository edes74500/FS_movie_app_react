import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";
import breakpoints from "../../../../styles/breakpoints";

//redux
import { useDispatch, useSelector } from "react-redux";
import { displayFavMessage, toogleFavMoviesList } from "../../../../actions/favList.action";
import { useRef } from "react";

const StyledAddFavorite = styled.div`
  svg {
    /* transition: 0.5s ease-in-out; */
    font-size: 3rem;
    color: #d3d3d35e;
    cursor: pointer;
    &:hover {
      color: white;
    }
    @media screen and (max-width: ${breakpoints.tablet}px) {
      font-size: 2rem;
    }
  }
  &.fav {
    svg {
      color: red;
    }
    color: red;
  }
`;

const AddFavorite = ({ movie }) => {
  const favList = useSelector((state) => state.favMoviesList.list);
  const timeOut = useRef(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   toLocaleStorage(favList);
  // }, [favList]);

  const handleOnClick = () => {
    dispatch(toogleFavMoviesList(movie));
    const fav = favList.some((fav) => fav.id === movie.id);

    // dispatch({
    //   type: DISPLAY_FAV_MESSAGE,
    //   payload: fav ? "removed" : "added",
    // });
    // dispatch(displayFavMessage(null));
    dispatch(displayFavMessage(fav ? "removed" : "added"));
    if (timeOut.current) clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      dispatch(displayFavMessage(null));
    }, 1000);

    return fav;
  };

  const checkIfFav = () => {
    const fav = favList.some((fav) => fav.id === movie.id);

    return fav;
  };

  return (
    <StyledAddFavorite onClick={handleOnClick} data-id={movie.id} className={`${checkIfFav() ? "fav" : ""}`}>
      <FaHeart />
    </StyledAddFavorite>
  );
};

export default AddFavorite;
