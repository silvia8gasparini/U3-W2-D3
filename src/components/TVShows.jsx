import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
const Home = () => {
  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <h1 className="text-center">Welcome to TV Shows!</h1>
        <Section title="Attack On Titan" query="Attack On Titan" />
        <Section title="Demon Slayer" query="Demon Slayer" />
        <Section title="Evangelion" query="Evangelion" />
        <Section title="Inuyasha" query="Inuyasha" />
        <Section title="Sailor Moon" query="Sailor Moon" />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
