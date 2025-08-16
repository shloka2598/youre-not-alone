export default function PostList({
  posts,
  handleUpvote,
  handleReport,
  commentInputs,
  handleCommentChange,
  handleCommentSubmit,
  timeAgo,
  recentComments,
}) {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {posts.length === 0 && (
        <p className="text-center text-gray-500">
          No posts yet. Be the first to share! 🌟
        </p>
      )}

      {posts.map((post) => {
        const isReported = !!post.reported; // <-- use the boolean from Share.jsx

        return (
          <div
            key={post.id}
            className={`p-4 bg-white rounded shadow flex flex-col space-y-2 transition hover:shadow-lg ${
              post.upvotes >= 10 ? "border-2 border-indigo-500" : ""
            } ${isReported ? "opacity-50" : ""}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-indigo-600">{post.userName}</p>

                {isReported ? (
                  <p className="italic text-gray-500">
                    🚨 This post has been reported and is under review.
                  </p>
                ) : (
                  <p>{post.text}</p>
                )}

                <div className="text-sm text-gray-500 space-x-2">
                  <span className="font-semibold">#{post.tag}</span>
                  <span>Mood: {post.mood}</span>
                  <span>{timeAgo(post.createdAt)}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => !isReported && handleUpvote(post.id)}
                  disabled={isReported}
                  className={`ml-4 px-3 py-1 rounded transition ${
                    isReported
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  👍 {post.upvotes}
                </button>

                <button
                  onClick={() => handleReport(post.id)}
                  disabled={isReported}
                  className={`px-2 py-1 rounded transition ${
                    isReported
                      ? "bg-red-100 text-red-400 cursor-not-allowed"
                      : "bg-red-200 text-red-800 hover:bg-red-300"
                  }`}
                >
                  🚩 Report
                </button>
              </div>
            </div>

            {/* Comments */}
            {!isReported ? (
              <div className="mt-2 space-y-2">
                {post.comments.map((comment) => (
                  <p
                    key={comment.id}
                    className={`text-sm bg-gray-100 p-2 rounded transition-all ${
                      recentComments.includes(comment.id)
                        ? "bg-yellow-100 animate-pulse"
                        : ""
                    }`}
                  >
                    💬 {comment.text}{" "}
                    <span className="text-gray-400 text-xs ml-2">
                      {timeAgo(comment.createdAt)}
                    </span>
                  </p>
                ))}

                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentInputs[post.id] || ""}
                    onChange={(e) =>
                      handleCommentChange(post.id, e.target.value)
                    }
                    className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button
                    onClick={() => handleCommentSubmit(post.id)}
                    className="bg-indigo-600 text-white px-3 rounded hover:bg-indigo-700 transition"
                  >
                    Comment
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 italic">
                Comments hidden until review.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
