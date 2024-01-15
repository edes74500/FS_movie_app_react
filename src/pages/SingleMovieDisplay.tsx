import React from "react";
import axios from "axios";

const SingleMovieDisplay = () => {
  const tMDBoptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_API_HEADERS_AUTHORIZATION,
    },
  };

  React.useEffect(({ inputSearchValue }) => {
    if (inputSearchValue !== null && inputSearchValue !== undefined) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${inputSearchValue}&include_adult=true&language=fr-FR&page=1`,
          tMDBoptions
        )
        .then((res) => {
          const results = res.data.results;
          setMoviesSearch(results.filter((moviesToDisplay) => moviesToDisplay.popularity > 60));
          // setSearchedPopularMovies(false);
        });
    }
  }, []);

  return <div>this is the movie!</div>;
};

export default SingleMovieDisplay;
