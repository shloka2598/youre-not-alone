export default function Resources() {
  const resources = [
    {
      title: "Teen Mental Health",
      desc: "Articles and guides for coping with stress and anxiety.",
      link: "https://www.nami.org/Your-Journey/Teens-and-Young-Adults",
    },
    {
      title: "Crisis Helpline",
      desc: "Call or chat with trained professionals if you need urgent support.",
      link: "https://suicidepreventionlifeline.org",
    },
    {
      title: "Mindfulness Exercises",
      desc: "Simple exercises to help calm your mind and reduce stress.",
      link: "https://kidshealth.org/en/teens/mindful-exercises.html",
    },
  ];

  return (
    <section className="py-16 bg-white text-gray-800 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Helpful Resources
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {resources.map((res, i) => (
          <a
            key={i}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg shadow hover:shadow-md transition bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2">{res.title}</h3>
            <p className="text-gray-600">{res.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
