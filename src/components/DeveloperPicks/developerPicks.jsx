//import artist json file 
import artist from "../../assets/artist.json";
import DeveloperPickCard from "../CardChoice/developerPickCard";
import React from "react";
import "./style.css";

export default function DeveloperPicks() {
    return (
        <div>
            <h2>Top Recommended Songs</h2>
            <div className="row">
                {artist.map((artist) => (
                    <div className="col-md-4 col-sm-12" key={artist.id}>
                        <DeveloperPickCard
                            key={artist.id}
                            name={artist.name}
                            title={artist.title}
                            image={artist.image}
                            description={artist.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}