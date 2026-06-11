import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">
      <h2>What You Will Learn</h2>

      <div className="features-grid">
        <FeatureCard
          title="Components"
          description="Break your UI into small reusable pieces."
        />

        <FeatureCard
          title="Props"
          description="Pass data from one component to another."
        />

        <FeatureCard
          title="State"
          description="Make your UI change when data changes."
        />
      </div>
    </section>
  );
}

export default Features;
