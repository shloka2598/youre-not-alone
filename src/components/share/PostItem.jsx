export default function PostItem({
  post,
  handleUpvote,
  commentInput,
  handleCommentChange,
  handleCommentSubmit,
}) {
  return (
    <div
      className={`p-4 bg-white rounded shadow flex flex-col space-y-2 transition hover:shadow-lg ${
        post.upvotes >= 10 ? "border-2 border-indigo-500" : ""
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p>{post.text}</p>
          <div className="text-sm text-gray-500 space-x-2">
            <span>#{post.tag}</span>
            <span>Mood: {post.mood}</span>
          </div>
        </div>
        <button
          onClick={() => handleUpvote(post.id)}
          className="ml-4 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
        >
          👍 {post.upvotes}
        </button>
      </div>

      <div className="mt-2 space-y-2">
        {post.comments.map((comment) => (
          <p key={comment.id} className="text-sm bg-gray-100 p-2 rounded">
            💬 {comment.text}
          </p>
        ))}
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => handleCommentChange(post.id, e.target.value)}
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
    </div>
  );
}
