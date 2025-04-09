import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Search, BellFill, Grid, Grid3x3 } from "react-bootstrap-icons";

const Header = ({ searchQuery, setSearchQuery }) => {
  const [showSearch, setShowSearch] = useState(false);

  const location = useLocation();

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="bg-dark w-100">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              height="40"
              src="/public/netflix_logo.png"
              alt="Netflix logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Link
                className={
                  location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link text-light"
                }
                to="/"
              >
                Home
              </Link>
              <Link
                className={
                  location.pathname === "/tv-shows"
                    ? "nav-link active"
                    : "nav-link text-light"
                }
                to="/tv-shows"
              >
                TV Shows
              </Link>
              <Nav.Link href="#movies" className="text-light">
                Movies
              </Nav.Link>
              <Nav.Link href="#recently-added" className="text-light">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#my-list" className="text-light">
                My List
              </Nav.Link>
            </Nav>
            <Form
              className="d-flex align-items-center"
              onSubmit={handleSearchSubmit}
            >
              <Search
                className="mx-3"
                color="white"
                size={24}
                style={{ cursor: "pointer" }}
                onClick={handleSearchToggle}
              />
              {showSearch && (
                <FormControl
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
              <img
                height="40"
                src="/public/kids_icon.png"
                alt="kids-icon"
                className="mx-3"
              />
              <BellFill className="mx-3" color="white" size={24} />
              <div className="d-flex align-items-center mx-3">
                <img height="40" src="/public/avatar.jpg" alt="avatar" />
                <NavDropdown
                  id="genre-dropdown"
                  className="ms-3 bg-dark text-light"
                >
                  <NavDropdown.Item href="#">Preferiti</NavDropdown.Item>
                  <NavDropdown.Item href="#">Profilo</NavDropdown.Item>
                  <NavDropdown.Item href="#">Impostazioni</NavDropdown.Item>
                  <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="pt-2 mt-1">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h2 className="text-light fs-2 fw-bold mb-0">Best Movie Sagas</h2>
            <NavDropdown
              title="Genres"
              id="genre-dropdown"
              className="px-3 py-2 ms-3 bg-dark text-light d-none d-lg-block border border-light rounded"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#">Sci-Fi</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div>
            <Grid className="mx-2" color="white" size={24} />
            <Grid3x3 className="mx-2" color="white" size={24} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
