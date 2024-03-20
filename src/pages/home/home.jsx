import Hero from '../../utils/Hero/Hero';

export default function Home() {
    return (
        <>
            <div className='Hero'>
                <Hero />
            </div>
            <div className='home-info-container'>
                <div className='logo-info'>
                    <img src='./src/assets/images/logo.png' alt="Logo" />
                    <div className="text-info">
                        <h2>LyricLift</h2>
                        <p>LyricLift is a website that provides translations of songs from around the world into English.<br />
                            Our goal is to help people understand the meaning behind the music they love, even if they don't speak the language it was written in.</p>
                    </div>
                </div>
            </div>

        </>
    );
}