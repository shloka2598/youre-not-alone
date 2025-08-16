const Features = () => {
  const features = [
    {
      title: "Anonymous Sharing",
      desc: "Post your thoughts without revealing your identity.",
      icon: "💬",
    },
    {
      title: "Community Support",
      desc: "Get help from people who understand you.",
      icon: "🤝",
    },
    {
      title: "Resource Center",
      desc: "Access mental health articles, helplines, and guides.",
      icon: "📚",
    },
  ];

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
