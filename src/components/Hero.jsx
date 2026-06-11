function Hero() {
  const title = "Learn React by Building";
  const description = "This is my first React component-based page.";
  const buttonText = "Start Learning";

  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </section>
  );
}

export default Hero;
