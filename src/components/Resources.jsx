import { useState, useEffect } from "react";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchResources() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=4",
        );

        if (!res.ok) {
          throw new Error("Failed to fetch resources!");
        }
        const data = await res.json();
        setResources(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchResources();
  }, []);

  return (
    <section className="bg-neutral-100 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
          Popular React Resources
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          These resources are loaded from an external API using useEffect.
        </p>

        {loading && (
          <p className="mt-10 text-center font-semibold text-neutral-600">
            Loading Resources...
          </p>
        )}

        {error && (
          <p className="mt-10 rounded-xl bg-red-100 px-4 py-3 text-center font-bold text-red-700">
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid=cols-3">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-sm font-bold text-neutral-400">
                  Resource #{resource.id}
                </span>

                <h3 className="text-xl mt-4 font-extrabold capitalize text-neutral-950">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {resource.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Resources;
