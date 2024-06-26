import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Image from "./components/Image";
import MiniBanner from "./components/minbaner";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="banner">
        <Image src="/images/Banner.png" alt="Banner" />
      </div>
      <div className="minbaner">
        <MiniBanner
          content={
            "ENVIOS GRATIS A TODA COLOMBIA POR COMPRAS MAYORES A $180.000"
          }
        />
      </div>
    </div>
  );
}

export default App;
