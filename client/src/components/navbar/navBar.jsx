import AuthButtons from "./authButtons";
import NavLogo from "./navLogo";
import SearchBar from "./searchBar";
import HamburgerMenu from "../hamburgermenu/hamburgerMenu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b-2 border-[var(--color-divider)] bg-[var(--color-bg)] px-2 py-2">
      <NavLogo />
      <SearchBar />
      <AuthButtons />
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
