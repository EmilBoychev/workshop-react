import './style.css';
import * as MessageService from '../Services/MessageService'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import { useContext } from 'react';
import { SimpleMap } from './SimpleMap/SImpleMap';
export const Contacts = () => {
    const navigate = useNavigate()
    const { auth } = useContext(AuthContext);

    const userMessage = (e) => {
        e.preventDefault();

        let values = Object.fromEntries(new FormData(e.target))
        if (!auth.email) {
            console.log(auth);
            navigate('/login')
            return
        }


        MessageService.create(auth.accessToken, { ...values, email: auth.email })
            .then(res => {
                navigate('/glasses')
            })
            .catch(err => {
                console.log(err);
            })
    }





    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="request" className="main_form" onSubmit={userMessage}>
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="col-md-12 ">
                                    <input className="contactus" placeholder="Name" type="type" name="name" />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Phone Number" type="type" name="phoneNumber" />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactusmess" placeholder="Message" type="type" name="message" />
                                </div>
                                <div className="col-md-12">
                                    <button className="send_btn">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <img className='image-add' src="https://images.indianexpress.com/2022/01/Titan-EyeX_2_1.jpg" alt="" />
            <div className="container-fluid">
                <div className="map_section">
                    <div className="map">
                        <SimpleMap />
                    </div>
                </div>
            </div>
        </div>
    )
}

