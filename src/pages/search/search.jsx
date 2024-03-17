
import React, { useState } from 'react';
import SearchLogic from "../../utils/searchFunction";

function Search() {
    return (
        <div>
            <SearchLogic />
        </div>
    );
}

export default Search;


import React from "react";
import { useState } from "react";
import ky from 'ky';
import { getSongLyrics } from "../../utils/lyric";

const apiKey = 'AIzaSyC4BhWU5wZxX3oQx5ulJ9uQrixPIj6Xpoc'

export default function Search() {
    const [search, setSearch] = useState("");
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(search);

        // Fetch YouTube data
        const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${apiKey}`;
        const youtubeResponse = await ky(youtubeUrl).json();
        console.log(youtubeResponse);

        // Call your getSongLyrics function
        try {
            const searchTermArray = search.split(',').map(term => term.trim());
            if (searchTermArray.length === 2) {
                // Fetch the lyrics for the entered song
                const [artist, title] = searchTermArray;
                const lyrics = await getSongLyrics(artist, title);
                console.log(lyrics)
            } else {
                console.error("Invalid search term format");
            }
        } catch (error) {
            console.error("Error fetching lyrics:", error);
        }
    }

    return (
        <div>
            <h1>Search page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for a song or artist" name="search" value={search} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

