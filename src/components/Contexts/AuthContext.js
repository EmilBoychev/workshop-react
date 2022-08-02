import { createContext } from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

// export const AuthProvider = ({
//     children,
// }) => {

//     const [auth, setAuth] = useLocalStorage('auth', {});


//     return (
//         <AuthContext.Provider>
//             {children}
//         </AuthContext.Provider>
//     )
// }