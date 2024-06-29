import NavItem from "./NavItem";
import DropdownNavItem from "./DropdownNavItem";
import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h4 className="mx-2">STORE</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem title="Inicio" link="/" isActive={true} />
            <DropdownNavItem title="Hombre" href="/hombre" />
            <DropdownNavItem title="Mujer" href="/mujer" />
            <DropdownNavItem title="Niños" href="/ninos" />
            <DropdownNavItem title="Niñas" href="/ninas" />
            <NavItem
              title="Contactanos"
              link="/contactanos"
              isDisabled={true}
            />
          </ul>
          <SearchForm />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
