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
    <section className="features">
      <h2>What You Will Learn</h2>

      <div className="features-grid">
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
    </section>
  );
}

export default Features;
