function MobileMenuContent({ isOpen }) {
  return (
    <div
      className={`border-border bg-bg absolute top-full right-0 z-50 mt-[-1px] min-w-48 border p-4 shadow-lg transition-all duration-100 ${
        isOpen
          ? "after:bg-bg pointer-events-auto -top-px scale-100 rounded-tl rounded-b opacity-100 after:absolute after:top-0 after:right-0 after:h-px after:w-9 after:content-['']"
          : "pointer-events-none top-full scale-95 rounded opacity-0"
      }`}
    >
      <div className="space-y-1.5">
        <button className="border-border bg-bg flex w-full flex-col rounded border px-3 py-2 text-sm">
          Login
        </button>
        <button className="border-border bg-bg flex w-full flex-col rounded border px-3 py-2 text-sm">
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
  );
}

export default MobileMenuContent;
