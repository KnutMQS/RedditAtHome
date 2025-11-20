import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import MobileMenuContent from "./mobileMenuContent";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`visible relative scale-100 ease-in-out lg:hidden ${
        isOpen ? "open" : ""
      }`}
    >
      <button
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-[var(--color-border)] bg-[var(--color-button-bg)] p-0"
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
