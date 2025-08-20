import {
  FaFacebook,
  FaTelegramPlane,
  FaRegCommentDots,
  FaViber,
} from "react-icons/fa";
import { useTypedTranslation } from "../../translation/useTypedTranslation.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/configureStore";
import callApi from "../../services/api/apiClient";
import React, { useEffect } from "react";

export default function Footer(): React.JSX.Element {
  const { i18n, Translate, translation } = useTypedTranslation();

  const siteSetting = useSelector(
    (state: RootState) => state?.setting?.siteSetting?.data
  );

  if (siteSetting) {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Footer Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* About Section */}
            {siteSetting?.about ? (
              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-4">
                  {Translate(translation.footer.about_potan)}
                </h3>
                <p className="text-sm text-gray-400">{siteSetting?.about}</p>
              </div>
            ) : (
              <div />
            )}

            <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {/* Social Media Links */}
              <div className="order-2 sm:order-1">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">
                    {Translate(translation.footer.follow_us)}
                  </h3>
                  <div className="flex justify-center space-x-6">
                    {siteSetting?.fb_link && (
                      <a
                        href={siteSetting?.fb_link}
                        className="text-gray-400 hover:text-sky-600"
                      >
                        <FaFacebook size={24} />
                      </a>
                    )}
                    {siteSetting?.messenger_link && (
                      <a
                        href={siteSetting?.messenger_link}
                        className="text-gray-400 hover:text-sky-500"
                      >
                        <FaRegCommentDots size={24} />
                      </a>
                    )}
                    {siteSetting?.telegram_link && (
                      <a
                        href={siteSetting?.telegram_link}
                        className="text-gray-400 hover:text-sky-500"
                      >
                        <FaTelegramPlane size={24} />
                      </a>
                    )}
                    {siteSetting?.viber_link && (
                      <a
                        href={siteSetting?.viber_link}
                        className="text-gray-400 hover:text-sky-400"
                      >
                        <FaViber size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="order-1 sm:order-2 ps-0 sm:ps-20">
                <h3 className="text-lg font-semibold mb-4">
                  {Translate(translation.footer.quick_links)}
                </h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>
                    <a href="/privacy-policy" className="hover:text-gray-300">
                      {Translate(translation.main.privacy_policy)}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-and-conditions"
                      className="hover:text-gray-300"
                    >
                      {Translate(translation.main.terms_and_conditions)}
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-gray-300">
                      {Translate(translation.footer.contact_us)}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Stay updated with the latest products and promotions. Sign up for our newsletter!</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 w-full rounded-lg border border-gray-700 focus:outline-hidden focus:border-skyblue"
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
  } else {
    return <></>;
  }
}
