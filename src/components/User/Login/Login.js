import './Login.css';
import { useContext } from 'react';
import { useState } from 'react';
import * as UserService from '../../Services/UserService';
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../Contexts/AdminContext';



export const Login = () => {
    const { loginHandler } = useContext(AuthContext);
    const { userAdmin } = useContext(AdminContext);
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
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
        const { email, password } = values;
        UserService.login(email, password)
            .then(userData => {
                loginHandler(userData);
                if (userData.email === 'peter@abv.bg') {
                    userAdmin(userData);
                }
                navigate('/');
            })
            .catch((err) => {

                throw new Error('Wrong email or password')
            })
    }

    return (
        <div id="contact" className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="request" className="main_form-login" onSubmit={loginSubmitHandler} >
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3>Login</h3>
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Email" type="type" name="email" value={values.email} onChange={changeHandler} />
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