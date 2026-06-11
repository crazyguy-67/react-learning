function About() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          About ReactJourney
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          ReactJourney is a small learning project built to understand React by
          adding one real concept at a time. Instead of only reading theory, we
          are turning every concept into a visible section of the project.
        </p>

        <div className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
          <h2 className="text-2xl font-extrabold">What this project teaches</h2>

          <ul className="mt-5 space-y-3 text-neutral-700">
            <li>✅ Components and props</li>
            <li>✅ Lists and map</li>
            <li>✅ Events and state</li>
            <li>✅ Conditional rendering</li>
            <li>✅ Forms and controlled inputs</li>
            <li>✅ useEffect and API fetching</li>
            <li>✅ React Router</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
