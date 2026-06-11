import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import ResourcesPage from "./pages/ResourcesPage";
import About from "./pages/About";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-100 text-neutral-950">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer text="Made with React" subText="Keep building. Keep improving." />
    </div>
  );
}

export default App;
