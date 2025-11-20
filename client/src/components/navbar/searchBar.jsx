import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex max-w-[40%] flex-1">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 rounded-l border border-[var(--color-border)] bg-[var(--color-search)] px-1 py-1 text-sm sm:px-2 sm:text-base"
      />
      <button className="flex items-center space-x-1 rounded-r border border-[var(--color-border)] bg-[var(--color-button-bg)] px-1 py-1 sm:space-x-2 sm:px-2">
        <FaSearch />
        <span className="hidden lg:block">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
