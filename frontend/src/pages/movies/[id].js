// pages/movies/[id].js
import React from 'react';
import axios from 'axios';
import { Container, Box, Image, Heading, Text, Flex } from '@chakra-ui/react';

const MovieDetail = ({ movie }) => {
  return (
    <Container maxW="container.5xl"  centerContent mt={10}>
      <Box maxW="5xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Flex gap={10}>

        <Box w={900}>

        <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </Box>

        <Box>

        <Heading as="h1" size="xl" mt={4}>
          {movie.title}
        </Heading>
        <Text fontSize="lg" mt={2} color="gray.600">
          Release Date: {movie.release_date}
        </Text>
        <Text fontSize="lg" mt={2}>
          {movie.overview}
        </Text>
        <Text fontSize="lg" mt={2}>
          Vote Average: {movie.vote_average}
        </Text>
        </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const response = await axios.get(`http://localhost:5000/api/movies/${id}`);
    const movie = response.data;

    return {
      props: { movie },
    };
  } catch (error) {
    console.error('Error fetching movie details', error);

    return {
      notFound: true,
    };
  }
}

export default MovieDetail;
