import Hero from '../../utils/Hero/Hero';
import ImageSlider from '../../utils/songSlider/ImageSlider';
import HomeBody from '../../utils/Body/homeBody';

export default function Home() {
    return (
        <>
            <div className='Hero'>
                <Hero />
                <HomeBody />
                <ImageSlider />
            </div>
        </>
    );
}