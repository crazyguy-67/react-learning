function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-neutral-950 px-6 py-5 text-white md:px-16">
      <h2 className="text-2xl font-extrabold tracking-tight">ReactJourney</h2>

      <div className="hidden items-center gap-7 md:flex">
        <a
          href="#"
          className="text-sm font-medium text-neutral-300 transition hover:text-white"
        >
          Home
        </a>
        <a
          href="#"
          className="text-sm font-medium text-neutral-300 transition hover:text-white"
        >
          Lessons
        </a>
        <a
          href="#"
          className="text-sm font-medium text-neutral-300 transition hover:text-white"
        >
          Projects
        </a>
      </div>

      <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-neutral-950 transition hover:-translate-y-0.5 hover:shadow-lg">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
