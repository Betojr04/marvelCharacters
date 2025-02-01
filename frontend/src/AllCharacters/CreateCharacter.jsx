import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Alert,
  Spinner,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";

const CreateCharacter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    alignment: "",
    powers: "",
    image_url: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    fetch(`http://127.0.0.1:5000/characters`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to create character");
        return res.json();
      })
      .then(() => {
        setSuccess(true);
        setTimeout(() => navigate("/characters"), 1500);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <Container className="edit-container">
      <Card className="edit-card shadow">
        <Row>
          <Col md={12}>
            <Card.Body>
              <h3 className="text-center mb-4">Create New Character</h3>

              {error &&
                <Alert variant="danger">
                  {error}
                </Alert>}
              {success &&
                <Alert variant="success">
                  Character Created Successfully!
                </Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Alias</Form.Label>
                  <Form.Control
                    type="text"
                    name="alias"
                    value={formData.alias}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Alignment</Form.Label>
                  <Form.Control
                    as="select"
                    name="alignment"
                    value={formData.alignment}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="hero">Hero</option>
                    <option value="villain">Villain</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Powers</Form.Label>
                  <Form.Control
                    type="text"
                    name="powers"
                    value={formData.powers}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  variant="success"
                  type="submit"
                  className="w-100 submit-button"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Character"}
                </Button>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CreateCharacter;
