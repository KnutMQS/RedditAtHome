import { FaSearch, FaUser, FaSignInAlt } from "react-icons/fa";
import "./navBar.css";
import HamburgerMenu from "./hamburgerMenu";
import logo from "../assets/RAH.png";

const NavBar = () => {
  return (
    <nav className="bg-white dark:bg-gray-dark flex fixed top-0 border-b-2">
      <div className="flex justify-start">
        <a href="/" className="">
          <img src={logo} alt="RedditAtHome Logo" className="logo-image" />
        </a>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">
            <FaSearch />
            <span className="button-text">Search</span>
          </button>
        </div>
      </div>
      <div className="">
        <button className="hidden lg:flex">
          <span className="login-text">Login</span>
          <FaUser />
        </button>
        <button className="hidden lg:flex">
          <FaSignInAlt />
          <span className="signup-text">Sign up</span>
        </button>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;
