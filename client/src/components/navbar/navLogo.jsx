import logo from "../../assets/RAH.png";

const NavLogo = () => {
  return (
    <div className="mr-1 flex-shrink-0">
      <a href="/" className="">
        <img
          src={logo}
          alt="RedditAtHome Logo"
          className="m-1 h-9 w-9 rounded border p-0 lg:h-10 lg:w-10"
        />
      </a>
    </div>
  );
};

export default NavLogo;
