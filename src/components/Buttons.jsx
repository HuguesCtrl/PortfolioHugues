import { NavLink } from "react-router-dom";

function Buttons({ left, right }) {
  return (
    <div className="scroll-bottom">
      {left && (
        <NavLink to={left} className="left hover">
          <span>&#10092;</span>
        </NavLink>
      )}
      {right && (
        <NavLink to={right} className="right hover">
          <span>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
}
export default Buttons;
