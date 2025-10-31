import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import MobileMenuContent from "./mobileMenuContent";

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
      <MobileMenuContent isOpen={isOpen} />
    </div>
  );
}
export default HamburgerMenu;
