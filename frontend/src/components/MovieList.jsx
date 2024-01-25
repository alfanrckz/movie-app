// components/MovieList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Box, Image, Text, VStack, HStack, Heading, Container } from '@chakra-ui/react';

const MovieList = () => {
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

  return (
    <Container maxW="container.lg" centerContent>
      <VStack spacing={8} align="center">
        <Heading>Popular Movies</Heading>

        <HStack spacing={8} justify="center" wrap="wrap">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <Box key={movie.id} position="relative" w={150} h={220} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <Box
                  position="absolute"
                  top={28}
                  left={0}
                  right={0}
                  bg="transparent"
                  p="6"
                  color="white"
                  textAlign="left"
                >
                  <Box d="flex" alignItems="baseline">
                    <Text fontSize="sm" color="gray.500">
                      {movie.release_date}
                    </Text>
                  </Box>
                  <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {movie.title}
                  </Box>

                  <Link href={`/movies/${movie.id}`}>
                    <Text mt="2" color="blue.500" fontSize="sm" cursor="pointer">
                      View Details
                    </Text>
                  </Link>
                </Box>
              </Box>
            ))
          ) : (
            <Text>No movies available</Text>
          )}
        </HStack>
      </VStack>
    </Container>
  );
};

export default MovieList;
