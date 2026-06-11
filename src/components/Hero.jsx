function Hero({ title, description, buttonText, onStartClick }) {
  return (
    <section className="flex `min-h-130` flex-col items-center justify-center px-5 py-20 text-center">
      <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
        {title}
      </h1>

      <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
        {description}
      </p>

      <button
        onClick={onStartClick}
        className="mt-8 rounded-lg bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-xl"
      >
        {buttonText}
      </button>
    </section>
  );
}

export default Hero;
