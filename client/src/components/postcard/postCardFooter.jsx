import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaCommentDots,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function PostCardFooter() {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2 rounded-2xl border bg-[var(--color-button-bg)] px-2 py-0.5 hover:invert">
        <button>
          <FaArrowAltCircleUp />
        </button>
        <span className="pb-1">100</span>
        <button>
          <FaArrowAltCircleDown />
        </button>
      </div>
      <div className="rounded-2xl border bg-[var(--color-button-bg)] px-2 py-1 hover:invert">
        <Link to="/post/123">
          <button>
            <FaCommentDots />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCardFooter;
