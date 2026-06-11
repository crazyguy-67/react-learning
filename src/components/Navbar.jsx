import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-white pb-1 text-sm font-bold text-white"
      : "border-b-2 border-transparent pb-1 text-sm font-medium text-neutral-300 transition hover:text-white";

  return (
    <nav className="flex items-center justify-between bg-neutral-950 px-6 py-5 text-white md:px-16">
      <Link to="/" className="text-2xl font-extrabold tracking-tight">
        ReactJourney
      </Link>

      <div className="hidden items-center gap-7 md:flex">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/lessons" className={navLinkClass}>
          Lessons
        </NavLink>

        <NavLink to="/resources" className={navLinkClass}>
          Resources
        </NavLink>

        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
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
