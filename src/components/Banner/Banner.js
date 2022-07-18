import { NavLink } from 'react-router-dom';
import './style.css';

export const Banner = () => {
    return (
        <section className="banner_main">
            <div id="banner1" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#banner1" data-slide-to="0" className="active"></li>
                    <li data-target="#banner1" data-slide-to="1"></li>
                    <li data-target="#banner1" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="carousel-caption">
                                <div className="text-bg">
                                    <h1> <span className="blu">Welcome </span>To Our Sunglasses</h1>
                                    <figure><img src="images/banner_img.png" alt="#" /></figure>
                                    <NavLink className="read_more" to="/glasses">Shop Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="carousel-caption">
                                <div className="text-bg">
                                    <h1> <span className="blu">Welcome </span>To Our Sunglasses</h1>
                                    <figure><img src="images/banner_img.png" alt="#" /></figure>
                                    <NavLink className="read_more" to="/glasses">Shop Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="carousel-caption">
                                <div className="text-bg">
                                    <h1> <span className="blu">Welcome </span>To Our Sunglasses</h1>
                                    <figure><img src="images/banner_img.png" alt="#" /></figure>
                                    <NavLink className="read_more" to="/glasses">Shop Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <NavLink className="carousel-control-prev" to="#banner1" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </NavLink>
                <NavLink className="carousel-control-next" to="#banner1" role="button" data-slide="next">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </NavLink> */}
            </div>
        </section>
    )
}