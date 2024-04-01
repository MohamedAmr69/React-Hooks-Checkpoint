import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>Rating: {movie.rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
