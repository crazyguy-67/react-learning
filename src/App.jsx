import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Hero
        title="Learn React by Building"
        description="This is my first React component-based page."
        buttonText="Start Learning"
      />

      <Features />

      <Footer text="Made with React" subText="Keep building. Keep improving." />
    </div>
  );
}

export default App;
