import image from "../../assets/kurtkårejohnny.jpg";
import { Link } from "react-router-dom";

function PostCardContent() {
  return (
    <Link to="/post/123">
      <h1 className="pb-2">Title: Rookie mistakes in progress</h1>
      <img
        src={image}
        alt=""
        className="rounded-xl h-full w-full object-contain mb-2 mx-auto"
      />
    </Link>
  );
}

export default PostCardContent;
