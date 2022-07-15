import { One } from './One';
import './style.css';

export const Glasses = (glasses) => {
    return (
        <div className="glasses">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="titlepage">
                            <h2>Our Glasses</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                                e et dolore magna aliqua. Ut enim ad minim veniam, qui
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">

                    {/* {glasses.map(glasses => <One glassesData="glasses">)} */}

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure><img src="https://m.media-amazon.com/images/I/411L3Qb+QSL._UX569_.jpg" alt="#" /></figure>
                            <h3><span className="blu">$</span>50</h3>
                            <p>Sunglasses</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure><img src="https://www.savemoneyonglasses.com/wp-content/uploads/2022/01/carrera-sunglasses-1007-s-08079o.jpg" alt="#" /></figure>
                            <h3><span className="blu">$</span>50</h3>
                            <p>Sunglasses</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure><img src="images/glass4.png" alt="#" /></figure>
                            <h3><span className="blu">$</span>50</h3>
                            <p>Sunglasses</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure><img src="images/glass5.png" alt="#" /></figure>
                            <h3><span className="blu">$</span>50</h3>
                            <p>Sunglasses</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure><img src="images/glass6.png" alt="#" /></figure>
                            <h3><span className="blu">$</span>50</h3>
                            <p>Sunglasses</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure><img src="images/glass7.png" alt="#" /></figure>
                            <h3><span className="blu">$</span>50</h3>
                            <p>Sunglasses</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure><img src="images/glass8.png" alt="#" /></figure>
                            <h3><span className="blu">$</span>50</h3>
                            <p>Sunglasses</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <a className="read_more" href="/more">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
} 