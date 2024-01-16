import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";
import breakpoints from "../../../../styles/breakpoints";

//redux
import { useDispatch, useSelector } from "react-redux";
import { toogleFavMoviesList } from "../../../../actions/favList.action";

const StyledAddFavorite = styled.div`
  svg {
    transition: 0.5s ease-in-out;
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
  const favList = useSelector((state) => state.favMoviesList);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    const id = movie.id;
    const title = movie.title;
    const poster = movie.poster_path;
    const vote_average = movie.vote_average;
    const vote_count = movie.vote_count;
    const genres = movie.genres;
    const overview = movie.overview;
    const release_date = movie.release_date;
    const backdrop_path = movie.backdrop_path;
    const popularity = movie.popularity;
    const movieInfo = {
      id,
      title,
      poster,
      vote_average,
      vote_count,
      genres,
      overview,
      release_date,
      backdrop_path,
      popularity,
    };
    // console.log(movieInfo.id);
    console.log(favList);
    dispatch(toogleFavMoviesList(movieInfo));
  };

  const checkIfFav = (id) => {
    const fav = favList.some((fav) => fav.id === id);
    return fav;
  };

  return (
    <StyledAddFavorite onClick={handleOnClick} data-id={movie.id} className={`${checkIfFav(movie.id) ? "fav" : ""}`}>
      <FaHeart />
    </StyledAddFavorite>
  );
};

export default AddFavorite;
