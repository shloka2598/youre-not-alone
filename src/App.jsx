import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import { demoPosts } from "./components/utils/seedData";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (!storedPosts || storedPosts.length === 0) {
      localStorage.setItem("posts", JSON.stringify(demoPosts));
      setPosts(demoPosts);
    } else {
      setPosts(storedPosts);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
