import React from "react";
import "./styleCard.css";
import searchLogic from "../../utils/SearchFunction/searchFunction";
//created single card component for developer pick card

export default function DeveloperPickCard({ name, title, image, description }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={description} />
      <div className="card-body">
        <h5 className="card-title" onClick={searchLogic}>
          {name} {title}
        </h5>
      </div>
    </div>
  )
}