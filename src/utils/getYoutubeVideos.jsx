import ky from 'ky';
const apiKey = 'AIzaSyDa5eIkh0TlHKFLAElwcAzFjz1gww5KOxg'

const getYoutubeVideo = async (initialSearch) => {

    try {
        const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${initialSearch}&type=video&key=${apiKey}`;
        const youtubeResponse = await ky(youtubeUrl).json();
        return youtubeResponse.items;
    } catch (error) {
        console.error("Error fetching YouTube video:", error);
        return null;
    }
};

export default getYoutubeVideo;
