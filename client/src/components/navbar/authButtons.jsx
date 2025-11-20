import { FaUser, FaSignInAlt } from "react-icons/fa";

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-1 px-1 py-1 sm:space-x-2 sm:px-3">
      <button className="hidden items-center space-x-1 rounded border border-[var(--color-border)] bg-[var(--color-button-bg)] px-1 py-1 sm:space-x-2 sm:px-2 lg:flex">
        <FaUser />
        <span>Sign In</span>
      </button>
      <button className="hidden items-center space-x-1 rounded border border-[var(--color-border)] bg-[var(--color-button-bg)] px-1 py-1 sm:space-x-2 sm:px-2 lg:flex">
        <FaSignInAlt />
        <span>Register</span>
      </button>
    </div>
  );
};

export default AuthButtons;
