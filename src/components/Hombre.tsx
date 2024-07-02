import Collapse from "./FiltersCollapse";
import CardProduct from "./CardProduct";

const Hombre = () => {
  const checkboxesCat = [
    { id: "flexCheck1", label: "Busos" },
    { id: "flexCheck2", label: "Pantalones" },
    { id: "flexCheck3", label: "Zapatos" },
    { id: "flexCheck4", label: "Accesorios" },
    { id: "flexCheck5", label: "Pantalonetas" },
    { id: "flexCheck6", label: "Camisas" },
    // Agrega más checkboxes si es necesario
  ];

  const checkboxesTa = [
    { id: "flexCheck7", label: "XXL" },
    { id: "flexCheck8", label: "XL" },
    { id: "flexCheck9", label: "L" },
    { id: "flexCheck10", label: "M" },
    { id: "flexCheck11", label: "S" },
    { id: "flexCheck12", label: "XS" },
    // Agrega más checkboxes si es necesario
  ];

  const checkboxesPre = [
    { id: "flexCheck13", label: "Precio: más bajo primero" },
    { id: "flexCheck14", label: "Precio: más alto primero" },
    // Agrega más checkboxes si es necesario
  ];

  const Products = [
    {
      title: "Camisa de Cuadros",
      img: "./images/imgpro.png",
      price: "$100.000",
    },
    {
      title: "Chaqueta de Cuero",
      img: "./images/imgpro.png",
      price: "$120.000",
    },
    {
      title: "Pantalones Vaqueros",
      img: "./images/imgpro.png",
      price: "$200.000",
    },
    {
      title: "Pantalones Vaqueros",
      img: "./images/imgpro.png",
      price: "$110.000",
    },
    {
      title: "Pantalones Vaqueros",
      img: "./images/imgpro.png",
      price: "$90.000",
    },
    {
      title: "Pantalones Vaqueros",
      img: "./images/imgpro.png",
      price: "$40.000",
    },
  ];

  return (
    <div className="Hombre">
      <div className="container-fluid py-3 px-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Inicio</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Hombre
            </li>
          </ol>
        </nav>
      </div>
      <div className="container-fluid"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-0 container-filters">
            <Collapse
              name="Categoria"
              checkboxes={checkboxesCat}
              idCollapse="CollapseCat"
            />
            <Collapse
              name="Talla"
              checkboxes={checkboxesTa}
              idCollapse="CollapseTa"
            />
            <Collapse
              name="Precio"
              checkboxes={checkboxesPre}
              idCollapse="CollapsePre"
            />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-12">
            <div className="row">
              {Products.map((Product, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-12 mb-3 d-flex justify-content-center"
                >
                  <a href={`#/product/${index}`} className="card-link">
                    <CardProduct
                      title={Product.title}
                      img={Product.img}
                      price={Product.price}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hombre;
