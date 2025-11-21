import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex h-9 max-w-2xl flex-1">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 rounded-l border border-[var(--color-border)] bg-[var(--color-search)] px-1 py-1 text-base"
      />
      <button className="flex items-center space-x-1 rounded-r border border-[var(--color-border)] bg-[var(--color-button-bg)] px-2.5 hover:invert">
        <FaSearch />
        <span className="hidden lg:block">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
