import { defaultTags, defaultMoods } from "./Share";

export default function PostInput({
  input,
  setInput,
  tag,
  setTag,
  mood,
  setMood,
  handleSubmit,
  warning,
}) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col space-y-4 mb-6">
      <textarea
        rows={4}
        className="p-4 rounded border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Share how you're feeling today..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex space-x-2">
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {defaultTags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {defaultMoods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      {warning && <p className="text-red-600">{warning}</p>}
      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
      >
        Post
      </button>
    </div>
  );
}
