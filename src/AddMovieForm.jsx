import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AddMovieForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, rating });
    setTitle("");
    setDescription("");
    setRating("");
  };

  const handleRatingChange = (e) => {
    const inputRating = e.target.value;
    // Ensure rating is between 1 and 10
    if (!isNaN(inputRating) && inputRating >= 1 && inputRating <= 10) {
      setRating(inputRating);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Add New Movie</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label className="mb-0">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label className="mb-0">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="rating">
              <Form.Label className="mb-0">Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter rating (1-10)"
                min="1"
                max="10"
                value={rating}
                onChange={handleRatingChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Movie
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMovieForm;
