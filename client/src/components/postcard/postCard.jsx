import PostCardHeader from "./postCardHeader";
import PostCardContent from "./postCardContent";
import PostCardFooter from "./postCardFooter";

function PostCard() {
  return (
    <article className="mx-auto w-full max-w-2xl overflow-hidden border border-t-0 border-[var(--color-divider)] px-4 py-3 pt-0">
      <PostCardHeader />
      <PostCardContent />
      <PostCardFooter />
    </article>
  );
}

export default PostCard;
