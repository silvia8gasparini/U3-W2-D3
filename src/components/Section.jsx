import React, { useEffect, useState } from "react";
import { Container, Carousel, Spinner, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Error from "./Error";
import "../assets/style.css";

const Section = ({ title, query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=38c14aa1&s=${encodeURIComponent(query)}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          console.warn("No movies found for:", query);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore caricamento film:", error);
        setError(true);
        setLoading(false);
      });
  }, [query]);

  const getMovieSlide = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 992) return 2;
    return 6;
  };

  const [movieSize, setMovieSlide] = useState(getMovieSlide());

  useEffect(() => {
    const itemResize = () => setMovieSlide(getMovieSlide());
    window.addEventListener("resize", itemResize);
    return () => window.removeEventListener("resize", itemResize);
  }, []);

  const carouselMovies = [];
  for (let i = 0; i < movies.length; i += movieSize) {
    carouselMovies.push(movies.slice(i, i + movieSize));
  }

  return (
    <Container fluid className="px-4">
      <section className="mt-4">
        <h3 className="text-light mb-3 px-4">{title}</h3>
        {loading ? (
          <div className="text-center text-light my-5">
            <Spinner animation="border" variant="light" /> Loading...
          </div>
        ) : error ? (
          <Error message={`Impossibile caricare "${title}"`} />
        ) : (
          <Carousel
            controls={true}
            indicators={false}
            interval={null}
            className="bg-dark px-4"
          >
            {carouselMovies.map((group, index) => (
              <Carousel.Item key={index}>
                <Row className="my-1 g-3 justify-content-center">
                  {group.map((movie) => (
                    <Col key={movie.imdbID} xs={6} md={4} lg={2}>
                      <Card className="bg-dark border-0">
                        <Link to={`/movie-details/${movie.imdbID}`}>
                          <Card.Img
                            src={
                              movie.Poster !== "N/A"
                                ? movie.Poster
                                : "https://via.placeholder.com/300x450?text=No+Image"
                            }
                            alt={movie.Title}
                            className="img-fluid poster-hover"
                          />
                        </Link>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </section>
    </Container>
  );
};

export default Section;
