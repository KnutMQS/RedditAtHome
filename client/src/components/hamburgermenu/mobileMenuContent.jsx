import { FaUser, FaSignInAlt } from "react-icons/fa";

function MobileMenuContent({ isOpen }) {
  return (
    <div
      className={`border-border bg-bg absolute top-full right-0 z-50 mt-[-1px] mr-1 min-w-48 border p-4 shadow-lg transition-all duration-100 ${
        isOpen
          ? "after:bg-bg pointer-events-auto -top-px scale-100 rounded-tl rounded-b opacity-100 after:absolute after:top-0 after:right-0 after:h-px after:w-9 after:content-['']"
          : "pointer-events-none top-full scale-95 rounded opacity-0"
      }`}
    >
      <div className="grid items-center justify-center space-y-1.5">
        <button className="border-border bg-button-bg flex w-31 items-center rounded border px-3 py-2">
          <FaUser />
          <span className="mx-auto">Sign In</span>
        </button>
        <button className="border-border bg-button-bg flex w-31 items-center rounded border px-3 py-2">
          <FaSignInAlt />
          <span className="mx-auto">Register</span>
        </button>

        <div className="flex flex-col items-center">
          <ul className="space-y-2">
            <li>
              <a className="block" href="#">
                Placeholder
              </a>
            </li>
            <li>
              <a className="block" href="#">
                Placeholder
              </a>
            </li>
            <li>
              <a className="block" href="#">
                Placeholder
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenuContent;
