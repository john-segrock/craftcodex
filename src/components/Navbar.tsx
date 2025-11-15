const Navbar = () => {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">Craftcodex</a>
        <div>
          <a href="/about" className="mx-2">About</a>
          <a href="/services" className="mx-2">Services</a>
          <a href="/portfolio" className="mx-2">Portfolio</a>
          <a href="/contact" className="mx-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
