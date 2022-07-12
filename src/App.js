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

    <div className="App">
      <Header />

      <Banner />

      <About />

      <Glasses />

      <Shop />

      <ClientSection />

      <Contacts />

      <Create />

      <Register />

      <Login />

      <Footer />
    </div>

  );
}

export default App;
