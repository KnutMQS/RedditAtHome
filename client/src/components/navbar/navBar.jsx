import AuthButtons from "./authButtons";
import NavLogo from "./navLogo";
import SearchBar from "./searchBar";
import HamburgerMenu from "../hamburgermenu/hamburgerMenu";

const Navbar = () => {
  return (
    <nav className=" bg-[var(--color-bg)] flex sticky top-0 z-50 border-b-2 border-[var(--color-border)] w-full px-2 py-2 items-center justify-between">
      <NavLogo />
      <SearchBar />
      <AuthButtons />
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
