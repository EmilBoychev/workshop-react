import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { ClientSection } from "./components/ClientSection/ClientSection";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";
import { Glasses } from "./components/Glasses/Glasses";
import { Header } from "./components/Header/Header";
import { Shop } from "./components/Shop/Shop";

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

      <Footer />
    </div>

  );
}

export default App;
