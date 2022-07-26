import './style.css';
import * as MessageService from '../Services/MessageService'
import { useNavigate } from 'react-router-dom'

export const Contacts = () => {
    const navigate = useNavigate()
    const userMessage = (e) => {
        e.preventDefault();
        let values = Object.fromEntries(new FormData(e.target))

        MessageService.create(values)
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
                                    <input className="contactus" placeholder="Email" type="type" name="email" />
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
            <div className="container-fluid">
                <div className="map_section">
                    <div id="map">
                    </div>
                </div>
            </div>
        </div>
    )
}

