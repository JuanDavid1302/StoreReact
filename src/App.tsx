import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Image from "./components/Image";
import MiniBanner from "./components/minbaner";
import "./index.scss";
import CardGroup from "./components/CardGroup";
import Carousel from "./components/CarouselImg";

function App() {
  const cardsData = [
    {
      imgSrc: "./images/imggroup1.png",
      imgAlt: "Card 1",
      content: "Blusa",
    },
    {
      imgSrc: "./images/imggroup2.png",
      imgAlt: "Card 2",
      content: "Accesorios",
    },
    {
      imgSrc: "./images/imggroup3.png",
      imgAlt: "Card 3",
      content: "Undergroud",
    },
  ];

  const images = ["./images/carousel1.png", "./images/carousel2.png"];

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
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-12 p-4">
            <Carousel images={images} />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-12">
                <h2>TREND</h2>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 col-sm-12">
                <CardGroup cards={cardsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
