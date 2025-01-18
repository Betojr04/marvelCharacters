import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import FeaturedCharacters from "./FeaturedCharacters"; // Import your component

const HomePage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <div className="text-center my-5">
        <h1>Marvel Character Database</h1>
        <p>Explore heroes and villains, and add your own!</p>
        <Button variant="primary" href="/characters">
          View All Characters
        </Button>
      </div>

      {/* Featured Characters Section */}
      <div>
        <h3>Featured Characters</h3>
        <FeaturedCharacters />
      </div>

      {/* Quick Links Section */}
      <div className="text-center my-4">
        <h3>Get Started</h3>
        <Button variant="primary" href="/characters" className="mx-2">
          View All Characters
        </Button>
        <Button variant="success" href="/create-character" className="mx-2">
          Add New Character
        </Button>
      </div>
    </Container>
  );
};

export default HomePage;
