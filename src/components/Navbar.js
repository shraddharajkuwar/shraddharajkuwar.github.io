import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" position="sticky" elevation={0}>
      <div className="nav-left">
        <Link to="/">
          <img
            src="././images/logo.svg"
            alt="logo"
            className="Logo-Img"
          /></Link>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/#case-studies">Work</Link>
        <Link to="/about">About</Link>
         <Link to="mailto:rajkuwarshraddha03@gmail.com">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
