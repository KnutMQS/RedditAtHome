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
        className={`border-border relative z-51 mr-1 ml-2 flex h-9 w-9 cursor-pointer items-center justify-center border p-0 ${isOpen ? " bg-bg rounded-t border-b-0 " : "bg-bg rounded"}`}
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
