import './hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <div className="green-tint hero-image"> 
                <img src='./src/assets/images/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg' alt="Hero"/>
                <div className="hero-text">
                    <h1>Welcome to LyricLift, the home of international music</h1>
                    <p>Songs from around the world, all translated into English</p>
                </div>
            </div>
        </div>
    );
}
export default Hero;
