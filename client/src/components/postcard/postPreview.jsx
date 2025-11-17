import image from "../../assets/kurtkårejohnny.jpg";

function PostPreview() {
  return (
    <div className="flex-col sm:max-w-[50%] border border-t-0 border-[var(--color-divider)] px-3 pb-2 sm:mx-auto">
      <h1 className="pb-2">Title: Rookie mistakes in progress</h1>
      <img
        src={image}
        alt=""
        className="rounded-xl h-full w-full object-contain mx-auto"
      />
    </div>
  );
}

export default PostPreview;
