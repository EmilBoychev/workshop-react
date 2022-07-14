import './style.css';
import { useState } from 'react';
import * as UserService from '../../Services/UserService'


export const Login = () => {
    const [values, setValues] = useState({
        userName: '',
        password: '',
    });
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }
    const loginSubmitHandler = (e) => {
        e.preventDefault();
        const { userName, password } = values;
        UserService.login({ userName, password })
            .then(user => {
                console.log(user);
            })
    }

    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="request" className="main_form" onSubmit={loginSubmitHandler} >
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3>Login</h3>
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="User name" type="type" name="userName" value={values.userName} onChange={changeHandler} />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Password" type="type" name="password" value={values.password} onChange={changeHandler} />
                                </div>
                                <div className="col-md-12">
                                    <button className="send_btn">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="map_section">
                    <div id="map">
                    </div>
                </div>
            </div>
        </div>
    )
}