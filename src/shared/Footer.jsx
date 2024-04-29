import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-100 text-white dark:text-gray-800 bg-[#010313]">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600"></div>
            <span className="self-center text-2xl font-semibold">
              <Typewriter
                words={[" Artisan Alley"]}
                loop={500}
                cursor
                cursorStyle="."
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3   sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Contact
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  <span> 01873600588</span>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  support@gmail.com
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  report latter
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Ruels & Conditions
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 ">
            <div className="uppercase dark:text-gray-900">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook size={25} className="hover:text-blue-400" />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FaTwitter size={25} className="hover:text-sky-400" />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaInstagram size={25} className="hover:text-red-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        <Link to="/copyright">
          <Typewriter
            words={["© Copyright 2024. All Rights Reserved."]}
            loop={1}
            cursor
            cursorStyle="."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
