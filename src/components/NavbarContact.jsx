import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>accueil</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
