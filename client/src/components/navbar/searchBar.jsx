import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex flex-1 max-w-[40%] mx-2">
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-700 border rounded-l border-[var(--color-border)] px-1 sm:px-2 py-1 flex-1 text-sm sm:text-base"
      />
      <button className="border border-[var(--color-border)] bg-[var(--color-button-bg)] rounded-r px-1 sm:px-2 py-1 flex items-center space-x-1 sm:space-x-2">
        <FaSearch />
        <span className="hidden lg:block">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
