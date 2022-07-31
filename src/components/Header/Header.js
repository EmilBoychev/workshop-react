import './style.css'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { AdminContext } from '../Contexts/AdminContext';

export const Header = () => {
    const { auth } = useContext(AuthContext);
    const { admin } = useContext(AdminContext);


    const forGuest = (
        <>
            <li className="nav-item d_none login_btn">
                <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item d_none">
                <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
        </>
    );
    const forAuth = (
        <li className="nav-item d_none login_btn">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
    );
    const forAdmin = (
        <>
            <li className="nav-item d_none">
                <NavLink className="nav-link" to="/create">Add</NavLink>
            </li>
            <li className="nav-item d_none">
                <NavLink className="nav-link" to="/messages">Message</NavLink>
            </li>

        </>
    )



    return (
        <header>
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <NavLink to='/'><img src="/images/logo.png" alt="#" /></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                                    aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/glasses">Our Glasses</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                        </li>
                                        {!auth.email ? forGuest : forAuth}
                                        {admin.email && forAdmin}

                                        {/* <li className="nav-item d_none sea_icon">
                                            <NavLink className="nav-link" to="/bag"><i className="fa fa-shopping-bag" aria-hidden="true"></i><i
                                                className="fa fa-search" aria-hidden="true"></i></NavLink>
                                        </li> */}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}