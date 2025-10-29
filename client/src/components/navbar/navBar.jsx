import AuthButtons from "./authButtons";
import NavLogo from "./navLogo";
import SearchBar from "./searchBar";
import HamburgerMenu from "../HamburgerMenu";

const Navbar = () => {
  return (
    <nav className=" bg-[var(--color-bg)] flex fixed top-0 z-50 border-b-2 w-full px-2 py-1 items-center justify-between">
      <NavLogo />
      <SearchBar />
      <AuthButtons />
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
