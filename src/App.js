import { Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { ClientSection } from "./components/ClientSection/ClientSection";
import { Contacts } from "./components/Contacts/Contacts";
import { Create } from "./components/Create/Create";
import { Footer } from "./components/Footer/Footer";
import { Glasses } from "./components/Glasses/Glasses";
import { Header } from "./components/Header/Header";
import { Shop } from "./components/Shop/Shop";
import { Login } from "./components/User/Login/Login";
import { Register } from "./components/User/Register/Register";


function App() {
    return (

        <>
            <Header />
            <div className="App">

                <Routes>
                    <Route path="/" element={<Banner />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/glasses" element={<Glasses />} />

                    <Route path="/shop" element={<Shop />} />

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
