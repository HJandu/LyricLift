import React from "react";
import "./styleCard.css";
import SearchLogic from "../../utils/SearchFunction/searchFunction";

export default function DeveloperPickCard({ name, title, image, description }) {
  const handleTitleClick = () => {
    console.log("Title clicked:", title);
    return <SearchLogic search={title} />;
  };
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={description} />
      <div className="card-body">
        <h5 className="card-title">
          {name} {title}
        </h5>
      </div>
    </div>
  );
}