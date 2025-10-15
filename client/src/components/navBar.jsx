import { FaSearch, FaUser, FaSignInAlt } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../assets/RAH.png";

const Navbar = () => {
  return (
    <nav className=" bg-[var(--color-bg)] flex fixed top-0 z-50 border-b-2 w-full px-2 py-1 items-center justify-between">
      <div className="flex-shrink-0">
        <a href="/" className="">
          <img
            src={logo}
            alt="RedditAtHome Logo"
            className="border rounded w-9 h-9 lg:w-10 lg:h-10 p-0 m-1"
          />
        </a>
      </div>

      <div className="flex flex-1 max-w-[60%] mx-2 sm:mx-4 h-9 lg:h-10">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 border rounded-l border-[var(--color-border)] px-2 sm:px-3 py-2 flex-1 text-sm sm:text-base"
        />
        <button className="border border-[var(--color-border)] bg-[var(--color-button-bg)] rounded-r px-2 sm:px-3 py-2 flex items-center space-x-1 sm:space-x-2">
          <FaSearch />
          <span className="hidden lg:block">Search</span>
        </button>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2">
        <button className="hidden lg:flex items-center border border-[var(--color-border)] bg-[var(--color-button-bg)] rounded space-x-1 sm:space-x-2 px-2 sm:px-3 py-2">
          <FaUser />
          <span>Sign In</span>
        </button>
        <button className="hidden lg:flex items-center border border-[var(--color-border)] bg-[var(--color-button-bg)] rounded space-x-1 sm:space-x-2 px-2 sm:px-3 py-2">
          <FaSignInAlt />
          <span>Register</span>
        </button>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
