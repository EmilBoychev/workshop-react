import { useEffect, useContext } from 'react'
import * as userService from '../Services/UserService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';


export const Logout = (tokken) => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(() => {
        userService.logout(auth.accessToken)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return null;
}

