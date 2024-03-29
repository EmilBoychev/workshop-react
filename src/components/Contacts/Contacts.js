import './Contacts.css';
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
        <div id="contact" className="cont">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="request" className="main_form-contacts" onSubmit={userMessage}>
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="col-md-12 ">
                                    <input className="contactuss" placeholder="Name" type="type" name="name" />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactuss" placeholder="Phone Number" type="type" name="phoneNumber" />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactusmesss" placeholder="Message" type="type" name="message" />
                                </div>
                                <div className="col-md-12">
                                    <button className="send_btn">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <img className='image-add' src="https://images.indianexpress.com/2022/01/Titan-EyeX_2_1.jpg" alt="" /> */}
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

