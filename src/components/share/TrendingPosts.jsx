export default function TrendingPosts({ posts }) {
  // Filter and sort top posts
  const topPosts = posts
    .filter((p) => p.upvotes >= 10 && !p.reported) // Only non-reported, high-upvote posts
    .sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div className="max-w-2xl mx-auto mb-6">
      <h3 className="text-xl font-bold mb-2">🔥 Trending Posts</h3>

      {topPosts.length === 0 ? (
        <p className="text-gray-500 italic">No trending posts right now. 🚀</p>
      ) : (
        <div className="space-y-2">
          {topPosts.map((post) => (
            <div
              key={post.id}
              className="p-3 bg-yellow-100 rounded shadow hover:shadow-md transition"
            >
              <p className="font-semibold text-indigo-700">{post.userName}</p>
              <p className="mt-1">{post.text}</p>
              <div className="text-sm text-gray-600 mt-1 flex items-center space-x-3">
                <span>👍 {post.upvotes} upvotes</span>
                <span className="font-semibold text-indigo-600">
                  #{post.tag}
                </span>
                <span>Mood: {post.mood}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
