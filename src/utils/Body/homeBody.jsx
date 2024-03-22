
import './homebody.css'
import logoImage from '../../assets/images/logo.png'

function HomeBody() {
    return (
        <div className='home-info-container'>
            <div className='logo-info'>
                <img src={logoImage} alt="Logo" />
                <div className="text-info">
                    <h2>LyricLift</h2>
                    <p>LyricLift is a website that provides translations of songs from around the world into English.<br />
                        Our goal is to help people understand the meaning behind the music they love, <br />
                        even if they don't speak the language it was written in.</p>
                    <p>Our translation system will automatically detect the orginal language so you dont have to worry <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeBody;
