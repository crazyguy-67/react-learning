function Footer({ text, subText }) {
  return (
    <footer className="bg-neutral-950 px-5 py-7 text-center text-white">
      <p className="font-bold">{text}</p>
      <span className="mt-1 block text-sm text-neutral-400">{subText}</span>
    </footer>
  );
}

export default Footer;
