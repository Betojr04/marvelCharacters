import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/characters")
      .then(res => res.json())
      .then(data => setCharacters(data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <Row className="g-4">
      {characters.map(char =>
        <Col md={4} key={char.id}>
          <Card className="character-card h-100 shadow-sm">
            <div className="image-container">
              <Card.Img
                variant="top"
                src={char.image_url}
                className="character-image"
              />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title className="text-center">
                {char.name}
              </Card.Title>
              <Button
                as={Link}
                to={`/characters/${char.id}`}
                variant="primary"
                className="mt-auto w-100"
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default Characters;
