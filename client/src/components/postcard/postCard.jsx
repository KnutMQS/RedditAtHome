import PostCardHeader from "./postCardHeader";
import PostCardContent from "./postCardContent";
import PostCardFooter from "./postCardFooter";

function PostCard() {
  return (
    <article className=" w-full max-w-2xl mx-auto border border-t-0 border-[var(--color-divider)] pt-0 px-4 py-3 overflow-hidden">
      <PostCardHeader />
      <PostCardContent />
      <PostCardFooter />
    </article>
  );
}

export default PostCard;
