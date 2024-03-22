import React from "react";
import "./style.css";
import artist from "../../assets/artist.json";
import DeveloperPickCard from "../CardChoice/developerPickCard";
export default function DeveloperPicks({ onCardClick }) {
  return (
    <div>
      <h2 className="display-4">Our Recommended Songs</h2>
      <div className="row">
        {artist.map((artist) => (
          <div className="col-md-4 col-sm-12" height="100" key={artist.id}>
            <DeveloperPickCard
              name={artist.name}
              title={artist.title}
              image={artist.image}
              description={artist.description}
              // Pass the function to handle the click event
              onCardClick={onCardClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}