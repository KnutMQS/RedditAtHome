function PostCardHeader() {
  return (
    <div className="flex justify-between items-center pr-3 py-2 ">
      <span>Username</span>
      <time className=" justify-end-safe font-light text-xs opacity-60">
        14hr. ago
      </time>
    </div>
  );
}

export default PostCardHeader;
