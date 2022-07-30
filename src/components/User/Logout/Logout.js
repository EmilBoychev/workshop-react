import { useEffect, useContext } from 'react'
import * as userService from '../../Services/UserService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';


export const Logout = () => {
    const { auth, userLogout } = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(() => {
        // console.log(auth.accessToken);
        userService.logout(auth.accessToken)
            .then(res => {
                userLogout()
                navigate('/')
            })
            .catch(err => console.log(err))

    }, [auth.accessToken, navigate, userLogout]);
    return null;
}

