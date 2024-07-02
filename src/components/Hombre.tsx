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
    { id: "flexCheck3", label: "XXL" },
    { id: "flexCheck4", label: "XL" },
    { id: "flexCheck4", label: "L" },
    { id: "flexCheck4", label: "M" },
    { id: "flexCheck4", label: "S" },
    { id: "flexCheck4", label: "XS" },
    // Agrega más checkboxes si es necesario
  ];

  const checkboxesPre = [
    { id: "flexCheck5", label: "Precio: más bajo primero" },
    { id: "flexCheck6", label: "Precio: más alto primero" },
    // Agrega más checkboxes si es necesario
  ];

  const Products = [
    { title: "Camisa de Cuadros", img: "./images/imgpro.png" },
    { title: "Chaqueta de Cuero", img: "./images/imgpro.png" },
    { title: "Pantalones Vaqueros", img: "./images/imgpro.png" },
    { title: "Pantalones Vaqueros", img: "./images/imgpro.png" },
    { title: "Pantalones Vaqueros", img: "./images/imgpro.png" },
    { title: "Pantalones Vaqueros", img: "./images/imgpro.png" },
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
          <div className="col-lg-2 col-md-2 col-sm-0 container-filters">
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
          <div className="col-lg-10 col-md-10 col-sm-12">
            <div className="row">
              {Products.map((Product, index) => (
                <div key={index} className="col-lg-4 col-md-9 col-sm-12">
                  <CardProduct
                    title={Product.title}
                    img={Product.img}
                  ></CardProduct>
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
