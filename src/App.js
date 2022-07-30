import { Routes, Route, useNavigate, } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from './components/Contexts/AuthContext'

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
import { Logout } from "./components/Logout/Logout";


function App() {
    const navigate = useNavigate()
    const [userMessage, setUserMessage] = useState();
    const [auth, setAuth] = useState({});
    useEffect(() => {
        setUserMessage(true)
    }, [userMessage])
    const onCloseMessage = () => {
        setUserMessage(false);
        navigate('/')
    }

    const loginHandler = (authData) => {
        setAuth(authData);
    }


    return (
        <AuthContext.Provider value={{ auth, loginHandler }} >

            <>
                <Header />
                <div className="App">

                    <Routes>
                        <Route path="/" element={<> <Banner /> <Glasses /> </>} />

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

                    </Routes>

                    <Footer />
                </div>
            </>
        </AuthContext.Provider>
    );
}


export default App;
