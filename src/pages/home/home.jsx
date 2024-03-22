import Hero from '../../components/Hero/Hero';
import ImageSlider from '../../components/songSlider/ImageSlider';
import HomeBody from '../../components/Body/homeBody';

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