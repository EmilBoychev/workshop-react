import { AuthContext } from "../Contexts/AuthContext";

import { useState, useContext } from "react";

import * as GlassesService from '../Services/GlassesService';
import './Create.css'


export const Create = () => {
    const { auth } = useContext(AuthContext);
    const [values, setValues] = useState({
        imgUrl: '',
        description: '',
        name: '',
        price: '',
    })

    const ChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        const glassesData = values;
        GlassesService.create({ ...glassesData, ownerId: auth._id })
            .then(res => {
                setValues({
                    imgUrl: '',
                    description: '',
                    name: '',
                    price: '',

                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="request" className="main_form" onSubmit={OnSubmitHandler} >
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3>Add glasses </h3>
                                </div>
                                <div className="col-md-12 ">
                                    <input className="contactus" placeholder="Name" type="type" name="name" value={values.name} onChange={ChangeHandler} />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Image URL" type="type" name="imgUrl" value={values.imgUrl} onChange={ChangeHandler} />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Description" type="type" name="description" value={values.description} onChange={ChangeHandler} />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactusmess" placeholder="Price" type="type" name="price" value={values.price} onChange={ChangeHandler} />
                                </div>
                                <div className="col-md-12">
                                    <button className="send_btn">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {values.imgUrl && <img className='image-add' src={values.imgUrl} alt={values.name} ></img>}

            <div className="container-fluid">
                <div className="map_section">
                    <div id="map">
                    </div>
                </div>
            </div>
        </div>
    )
}