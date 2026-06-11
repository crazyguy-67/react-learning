import Hero from "../components/Hero";
import Features from "../components/Features";
import LearningPath from "../components/LearningPath";
import JoinForm from "../components/JoinForm";

function Home() {
  return (
    <>
      <Hero
        title="Learn React by Building"
        description="This is my first React component-based page."
        buttonText="Start Learning"
      />

      <Features />

      <LearningPath />

      <JoinForm />
    </>
  );
}

export default Home;
