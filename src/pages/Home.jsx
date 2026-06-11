import { useRef } from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import LearningPath from "../components/LearningPath";
import JoinForm from "../components/JoinForm";

function Home() {
  const learningPathRef = useRef(null);

  function scrollToLearningPath() {
    learningPathRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <Hero
        title="Learn React by Building"
        description="This is my first React component-based page."
        buttonText="Start Learning"
        onStartClick={scrollToLearningPath}
      />

      <Features />

      <div ref={learningPathRef}>
        <LearningPath />
      </div>

      <JoinForm />
    </>
  );
}

export default Home;
