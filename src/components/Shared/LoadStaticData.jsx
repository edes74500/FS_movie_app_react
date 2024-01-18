import React from "react";
import { useDispatch } from "react-redux";
import { fetchGenrelist, fetchTopRated2000MovieList } from "../../actions/apiFetch.action";
import { fetchPopularMovieList } from "../../actions/apiFetch.action";
import { fetchTopRatedMovieList } from "../../actions/apiFetch.action";

const LoadStaticData = () => {
  const dispatch = useDispatch(); // Utilisez useDispatch ici

  React.useEffect(() => {
    dispatch(fetchGenrelist()); // Chargez les données statiques au montage
    dispatch(fetchPopularMovieList());
    dispatch(fetchTopRatedMovieList());
    dispatch(fetchTopRated2000MovieList());
    // fromLocaleStorage();
  }, [dispatch]); // Assurez-vous d'inclure dispatch dans les dépendance
  return <></>;
};

export default LoadStaticData;
