import React from "react";
import "./styleCard.css";
// Modify DeveloperPickCard component to handle click event
export default function DeveloperPickCard({ name, title, image, description, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(name, title);
  };
  return (
    <div className="card pick-card" onClick={handleCardClick}>
      <img src={image} className="card-img-top" alt={description} />
      <div className="card-body">
        <h5 className="card-title">
          {name} {title}
        </h5>
      </div>
    </div>
  );
}