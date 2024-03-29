import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as GlassesService from '../Services/GlassesService';
import { AdminContext } from '../Contexts/AdminContext'
import { useContext } from 'react';
import { OneGlasses } from '../Contexts/GlassesContext';
import './Edit.css';

export const Edit = () => {
    const navigate = useNavigate();
    const { glasses } = useContext(OneGlasses);
    const { admin } = useContext(AdminContext);
    const glassesParams = useParams('id');
    const [values, setValues] = useState({ glasses });
    useEffect(() => {
        GlassesService.getOne(glassesParams.id)
            .then(res => {
                setValues(state => ({
                    _id: glassesParams.id,
                    imgUrl: res.imgUrl,
                    description: res.description,
                    name: res.name,
                    price: res.price
                }));
            })
            .catch(err => {
                console.log(err);
            });
    }, [glassesParams.id]);


    if (!admin.email) {
        return navigate('/404')
    }


    const ChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }
    const OnSubmitHandler = (e) => {
        e.preventDefault();

        const glassesData = values;
        GlassesService.updata(glassesParams.id, glassesData)
            .then(res => {
                setValues(state => ({
                    ...state,
                    imgUrl: res.imgUrl,
                    description: res.description,
                    name: res.name,
                    price: res.price
                }));

            })
            .catch(err => {
                console.log(err);
            });

        navigate(`/details/${glassesParams.id}`);
    }
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="request" className="main_form" onSubmit={OnSubmitHandler} >
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3>Edit</h3>
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
                                    <button className="send_btn">Edit</button>
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


