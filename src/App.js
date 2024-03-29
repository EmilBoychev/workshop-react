import { Routes, Route, useNavigate, } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from './components/Contexts/AuthContext';
import { AdminContext } from "./components/Contexts/AdminContext";

import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { ClientSection } from "./components/ClientSection/ClientSection";
import { Contacts } from "./components/Contacts/Contacts";
import { Create } from "./components/Create/Create";
import { Footer } from "./components/Footer/Footer";
import { Glasses } from "./components/Glasses/Glasses";
import { Header } from "./components/Header/Header";
import { Details } from "./components/Details/Details";
import { Login } from "./components/User/Login/Login";
import { Register } from "./components/User/Register/Register";
import { Edit } from "./components/Edit/Edit";
import { Message } from "./components/Messages/Messages";
import { Logout } from "./components/User/Logout/Logout";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import { OneGlasses, CartGlasses } from "./components/Contexts/GlassesContext";
import { Error404 } from './components/Error404/Error404'
import ErrorBoundary from './components/common/ErrorBoundary'


function App() {
    const navigate = useNavigate();
    const [userMessage, setUserMessage] = useState();
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [admin, setAdmin] = useLocalStorage('admin', {});
    const [glasses, setGlasses] = useState({})
    const [cart, setCart] = useState([])
    useEffect(() => {
        setUserMessage(true);
    }, [userMessage])
    const onCloseMessage = () => {
        setUserMessage(false);
        navigate('/');
    };

    const loginHandler = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    const userAdmin = (adminData) => {
        setAdmin(adminData);
    };
    const logoutAdmin = () => {
        setAdmin('');
    };
    const oneGlasses = (oneGlassesRes) => {
        setGlasses(oneGlassesRes);
    };
    const addToCart = (addCart) => {
        setCart(current => [...current, addCart]);
    };
    const delFromCart = (delCart) => {
        let filtred = cart.filter(x => x !== delCart);
        setCart(() => filtred);
    };
    return (
        <ErrorBoundary>
            <AuthContext.Provider value={{ auth, loginHandler, userLogout }} >
                <AdminContext.Provider value={{ admin, userAdmin, logoutAdmin }}>
                    <OneGlasses.Provider value={{ glasses, oneGlasses }}>
                        <CartGlasses.Provider value={{ cart, addToCart, delFromCart }} >



                            <>
                                <Header />
                                <div className="App">

                                    <Routes>
                                        <Route path="/" element={<> <Banner /> <Glasses /> <About /> </>} />

                                        <Route path="/about" element={<About />} />

                                        <Route path="/glasses" element={<Glasses />} />

                                        <Route path="/details/:glassesId" element={<Details />} />

                                        <Route path="/clients" element={<ClientSection />} />

                                        <Route path="/contact" element={<Contacts />} />

                                        <Route path="/create" element={<Create />} />

                                        <Route path="/register" element={<Register />} />

                                        <Route path="/login" element={<Login />} />

                                        <Route path="/logout" element={<Logout />} />

                                        <Route path={`/glasses/:id/edit`} element={<Edit />} />

                                        {userMessage && <Route path="/messages" element={<Message onClose={onCloseMessage} />} />}

                                        <Route path={'/404'} element={<Error404 />} />
                                    </Routes>

                                    <Footer />
                                </div>
                            </>
                        </CartGlasses.Provider>
                    </OneGlasses.Provider>
                </AdminContext.Provider>
            </AuthContext.Provider>
        </ErrorBoundary>
    );
}


export default App;
