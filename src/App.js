import { Routes, Route, useNavigate, } from "react-router-dom";
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
import { useState } from "react";
import { Message } from "./components/Messages/Messages";


function App() {
    const navigate = useNavigate()
    const [userMessage, setUserMessage] = useState(true);

    const onCloseMessage = () => {
        setUserMessage(false);
        navigate('/')
    }

    return (
        <AuthContext.Provider value={true} >

            <>
                <Header />
                <div className="App">

                    <Routes>
                        <Route path="/" element={<Banner />} />

                        <Route path="/about" element={<About />} />

                        <Route path="/glasses" element={<Glasses />} />

                        <Route path="/details/:glassesId" element={<Details />} />

                        <Route path="/clients" element={<ClientSection />} />

                        <Route path="/contact" element={<Contacts />} />

                        <Route path="/create" element={<Create />} />

                        <Route path="/register" element={<Register />} />

                        <Route path="/login" element={<Login />} />

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
