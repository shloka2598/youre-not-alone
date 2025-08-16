export default function PostFilter({
  search,
  setSearch,
  tagFilter,
  setTagFilter,
  moodFilter,
  setMoodFilter,
  tags,
  moods,
}) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <select
        value={tagFilter}
        onChange={(e) => setTagFilter(e.target.value)}
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="All">All Tags</option>
        {tags.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <select
        value={moodFilter}
        onChange={(e) => setMoodFilter(e.target.value)}
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="All">All Moods</option>
        {moods.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
}
