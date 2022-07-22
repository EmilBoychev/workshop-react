import { useState } from 'react';
import * as UserService from '../../Services/UserService'
import './style.css';

export const Register = () => {
    const [values, setValues] = useState({
        userName: '',
        password: '',
        rePassword: ''
    });
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }
    const registerSubmitHandler = (e) => {
        e.preventDefault();
        const { userName, password, rePassword } = values;
        if (password === rePassword) {
            UserService.register({ userName, password })
        } else {
            console.log('Password don\'t match');
        };
    };


    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={registerSubmitHandler} id="request" className="main_form">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3>Register</h3>
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="User name" type="type" name="userName" value={values.userName} onChange={changeHandler} />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Password" type="password" name="password" value={values.password} onChange={changeHandler} />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactusmess" placeholder="Re-password" type="password" name="rePassword" value={values.rePassword} onChange={changeHandler} />
                                </div>
                                <div className="col-md-12">
                                    <button className="send_btn">Register</button>
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