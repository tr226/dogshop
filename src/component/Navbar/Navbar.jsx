import { Link } from "react-router-dom";
import navbar from "./navbar.css"
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/"> Home</Link>
        <Link to="/dogs"> Dogs</Link>
        <Link to="/checkout"> MyCart</Link>
      </nav>
    </>
  );
};

export default Navbar;
