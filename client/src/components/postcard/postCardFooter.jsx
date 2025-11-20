import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaCommentDots,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function PostCardFooter() {
  return (
    <div className="flex space-x-3 items-center">
      <div className="flex items-center space-x-2 border rounded-2xl px-2 py-0.5 bg-[var(--color-button-bg)]">
        <button>
          <FaArrowAltCircleUp />
        </button>
        <span className="pb-1">100</span>
        <button>
          <FaArrowAltCircleDown />
        </button>
      </div>
      <div className="border rounded-2xl px-2 py-1 bg-[var(--color-button-bg)]">
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
