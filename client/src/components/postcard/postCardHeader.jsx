function PostCardHeader() {
  return (
    <>
      <div className="flex justify-between items-center sm:mx-auto px-5 sm:max-w-[50%] p-3">
        <span>Username</span>
        <time className="font-light text-xs opacity-60">14hr. ago</time>
      </div>
    </>
  );
}

export default PostCardHeader;
