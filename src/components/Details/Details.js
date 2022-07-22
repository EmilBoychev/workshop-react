import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import * as GlassesService from '../Services/GlassesService'
import './style.css';

export const Details = () => {
    const navigate = useNavigate();
    const { glassesId } = useParams();
    const [glasses, setGlasses] = useState({});

    useEffect(() => {
        GlassesService.getOne(glassesId)
            .then(res => {
                setGlasses(res)
            });
    }, []);

    const deleteGlasses = () => {
        GlassesService.deleteGlasses(glasses._id)
            .then(res => {
                navigate('/glasses')
            })
    }

    return (
        <div id="about" className="shop">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="shop_img">
                            <figure><img src={glasses.imgUrl} alt="#" /></figure>
                        </div>
                        <div className="comments">
                            <h2>Name</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour.</p>
                        </div>
                    </div>
                    <div className="col-md-7 padding_right0">
                        <div className="max_width">
                            <div className="titlepage">
                                <h2>{glasses.name}</h2>
                                <p>{glasses.description}</p>
                                <NavLink className="read_more" to="#">Buy now</NavLink>
                                <NavLink className="read_more" to={`/glasses/${glasses._id}/edit`}>Edit</NavLink>
                                <div className="read_more" onClick={() => deleteGlasses()}>Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}