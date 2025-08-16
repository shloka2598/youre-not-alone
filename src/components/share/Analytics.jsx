export default function Analytics({ posts }) {
  const totalUpvotes = posts.reduce((sum, p) => sum + p.upvotes, 0);
  const tagCounts = posts.reduce((acc, p) => {
    acc[p.tag] = (acc[p.tag] || 0) + 1;
    return acc;
  }, {});
  const moodCounts = posts.reduce((acc, p) => {
    acc[p.mood] = (acc[p.mood] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="max-w-2xl mx-auto text-center mb-6 text-gray-600 space-y-1">
      <p>Total posts: {posts.length}</p>
      <p>Total upvotes: {totalUpvotes}</p>
      <p>
        Most popular tag:{" "}
        {Object.keys(tagCounts).length
          ? Object.keys(tagCounts).reduce((a, b) =>
              tagCounts[a] > tagCounts[b] ? a : b
            )
          : "N/A"}
      </p>
      <p>
        Mood distribution:{" "}
        {Object.entries(moodCounts)
          .map(([m, c]) => `${m}: ${c}`)
          .join(", ") || "None"}
      </p>
    </div>
  );
}
