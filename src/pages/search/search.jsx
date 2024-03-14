import React from "react";
import { useState } from "react";
import ky from 'ky';

const apiKey = 'AIzaSyC4BhWU5wZxX3oQx5ulJ9uQrixPIj6Xpoc'

const fetchAPI = async () => {
  const response = await ky(url).json();
  console.log(response);
}

export default function Search() {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(search);
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${apiKey}`;
        const response = await ky(url).json();
        console.log(response);
        // const spotifyURL= `https://api.spotify.com/v1/search?q=${search}&type=track`
        // const spotifyResponse = await ky(spotifyURL).json();
        // console.log(spotifyResponse);
    }
    return(
        <div>
            <h1>Search page</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a song or artist" name="search" value={search} onChange={handleChange} />
            <button type="submit">Search</button>
            </form>
        </div>
        // another div to output the search results
    )
}