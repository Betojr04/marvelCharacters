import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(
    () => {
      fetch(`http://127.0.0.1:5000/characters/${id}`)
        .then(res => res.json())
        .then(data => setCharacter(data))
        .catch(error => console.error("Error:", error));
    },
    [id]
  );

  const handleDelete = () => {
    fetch(`http://127.0.0.1:5000/characters/${id}`, { method: "DELETE" })
      .then(() => {
        alert("Character deleted successfully!");
        navigate("/characters");
      })
      .catch(error => console.error("Error:", error));
  };

  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <h2>
        {character.name}
      </h2>
      <p>
        Alias: {character.alias}
      </p>
      <p>
        Powers: {character.powers}
      </p>
      <Button
        variant="warning"
        onClick={() => navigate(`/edit-character/${id}`)}
      >
        Edit
      </Button>
      <Button variant="danger" onClick={handleDelete} className="ms-2">
        Delete
      </Button>
    </div>
  );
};

export default CharacterDetails;
