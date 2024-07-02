const Footer = () => {
  // Función para abrir enlaces en una nueva pestaña
  const abrirEnOtraPestana = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="footer custom-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <img
              src="./images/logo.png"
              width="250"
              height="70"
              className="d-inline-block align-center"
              alt="Logo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 p-4">
            <ul className="list-group">
              <li className="text-white my-2">
                <img
                  src="./icons/mail.png"
                  width="20"
                  height="20"
                  className="d-inline-block align-center"
                  alt="Logo"
                />{" "}
                Correo Electronico
              </li>
              <li className="text-white my-2">
                <img
                  src="./icons/phone.png"
                  width="20"
                  height="20"
                  className="d-inline-block align-center"
                  alt="Logo"
                />{" "}
                Telefono
              </li>
              <li className="text-white my-2">
                <img
                  src="./icons/ubi.png"
                  width="20"
                  height="20"
                  className="d-inline-block align-center"
                  alt="Logo"
                />{" "}
                Dirección
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="container">
              <a
                href=""
                onClick={() =>
                  abrirEnOtraPestana("https://www.whatsapp.com/?lang=es_LA")
                }
              >
                <img
                  src="./icons/whatsapp.png"
                  width="20"
                  height="20"
                  className="d-inline-block align-center"
                  alt="Logo"
                />
              </a>
              <a
                href=""
                onClick={() =>
                  abrirEnOtraPestana("https://www.facebook.com/?locale=es_LA")
                }
              >
                <img
                  src="./icons/facebook.png"
                  width="20"
                  height="20"
                  className="d-inline-block align-center"
                  alt="Logo"
                />
              </a>
              <a
                href=""
                onClick={() => abrirEnOtraPestana("https://www.instagram.com")}
              >
                <img
                  src="./icons/instagram.png"
                  width="20"
                  height="20"
                  className="d-inline-block align-center"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <span className="text-white">
              © 2024 Store. Todos los derechos reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
