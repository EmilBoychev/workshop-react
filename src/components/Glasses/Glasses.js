import { One } from './One/One';
import * as GlassesService from '../Services/GlassesService';
import './style.css';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
export const Glasses = () => {
    const navigate = useNavigate();
    const [glasses, setGlasses] = useState([]);
    useEffect(() => {
        try {
            GlassesService.getAll()
                .then(glasses => setGlasses(glasses))
        } catch (error) {
            console.log(error);
        }
    }, [])

    const clickDetailsHandler = (glassesId) => {
        navigate(`/details/${glassesId}`);
    }

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

                    {glasses.map(glasses => <One key={glasses._id} glassesData={glasses} clickDetails={clickDetailsHandler} />)}


                    <div className="col-md-12">
                        <NavLink className="read_more" to="/shop" >Read More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
} 