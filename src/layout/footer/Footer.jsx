import {
  FaFacebook,
  FaTelegramPlane,
  FaRegCommentDots,
  FaViber,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About PotanShop</h3>
            <p className="text-sm text-gray-400">
              PotanShop is your one-stop online store for in-game currency and
              accessories. Enjoy fast and secure transactions, reliable customer
              support, and a wide selection of games.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-sky-600"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://m.me"
                  className="text-gray-400 hover:text-sky-500"
                >
                  <FaRegCommentDots size={24} />
                </a>
                <a
                  href="https://telegram.me"
                  className="text-gray-400 hover:text-sky-500"
                >
                  <FaTelegramPlane size={24} />
                </a>
                <a
                  href="viber://chat?number=your_viber_number"
                  className="text-gray-400 hover:text-sky-400"
                >
                  <FaViber size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ps-20">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="hover:text-gray-300">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Stay updated with the latest products and promotions. Sign up for our newsletter!</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 w-full rounded-lg border border-gray-700 focus:outline-none focus:border-sky-500"
            />
            <button className="w-full mt-4 py-2 px-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700">
              Subscribe
            </button>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; 2025 PotanShop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
