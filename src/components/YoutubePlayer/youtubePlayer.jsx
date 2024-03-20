// created a video player component to play the YouTube video
import Iframe from 'react-iframe';

export default function YoutubePlayer({ videoId }) {
    return (
        <>
        <Iframe url={`https://www.youtube.com/embed/Tqr52FpLDRU`}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
        </>
        
    )
}