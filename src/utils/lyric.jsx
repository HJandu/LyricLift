import axios from "axios";

export const getSongLyrics = async (artist, title) => {
    try {
        // Encode artist and title for URL
        const encodedArtist = encodeURIComponent(artist);
        const encodedTitle = encodeURIComponent(title);

        // Make GET request to lyrics.ovh API
        const response = await fetch(`https://api.lyrics.ovh/v1/${encodedArtist}/${encodedTitle}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch lyrics');
        }

        // Extract lyrics from response data
        const data = await response.json();
        return data.lyrics; // Return the lyrics
    } catch (error) {
        console.error("Error fetching lyrics:", error);
        return null;
    }
};


