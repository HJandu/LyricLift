import './hero.css';
import heroImage from '../../assets/images/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg';

function Hero() {
    return (
        <div className="hero-container">
            <div className="green-tint hero-image"> 
                <img src={heroImage} alt="Hero"/>
                <div className="hero-text">
                    <h1>Welcome to LyricLift, the home of international music</h1>
                    <p>Songs from around the world, all translated into English</p>
                </div>
            </div>
        </div>
    );
}
export default Hero;
