import { NavLink } from 'react-router-dom';
import './style.css';

export const Details = ({ data }) => {
    return (
        <div id="about" className="shop">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="shop_img">
                            <figure><img src={data.imgUrl} alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-7 padding_right0">
                        <div className="max_width">
                            <div className="titlepage">
                                <h2>Best SunGlasses At Our shop</h2>
                                <p>{data.description}</p>
                                <NavLink className="read_more" to="#">Buy now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}