const Sidebar = () => {
  return (
    <nav className="fixed top-16 px-4 py-1 bg-[var(--color-bg)] flex flex-col space-y-2 border-b border-r border-[var(--color-border)]">
      <div className="border-b-2 pb-3">
        <ul className="space-y-3">
          <li>
            <a href="/">Placeholder</a>
          </li>
          <li>
            <a href="/">Placeholder</a>
          </li>
          <li>
            <a href="/">Placeholder</a>
          </li>
        </ul>
      </div>
      <div className="pb-3">
        <ul className="space-y-3">
          <li>
            <a href="/">Placeholder</a>
          </li>
          <li>
            <a href="/">Placeholder</a>
          </li>
          <li>
            <a href="/">Placeholder</a>
          </li>
          <li>
            <a href="/">Placeholder</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
