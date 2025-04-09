import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  ListGroup,
} from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const authHeaders = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y2ODJiZDk3YmYyZjAwMTU0OTZkMGEiLCJpYXQiOjE3NDQyMDg1NzQsImV4cCI6MTc0NTQxODE3NH0.bdp5R36T1JXYsSCIRvuLnJEEBKa-5N97Onh3OncFWAQ",
    },
  };

  useEffect(() => {
    const movieUrl = `https://www.omdbapi.com/?apikey=38c14aa1&i=${movieId}`;

    const commentsUrl = `https://striveschool-api.herokuapp.com/api/comments/${movieId}`;

    Promise.all([
      fetch(movieUrl).then((res) => res.json()),
      fetch(commentsUrl, authHeaders).then((res) => res.json()),
    ])
      .then(([movieData, commentsData]) => {
        setMovie(movieData);
        setComments(commentsData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel fetch:", err);
        setError(true);
        setLoading(false);
      });
  }, [movieId]);

  if (loading)
    return (
      <Container className="text-center py-5 text-light">
        <Spinner animation="border" variant="light" />
      </Container>
    );

  if (error || !movie)
    return (
      <Container className="text-center py-5">
        <Alert variant="danger">Errore nel caricamento del film.</Alert>
      </Container>
    );

  return (
    <main className="bg-dark min-vh-100">
      <Container className="bg-dark d-flex flex-column text-light">
        <Header />
        <Row className="mt-5">
          <Col s={12} md={4} lg>
            <Card>
              <Card.Img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450"
                }
                alt={movie.Title}
              />
            </Card>
          </Col>
          <Col md={8}>
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
            <p>
              <strong>Anno:</strong> {movie.Year}
            </p>
            <p>
              <strong>Genere:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Regista:</strong> {movie.Director}
            </p>
            <p>
              <strong>Cast:</strong> {movie.Actors}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </p>

            <h4 className="mt-4">Commenti</h4>
            {comments.length === 0 ? (
              <p>Nessun commento disponibile.</p>
            ) : (
              <ListGroup variant="flush" className="bg-dark text-light">
                {comments.map((c, index) => (
                  <ListGroup.Item
                    key={index}
                    className="bg-dark text-light border-bottom"
                  >
                    <strong>⭐ {c.rate}</strong> — {c.comment}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>
        <Footer />
      </Container>
    </main>
  );
};

export default MovieDetails;
