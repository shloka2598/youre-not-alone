import Hero from "../components/Hero";
import Share from "../components/share/Share";
import Resources from "../components/Resources";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Share />
      <Resources />

      <section className="py-16 bg-indigo-600 text-white px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Share Your Thoughts?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Connect anonymously, support others, and make your voice heard.
          Together, we’re never alone.
        </p>
        <a
          href="#share"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-100 transition"
        >
          Start Sharing
        </a>
      </section>
    </div>
  );
}
