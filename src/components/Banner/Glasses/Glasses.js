import { NavLink } from "react-router-dom"

export const Glasses = ({ glasses }) => {
    return (
        <div className="carousel-item active">
            <div className="container">
                <div className="carousel-caption">
                    <div className="text-bg">
                        <h1> <span className="blu">Welcome </span>To Our Sunglasses</h1>
                        <figure><img className="banner-img" src={glasses?.imgUrl} alt="#" /></figure>
                        <NavLink className="read_more" to={`/details/${glasses?._id}`}>Shop Now</NavLink>
                    </div>
                </div>
            </div>
        </div >

    )
}