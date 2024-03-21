import React from "react";
import "./styleCard.css";
//created single card component for developer pick card

export default function DeveloperPickCard({ name, title, image, description }) {
    return (
      <div class="card">
    <img src={image} class="card-img-top" alt={description} />
    <div class="card-body">
      <h5 class="card-title">{name}, {title}</h5>
    </div>
  </div>
    )
  }