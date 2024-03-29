import React, { useState, useEffect } from 'react';
import { getSongLyrics } from "../getLyrics";
import { getTranslation } from "../getTranslation";
import TransLyricsBox from '../../components/TranslatedLyrics/transLyricsBox';
import EnglishLyricsBox from '../../components/TranslatedLyrics/englishLyricsbox';
import DeveloperPicks from '../../components/DeveloperPicks/developerPicks';

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
    const [results, setResults] = useState([]);
    // original lyrics state
    const [lyrics, setLyrics] = useState('');
    const [translatedLyrics, setTranslatedLyrics] = useState('');
    const [hasResults, setHasResults] = useState(false);


    // Use debounce hook to delay search input processing
    const debouncedSearch = useDebounce(search, 2000);

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
                setHasResults(true);

                // Update title and artist states
                setTitle(searchTitle);
                setArtist(searchArtist);

                // Fetch song lyrics
                const lyrics = await getSongLyrics(searchArtist, searchTitle);
                console.log("Original Lyrics:", lyrics);
                setLyrics(lyrics);

                // Translate lyrics
                const translatedLyrics = await getTranslation(lyrics);
                console.log("Translated Lyrics:", translatedLyrics);
                setTranslatedLyrics(translatedLyrics);

                // Get YouTube video info
                const youtubeResponse = await getYoutubeVideo(`${searchArtist} ${searchTitle}`);
                console.log("Youtube info:", youtubeResponse);
                setResults(youtubeResponse);

                // Get Spotify tracks
                const spotifyResponse = await getSpotifyTracks(`${searchArtist} ${searchTitle}`);
                console.log("Spotify info:", spotifyResponse);
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
    }

    const handleCardClick = (artistName, songTitle) => {
        setSearch(`${artistName}, ${songTitle}`);
};

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="artist name, song title" name="search" value={search} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>

            <div>
                {hasResults ?
                    <>
                        <div className="row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <div className="card text-center" >
                                    <div className="card-body">
                                        <h5 className="card-title">Original Lyrics</h5>
                                        <pre className="card-text">{lyrics}</pre>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Translated Lyrics</h5>
                                        <pre className="card-text">{translatedLyrics}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null}
            </div>
            <DeveloperPicks onCardClick={handleCardClick} />

        </div>
    );
}


export default SearchLogic;
