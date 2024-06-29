import React, { useState } from "react";

interface DropdownNavItemProps {
  title: string;
  href: string;
}

const DropdownNavItem: React.FC<DropdownNavItemProps> = ({ title, href }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <li
      className="nav-item dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="nav-link dropdown-toggle"
        href={href}
        role="button"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {title}
      </a>
      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        <li>
          <a className="dropdown-item" href="#">
            Ropa
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Accesorios
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </li>
  );
};

export default DropdownNavItem;
