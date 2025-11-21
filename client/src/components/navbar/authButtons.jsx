import { FaUser, FaSignInAlt } from "react-icons/fa";

const AuthButtons = () => {
  return (
    <div className="hidden items-center lg:flex lg:space-x-2 lg:px-2">
      <button className="flex items-center space-x-1 rounded border border-[var(--color-border)] bg-[var(--color-button-bg)] px-1 py-1 hover:invert">
        <FaUser />
        <span>Sign In</span>
      </button>
      <button className="flex items-center space-x-1 rounded border border-[var(--color-border)] bg-[var(--color-button-bg)] px-1 py-1 hover:invert">
        <FaSignInAlt />
        <span>Register</span>
      </button>
    </div>
  );
};

export default AuthButtons;
