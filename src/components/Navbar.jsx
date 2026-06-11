function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">ReactJourney</h2>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Lessons</a>
        <a href="#">Projects</a>
      </div>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}

export default Navbar;
