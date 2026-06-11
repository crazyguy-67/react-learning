import { useState } from "react";

function LearningPath() {
  const [level, setLevel] = useState("beginner");

  let content;

  if (level === "beginner") {
    content = {
      title: "Beginner Path",
      description:
        "Start with React fundamentals like components, JSX, props, events, state, and conditional rendering.",
      topics: ["Components", "JSX", "Props", "Events", "useState"],
    };
  } else if (level === "intermediate") {
    content = {
      title: "Intermediate Path",
      description:
        "Learn how to build real interfaces with forms, effects, API fetching, routing, and reusable patterns.",
      topics: [
        "Forms",
        "useEffect",
        "API Fetching",
        "React Router",
        "Reusable Components",
      ],
    };
  } else {
    content = {
      title: "Advanced Path",
      description:
        "Level up with custom hooks, global state, performance, animations, and production project structure.",
      topics: [
        "Custom Hooks",
        "Context API",
        "Zustand",
        "Framer Motion",
        "Project Architecture",
      ],
    };
  }

  return (
    <section className="bg-neutral-100 px-5 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Choose Your Learning Path
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
          Select a level and React will conditionally render the right roadmap.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setLevel("beginner")}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              level === "beginner"
                ? "bg-neutral-950 text-white"
                : "bg-white text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            Beginner
          </button>

          <button
            onClick={() => setLevel("intermediate")}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              level === "intermediate"
                ? "bg-neutral-950 text-white"
                : "bg-white text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            Intermediate
          </button>

          <button
            onClick={() => setLevel("advanced")}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              level === "advanced"
                ? "bg-neutral-950 text-white"
                : "bg-white text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            Advanced
          </button>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-neutral-200 bg-white p-8 text-left shadow-sm">
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-neutral-500">
            {level}
          </span>

          <h3 className="mt-5 text-2xl font-extrabold text-neutral-950">
            {content.title}
          </h3>

          <p className="mt-3 leading-7 text-neutral-600">
            {content.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {content.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700"
              >
                {topic}
              </span>
            ))}
          </div>

          {level === "advanced" && (
            <p className="mt-6 rounded-xl bg-neutral-950 px-4 py-3 text-sm font-semibold text-white">
              Advanced path is best after you are comfortable building small
              React projects.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default LearningPath;
