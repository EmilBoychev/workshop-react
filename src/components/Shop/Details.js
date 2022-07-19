import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as GlassesService from '../Services/GlassesService'
import './style.css';

export const Details = () => {
    const { glassesId } = useParams()
    const [glasses, setGlasses] = useState({})

    useEffect(() => {
        GlassesService.getOne(glassesId)
            .then(res => {
                console.log(res);
                setGlasses(res)
            })


    }, [])



    return (
        <div id="about" className="shop">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="shop_img">
                            <figure><img src={glasses.imgUrl} alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-7 padding_right0">
                        <div className="max_width">
                            <div className="titlepage">
                                <h2>Best SunGlasses At Our shop</h2>
                                <p>{glasses.description}</p>
                                <NavLink className="read_more" to="#">Buy now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}