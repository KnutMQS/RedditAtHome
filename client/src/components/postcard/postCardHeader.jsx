function PostCardHeader() {
  return (
    <div className="flex items-center justify-between py-2 pr-3">
      <span>Username</span>
      <time className="justify-end-safe text-xs font-light opacity-60">
        14hr. ago
      </time>
    </div>
  );
}

export default PostCardHeader;
