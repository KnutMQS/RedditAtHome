function PostCardHeader() {
  return (
    <div className="flex justify-between items-center border border-t-0 border-b-0 border-[var(--color-divider)] sm:mx-auto sm:max-w-[50%] px-3 py-2 ">
      <span>Username</span>
      <time className="font-light text-xs opacity-60">14hr. ago</time>
    </div>
  );
}

export default PostCardHeader;
