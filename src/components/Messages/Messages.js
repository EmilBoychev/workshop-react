import './style.css'
import * as MessageService from '../Services/MessageService'
import { useEffect, useState } from 'react'


export const Message = ({
    onClose
}) => {

    const [message, setMessage] = useState([]);
    useEffect(() => {
        MessageService.getAll()
            .then(res => {
                setMessage(res);
                // console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    const onDelete = async (messageId) => {
        MessageService.onDelete(messageId)
            .then(res => {
                const filteredMessage = message.filter(x => x._id !== messageId);
                setMessage(filteredMessage)
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className='custom-ui'>
            <div className='backdrop'>
                {message.map((x) =>
                    <div key={x._id} className="message" >
                        <h2>{x.name}</h2>
                        <p>Phone Number : {x.phoneNumber}</p>
                        <p>Email : {x.email}</p>
                        <p>Message : {x.message}</p>
                        <button className='btn' onClick={() => onDelete(x._id)}>Delete</button>
                    </div>
                )}
                <button className='close-btn' onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
