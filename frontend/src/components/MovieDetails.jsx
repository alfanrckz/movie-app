// components/MovieDetails.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error(`Error fetching movie details for ID ${id}:`, error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (!movie) {
    return <div>Loading Please Wait....</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <p>{movie.runtime} minutes</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
