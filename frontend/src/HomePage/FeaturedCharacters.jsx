import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FeaturedCharacters.css";

const FeaturedCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/characters")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setCharacters(data.slice(0, 3)))
      .catch(error => console.error("Error fetching characters:", error));
  }, []);

  return (
    <Row>
      {characters.map(char =>
        <Col md={4} key={char.id}>
          <Card className="mb-4 card">
            <Card.Img variant="top" src={char.image_url} className="card-img" />
            <Card.Body>
              <Card.Title>
                {char.name}
              </Card.Title>
              <Card.Text>
                {char.alias}
              </Card.Text>
              <Button href={`/characters/${char.id}`} variant="primary">
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default FeaturedCharacters;
