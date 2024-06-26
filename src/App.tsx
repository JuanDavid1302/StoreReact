import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Image from "./components/Image";
import MiniBanner from "./components/minbaner";
import "./index.scss";
import CardGroup from "./components/CardGroup";

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
      <div className="CardGroup">
        <CardGroup
          img1="/images/imggroup1.png"
          alt1="img1"
          content1="Blusa Campirana"
          img2="/images/imggroup2.png"
          alt2="img2"
          content2="Dia de Playa"
          img3="/images/imggroup3.png"
          alt3="img3"
          content3="Underground"
        />
      </div>
    </div>
  );
}

export default App;
