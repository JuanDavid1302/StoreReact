import Collapse from "./FiltersCollapse";

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
    { id: "flexCheck3", label: "XL" },
    { id: "flexCheck4", label: "L" },
    // Agrega más checkboxes si es necesario
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
          <div className="col-lg-3 col-md-3 col-sm-0 container-filters">
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
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Hombre;
