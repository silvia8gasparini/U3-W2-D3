import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={10}>
            <Row className="mb-3">
              <Col>
                <Facebook className="me-2" color="#838383" />
                <Instagram className="me-2" color="#838383" />
                <TwitterX className="me-2" color="#838383" />
                <Youtube color="#838383" />
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
              <Col className="mb-3">
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Contact us
                  </a>
                </p>
              </Col>
              <Col className="mb-3">
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Audio Description
                  </a>
                </p>
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Legal Notices
                  </a>
                </p>
              </Col>
              <Col className="mb-3">
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Cookie Preferences
                  </a>
                </p>
              </Col>
              <Col className="mb-3">
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="#" className="text-secondary text-decoration-none">
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-0 mt-3"
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="my-2 pb-4 text-secondary">
                © 1997-2025 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
