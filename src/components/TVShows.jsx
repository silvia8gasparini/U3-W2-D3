import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
const Home = () => {
  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <h1 className="text-center">Welcome to TV Shows!</h1>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
