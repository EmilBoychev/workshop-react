import './style.css';
import { useState } from 'react';
import * as UserService from '../../Services/UserService'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { AdminContext } from '../../Contexts/AdminContext';

export const Register = () => {

    const navigate = useNavigate();
    const { loginHandler } = useContext(AuthContext);
    const { userAdmin } = useContext(AdminContext);
    const [values, setValues] = useState({
        email: '',
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
        const { email, password, rePassword } = values;
        if (password === rePassword) {
            UserService.register(email, password)
                .then(res => {
                    loginHandler(res);
                    if (email === 'peter@abv.bg') {
                        userAdmin(res);
                    }
                    navigate('/');
                })
                .catch(err => {
                    console.log(err);
                })

            navigate('/');
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
                                    <input className="contactus" placeholder="Email" type="type" name="email" value={values.userName} onChange={changeHandler} />
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