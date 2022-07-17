import { One } from './One';
import * as GlassesService from '../Services/GlassesService';
import './style.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Glasses = ({ data }) => {
    const [glasses, setGlasses] = useState([]);
    const [oneGlasses, setOneGlasses] = useState({})
    useEffect(() => {
        try {
            GlassesService.getAll()
                .then(glasses => setGlasses(glasses))
        } catch (error) {
            throw error;
        }

    }, [])

    const clickDetailsHandler = (glassesId) => {
        try {
            GlassesService.getOne(glassesId)
                .then(res => {
                    // setOneGlasses(res)
                    data(res)
                })
        } catch (error) {
            throw error
        }
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
                        <NavLink className="read_more" to="/shop">Read More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
} 