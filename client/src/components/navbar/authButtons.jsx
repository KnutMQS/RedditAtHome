import { FaUser, FaSignInAlt } from "react-icons/fa";

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2">
      <button className="hidden lg:flex items-center border border-[var(--color-border)] bg-[var(--color-button-bg)] rounded space-x-1 sm:space-x-2 px-2 sm:px-3 py-2">
        <FaUser />
        <span>Sign In</span>
      </button>
      <button className="hidden lg:flex items-center border border-[var(--color-border)] bg-[var(--color-button-bg)] rounded space-x-1 sm:space-x-2 px-2 sm:px-3 py-2">
        <FaSignInAlt />
        <span>Register</span>
      </button>
    </div>
  );
};

export default AuthButtons;
