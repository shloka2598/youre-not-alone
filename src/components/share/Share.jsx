import { useState, useEffect } from "react";
import PostFilter from "./PostFilter";
import PostList from "./PostList";
import TrendingPosts from "./TrendingPosts";
import { timeAgo } from "../utils/timeAgo";

const bannedWords = [
  "fuck",
  "shit",
  "bitch",
  "asshole",
  "dick",
  "piss",
  "damn",
  "bastard",
  "crap",
  "pussy",
  "penis",
  "slut",
  "whore",
];

const defaultTags = [
  "General",
  "Stress",
  "School",
  "Anxiety",
  "Friendship",
  "Family",
];

const defaultMoods = [
  "Neutral",
  "Happy",
  "Sad",
  "Anxious",
  "Angry",
  "Confused",
];

export default function Share() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState(defaultTags[0]);
  const [mood, setMood] = useState(defaultMoods[0]);
  const [sortBy, setSortBy] = useState("newest");
  const [warning, setWarning] = useState("");
  const [commentInputs, setCommentInputs] = useState({});
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("All");
  const [moodFilter, setMoodFilter] = useState("All");
  const [tick, setTick] = useState(0);
  const [recentComments, setRecentComments] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      try {
        setPosts(JSON.parse(savedPosts));
      } catch {
        setPosts([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    let name = localStorage.getItem("userName");
    if (!name) {
      const adjectives = ["Blue", "Happy", "Silent", "Quick"];
      const animals = ["Tiger", "Elephant", "Fox", "Owl"];
      name = `${adjectives[Math.floor(Math.random() * adjectives.length)]}${
        animals[Math.floor(Math.random() * animals.length)]
      }${Math.floor(Math.random() * 100)}`;
      localStorage.setItem("userName", name);
    }
    setUserName(name);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  const filterContent = (text) => {
    let filtered = text;
    let flagCount = 0;
    bannedWords.forEach((word) => {
      const regex = new RegExp(word, "gi");
      if (regex.test(filtered)) flagCount++;
      filtered = filtered.replace(regex, "***");
    });
    return { filtered, flagCount };
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    const { filtered, flagCount } = filterContent(input);
    if (flagCount >= 2) {
      setWarning("Your post contains inappropriate content. Please revise.");
      return;
    }
    setWarning("");

    setPosts((prev) => [
      {
        id: Date.now(),
        text: filtered,
        upvotes: 0,
        tag,
        mood,
        userName,
        comments: [],
        createdAt: Date.now(),
        reported: false,
      },
      ...prev,
    ]);
    setInput("");
    setTag(defaultTags[0]);
    setMood(defaultMoods[0]);
  };

  const handleUpvote = (id) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p))
    );
  };

  const handleCommentChange = (id, text) => {
    setCommentInputs((prev) => ({ ...prev, [id]: text }));
  };

  const handleCommentSubmit = (id) => {
    const text = commentInputs[id]?.trim();
    if (!text) return;
    const { filtered } = filterContent(text);

    const newComment = {
      id: Date.now(),
      text: filtered,
      createdAt: Date.now(),
    };

    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, comments: [...p.comments, newComment] } : p
      )
    );

    setRecentComments((prev) => [...prev, newComment.id]);

    setTimeout(() => {
      setRecentComments((prev) => prev.filter((cId) => cId !== newComment.id));
    }, 3000);

    setCommentInputs((prev) => ({ ...prev, [id]: "" }));
  };

  const handleReport = (id) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, reported: true } : p))
    );
    alert("Post reported. Thank you for keeping the community safe!");
  };

  const filteredPosts = posts.filter(
    (p) =>
      p.text.toLowerCase().includes(search.toLowerCase()) &&
      (tagFilter === "All" || p.tag === tagFilter) &&
      (moodFilter === "All" || p.mood === moodFilter)
  );

  const sortedPosts = [...filteredPosts].sort((a, b) =>
    sortBy === "upvotes" ? b.upvotes - a.upvotes : b.id - a.id
  );

  const totalUpvotes = posts.reduce((sum, p) => sum + p.upvotes, 0);

  return (
    <section id="share" className="py-16 bg-gray-50 text-gray-800 px-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        Share Your Thoughts 💬
      </h2>
      <p className="text-center mb-6 text-gray-600">
        Connect anonymously, support others, and make your voice heard.
      </p>

      <div className="max-w-2xl mx-auto flex flex-col space-y-4 mb-6">
        <textarea
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-4 rounded border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Share how you're feeling today..."
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

      <PostFilter
        search={search}
        setSearch={setSearch}
        tagFilter={tagFilter}
        setTagFilter={setTagFilter}
        moodFilter={moodFilter}
        setMoodFilter={setMoodFilter}
        tags={defaultTags}
        moods={defaultMoods}
      />
      <TrendingPosts posts={posts} />

      <div className="mb-6 text-center">
        <button
          onClick={() => setSortBy(sortBy === "newest" ? "upvotes" : "newest")}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Sort: {sortBy === "newest" ? "Newest" : "Most Upvoted"}
        </button>
      </div>

      <PostList
        posts={sortedPosts}
        handleUpvote={handleUpvote}
        commentInputs={commentInputs}
        handleCommentChange={handleCommentChange}
        timeAgo={timeAgo}
        handleCommentSubmit={handleCommentSubmit}
        recentComments={recentComments}
        handleReport={handleReport}
      />

      <div className="max-w-2xl mx-auto text-center mt-8 text-gray-600 space-y-1">
        <p>Total posts: {posts.length}</p>
        <p>Total upvotes: {totalUpvotes}</p>
      </div>
    </section>
  );
}
