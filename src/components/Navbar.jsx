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
          <li className="nav-portfolio">
            portfolio
            <ul className="nav-projects">
              <NavLink
                to="/projet-1"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Booki</li>
              </NavLink>
              <NavLink
                to="/projet-2"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Sophie Bluel</li>
              </NavLink>
              <NavLink
                to="/projet-3"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Kasa</li>
              </NavLink>
              <NavLink
                to="/projet-4"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Mon Vieux Grimoire</li>
              </NavLink>
              <NavLink
                to="/projet-5"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Salle de Boxe</li>
              </NavLink>
              <NavLink
                to="/projet-6"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Agence Héraclès</li>
              </NavLink>
            </ul>
          </li>
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
