import React from "react";
import { useDispatch } from "react-redux";
import { fetchGenrelist } from "../actions/genreList.action";
const LoadStaticData = () => {
  const dispatch = useDispatch(); // Utilisez useDispatch ici

  React.useEffect(() => {
    dispatch(fetchGenrelist()); // Chargez les données statiques au montage
  }, [dispatch]); // Assurez-vous d'inclure dispatch dans les dépendance
  return <></>;
};

export default LoadStaticData;
