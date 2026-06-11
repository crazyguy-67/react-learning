function FeatureCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-100 p-7 text-left transition hover:-translate-y-1.5 hover:shadow-xl">
      <h3 className="text-xl font-bold text-neutral-950">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
