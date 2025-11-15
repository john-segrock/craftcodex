const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Craftcodex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
