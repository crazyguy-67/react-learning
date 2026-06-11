function Lessons() {
  const lessons = [
    "Components",
    "JSX",
    "Props",
    "Lists and map",
    "Events",
    "useState",
    "Conditional Rendering",
    "Forms",
    "useEffect",
    "React Router",
  ];

  return (
    <section className="bg-neutral-100 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          React Lessons
        </h1>

        <p className="mt-4 max-w-2xl text-neutral-600">
          These are the topics you are learning step by step while building this
          project.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {lessons.map((lesson, index) => (
            <div
              key={lesson}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold text-neutral-400">
                Lesson {index + 1}
              </span>

              <h3 className="mt-3 text-xl font-bold text-neutral-950">
                {lesson}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lessons;
