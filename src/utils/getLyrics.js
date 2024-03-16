import axios from "axios";

export const getSongLyrics = async (artist, title) => {
    try {
        // Encode artist and title for URL
        const encodedArtist = encodeURIComponent(artist);
        const encodedTitle = encodeURIComponent(title);

        const response = await axios.get(`https://api.lyrics.ovh/v1/${encodedArtist}/${encodedTitle}`);
        
        // Check if the request was successful
        if (response.status !== 200) {
            throw new Error('Failed to fetch lyrics');
        }

        // Extract lyrics from response data
        return response.data.lyrics; // Return the lyrics
    } catch (error) {
        console.error("Error fetching lyrics:", error);
        return null;
    }
};
