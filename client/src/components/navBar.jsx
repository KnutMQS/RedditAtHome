import { FaSearch, FaUser, FaSignInAlt } from "react-icons/fa";
import HamburgerMenu from "./hamburgerMenu";
import logo from "../assets/RAH.png";

const NavBar = () => {
  return (
    <nav className=" bg-[var(--color-bg)] flex fixed top-0 border-b-2">
      <div className="flex justify-start">
        <a href="/" className="">
          <img src={logo} alt="RedditAtHome Logo" />
        </a>
      </div>
      <div>
        <div>
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
            <span>Search</span>
          </button>
        </div>
      </div>
      <div>
        <button className="hidden lg:flex">
          <span>Login</span>
          <FaUser />
        </button>
        <button className="hidden lg:flex">
          <FaSignInAlt />
          <span>Sign up</span>
        </button>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;
