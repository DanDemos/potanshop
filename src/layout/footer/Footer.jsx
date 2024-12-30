
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div>&copy; 2024 ShopMate</div>
        <div className="space-x-6">
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
          <a href="/sitemap" className="hover:text-gray-400">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
