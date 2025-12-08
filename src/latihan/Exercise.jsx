import PostCard from "./PostCard";
import { userPost } from "./UserPost";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-special-red-02">Post Cards</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-5 mx-auto">
        {userPost.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
