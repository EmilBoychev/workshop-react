import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { ClientSection } from "./components/ClientSection/ClientSection";
import { Contacts } from "./components/Contacts/Contacts";
import { Create } from "./components/Create/Create";
import { Footer } from "./components/Footer/Footer";
import { Glasses } from "./components/Glasses/Glasses";
import { Header } from "./components/Header/Header";
import { Details } from "./components/Shop/Details";
import { Login } from "./components/User/Login/Login";
import { Register } from "./components/User/Register/Register";


function App() {

    // const navigate = useNavigate()
    // const [glasses, setGlasses] = useState({})
    // const glassesDetails = (glassesId) => {
    //     setGlasses(glassesId)

    //     navigate(`/details/${glassesId}`);
    //     return;

    // }

    // const oneGlass = () => {
    //     return
    // }



    return (

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

                </Routes>

                <Footer />
            </div>
        </>



    );
}

export default App;
