import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`visible lg:hidden relative scale-100 ease-in-out ${
        isOpen ? "open" : ""
      }`}
    >
      <button
        className="border border-[var(--color-border)] rounded bg-[var(--color-button-bg)] cursor-pointer flex items-center justify-center w-9 h-9 p-0"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiXMark size={20} /> : <HiBars3 size={20} />}
      </button>
      <div
        className={`absolute top-full right-0 bg-[var(--color-bg)] border border-[var(--color-border)] rounded shadow-lg z-50 min-w-48 p-4 transition-all duration-200 ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="space-y-1.5">
          <button className="w-full text-sm flex flex-col bg-[var(--color-button-bg)] border border-[var(--color-border)] rounded px-3 py-2">
            Login
          </button>
          <button className="w-full text-sm flex flex-col bg-[var(--color-button-bg)] border border-[var(--color-border)] rounded px-3 py-2">
            Sign Up
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
    </div>
  );
}
export default HamburgerMenu;
