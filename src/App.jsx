import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LearningPath from "./components/LearningPath";
import JoinForm from "./components/JoinForm";
import Resources from "./components/Resources";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-neutral-950">
      <Navbar />

      <main className="flex-1">
        <Hero
          title="Learn React by Building"
          description="This is my first React component-based page."
          buttonText="Start Learning"
        />

        <Features />

        <LearningPath />

        <JoinForm />

        <Resources />
      </main>

      <Footer text="Made with React" subText="Keep building. Keep improving." />
    </div>
  );
}

export default App;
