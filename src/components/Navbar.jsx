import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-neutral-950 px-6 py-5 text-white md:px-16">
      <Link to="/" className="text-2xl font-extrabold tracking-tight">
        ReactJourney
      </Link>

      <div className="hidden items-center gap-7 md:flex">
        <Link
          to="/"
          className="text-sm font-medium text-neutral-300 transition hover:text-white"
        >
          Home
        </Link>

        <Link
          to="/lessons"
          className="text-sm font-medium text-neutral-300 transition hover:text-white"
        >
          Lessons
        </Link>

        <Link
          to="/resources"
          className="text-sm font-medium text-neutral-300 transition hover:text-white"
        >
          Resources
        </Link>

        <Link
          to="/about"
          className="text-sm font-medium text-neutral-300 transition hover:text-white"
        >
          About
        </Link>
      </div>

      <Link
        to="/lessons"
        className="rounded-full bg-white px-4 py-2 text-sm font-bold text-neutral-950 transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        Get Started
      </Link>
    </nav>
  );
}

export default Navbar;
