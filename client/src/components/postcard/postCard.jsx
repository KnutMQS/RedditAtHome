import PostCardHeader from "./postCardHeader";
import PostCardContent from "./postCardContent";
import PostCardFooter from "./postCardFooter";

function PostCard() {
  return (
    <article className="border-divider mx-auto w-full max-w-2xl overflow-hidden border border-t-0 px-4 py-3 pt-0">
      <PostCardHeader />
      <PostCardContent />
      <PostCardFooter />
    </article>
  );
}

export default PostCard;
