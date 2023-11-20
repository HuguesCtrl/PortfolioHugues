import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Error 404</h1>
      <NavLink to="/">Revenir à l'accueil</NavLink>
    </div>
  );
}
export default Error;
