import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaCommentDots,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function PostCardFooter() {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-button-bg flex items-center space-x-2 rounded-2xl border px-2 py-0.5 hover:invert">
        <button>
          <FaArrowAltCircleUp />
        </button>
        <span className="pb-1">100</span>
        <button>
          <FaArrowAltCircleDown />
        </button>
      </div>
      <div className="bg-bg rounded-2xl border px-2 py-1 hover:invert">
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
