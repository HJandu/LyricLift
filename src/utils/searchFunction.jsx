import React, { useState, useEffect } from 'react';
import { getSongLyrics } from "./getLyrics";
import { translateText } from "./getTranslation";
import getYoutubeVideo from "./getYoutubeVideos";

// Debounce hook to delay search input processing
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

function SearchLogic() {
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [error, setError] = useState(null);

    // Use debounce hook to delay search input processing
    const debouncedSearch = useDebounce(search, 1000);

    useEffect(() => {
        if (!debouncedSearch) return;

        const fetchData = async () => {
            try {
                let searchArtist, searchTitle;
        
                const searchTerms = debouncedSearch.split(' ').map(term => term.trim());
                if (searchTerms.length === 2) {
                    [searchArtist, searchTitle] = searchTerms;
                } else {
                    searchArtist = searchTerms.join(' ');
                    searchTitle = searchTerms.join(' ');
                }
        
                // Update title and artist states
                setTitle(searchTitle);
                setArtist(searchArtist);
        
                // Fetch song lyrics
                const lyrics = await getSongLyrics(searchArtist, searchTitle);
                console.log("Original Lyrics:", lyrics);
        
                // Translate lyrics
                const translatedLyrics = await translateText(lyrics, 'en');
                console.log("Translated Lyrics:", translatedLyrics);
        
                // Get YouTube video info
                const youtubeResponse = await getYoutubeVideo(`${searchArtist} ${searchTitle}`);
                console.log("Youtube info:", youtubeResponse);
            } catch (error) {
                setError(error);
            }
        };
        
        fetchData();
    }, [debouncedSearch]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can remove this function if you're already handling the search logic in useEffect
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

export default SearchLogic;
