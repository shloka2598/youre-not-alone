export function timeAgo(timestamp) {
  const now = new Date();
  const postTime = new Date(timestamp);
  const diff = Math.floor((now - postTime) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} d ago`;
  return postTime.toLocaleDateString();
}
