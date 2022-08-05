import { Link } from 'react-router-dom';
import './style.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <ul className="location_icon">
                                <li><Link to="/contact"><i className="fa fa-map-marker" aria-hidden="true"></i></Link> Location</li>
                                <li><Link to="#"><i className="fa fa-phone" aria-hidden="true"></i></Link> +01 1234567890</li>
                                <li><Link to="/contact"><i className="fa fa-envelope" aria-hidden="true"></i></Link> glasses@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>© 2019 All Rights Reserved. Design by<Link to="https://html.design/"> Free Html Templates</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}