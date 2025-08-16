const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-indigo-500 to-purple-600 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        <div className="sm:w-1/2 mb-10 sm:mb-0 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            You’re Not Alone 💙
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            A safe space to share, connect, and heal together. Because every
            voice deserves to be heard.
          </p>
          <a
            href="#share"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-100 transition"
          >
            Share Your Thoughts
          </a>
        </div>

        <div className="sm:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Support illustration"
            className="w-64 sm:w-80 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
