import ky from 'ky';

const apiKey = 'AIzaSyC4BhWU5wZxX3oQx5ulJ9uQrixPIj6Xpoc'

const getYoutubeVideo = async (initialSearch) => {

    try {
        const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${initialSearch}&type=video&key=${apiKey}`;
        const youtubeResponse = await ky(youtubeUrl).json();
        return youtubeResponse.items[0];
    } catch (error) {
        console.error("Error fetching YouTube video:", error);
        return null;
    }
};

export default getYoutubeVideo;
