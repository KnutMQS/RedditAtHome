import logo from "../../assets/RAH.png";

const NavLogo = () => {
  return (
    <div className="flex-shrink-0">
      <a href="/" className="">
        <img
          src={logo}
          alt="RedditAtHome Logo"
          className="border rounded w-9 h-9 lg:w-10 lg:h-10 p-0 m-1"
        />
      </a>
    </div>
  );
};

export default NavLogo;
