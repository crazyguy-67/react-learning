import { useState } from "react";

function JoinForm() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    setSubmittedName(name);
    setName("");
  }

  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-200 bg-neutral-50 p-8 text-center shadow-sm">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Join ReactJourney
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-neutral-600">
          Enter your name and start your React learning journey.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-950"
          />

          <button
            type="submit"
            className="rounded-xl bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Join Now
          </button>
        </form>

        {submittedName && (
          <p className="mt-6 rounded-xl bg-neutral-950 px-4 py-3 text-sm font-semibold text-white">
            Welcome, {submittedName}! Your React journey starts now.
          </p>
        )}
      </div>
    </section>
  );
}

export default JoinForm;
