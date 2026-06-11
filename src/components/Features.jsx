import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      id: 1,
      title: "Components",
      description: "Break your UI into small reusable pieces.",
    },
    {
      id: 2,
      title: "Props",
      description: "Pass data from one component to another.",
    },
    {
      id: 3,
      title: "State",
      description: "Make your UI change when data changes.",
    },
    {
      id: 4,
      title: "Lists",
      description: "Render multiple items using JavaScript arrays.",
    },
    {
      id: 5,
      title: "Events",
      description: "Respond to user actions like clicks and typing.",
    },
    {
      id: 6,
      title: "Forms",
      description: "Collect and manage user input in React.",
    },
  ];

  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
          What You Will Learn
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            return (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
