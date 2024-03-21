import "./footer.css";
import 'materialize-css/dist/css/materialize.min.css';
import { mdiFacebook, mdiTwitter, mdiGooglePlus, mdiLinkedin } from '@mdi/js'

function Footer() {
    return (
        <>
            <footer className="page-footer center social-colored teal darken-3">
                <div className="container footer-content">
                    <div className="row">
                        <div></div>
                        <div className="link-wrap">
                            <ul className="link-ul">
                                <li><a href="#!"><i className="mdi mdi-email"></i> Courtesy of the SoftwareSourcerers</a></li>
                                <li><a href="#!"><i className="mdi mdi-map-marker"></i> UOB, Birmingham, United Kingdom</a></li>
                            </ul>
                            <ul className="social-wrap">
                                <li className="social">
                                    <a href="#!"><i className="icon"><svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d={mdiFacebook} /></svg></i></a>
                                    <a href="#!"><i className="icon"><svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d={mdiTwitter} /></svg></i></a>
                                    <a href="#!"><i className="icon"><svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d={mdiGooglePlus} /></svg></i></a>
                                    <a href="#!"><i className="icon"><svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d={mdiLinkedin} /></svg></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        &copy; Copyright <a className="" href="/">Home</a>. All rights reserved.
                    </div>
                </div>
            </footer >
        </>
    );
}
export default Footer;
