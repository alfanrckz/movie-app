import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies/popular');
        console.log('Fetched movies:', response.data);
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching Movies', error);
      }
    };
    fetchMovies();
  }, []);

  const slides = movies.map((movie) => ({
    key: movie.id,
    content: <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />,
  }));

  return (
    <Carousel
      slides={slides}
      goToSlide={0}
      offsetRadius={2}
      showNavigation
      animationConfig={config.gentle}
    />
  );
};

export default MovieCarousel;
