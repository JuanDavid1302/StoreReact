interface NavItemProps {
  title: string;
  link: string;
  isActive?: boolean;
  isDisabled?: boolean; // Debe estar definido aquí
}

const NavItem: React.FC<NavItemProps> = ({
  title,
  link,
  isActive = false,
  isDisabled = false,
}) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${isActive ? "active" : ""}`}
        href={link}
        aria-current={isActive ? "page" : undefined}
        disabled={isDisabled}
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
