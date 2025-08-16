import { useState, useEffect } from "react";

export default function AdminPanel() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const markSafe = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, reported: false } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      {posts.filter((p) => p.reported).length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="text-4xl mb-2">✅</div>
          <h2 className="text-lg font-semibold">No Reported Posts 🎉</h2>
          <p className="text-gray-500 text-sm">
            Everything looks clean and safe for now.
          </p>
        </div>
      ) : (
        posts
          .filter((p) => p.reported)
          .map((post) => (
            <div
              key={post.id}
              className="border p-3 rounded mb-3 bg-gray-100 shadow"
            >
              <p className="font-semibold">{post.text}</p>
              <p className="text-sm text-gray-500">👍 {post.upvotes} upvotes</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => markSafe(post.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Mark Safe
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
      )}
    </div>
  );
}
