"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold text-white">SoftSell</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your unused software licenses into revenue. Fast,
              secure, and compliant.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 5.16c-.82.38-1.7.64-2.63.76 1-.59 1.72-1.53 2.07-2.66-.9.53-1.91.9-2.97 1.1-.85-.9-2.06-1.47-3.4-1.47-2.57 0-4.66 2.08-4.66 4.66 0 .37.04.72.12 1.06-3.87-.2-7.3-2.05-9.6-4.88-.4.69-.63 1.49-.63 2.35 0 1.62.82 3.04 2.07 3.88-.76-.02-1.48-.23-2.1-.58v.06c0 2.26 1.6 4.14 3.73 4.57-.39.1-.8.16-1.22.16-.3 0-.59-.03-.87-.09.59 1.85 2.31 3.2 4.34 3.24-1.59 1.24-3.59 1.99-5.76 1.99-.37 0-.74-.02-1.1-.07 2.06 1.31 4.5 2.08 7.13 2.08 8.54 0 13.22-7.08 13.22-13.22 0-.2 0-.4-.01-.6.9-.66 1.69-1.47 2.32-2.4l.01-.02z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17H9v-6h2v6zm-1-7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 7.5h-2v-3.5c0-.55-.45-1-1-1s-1 .45-1 1V19h-2v-6h2v1.1c.55-.67 1.3-1.1 2.12-1.1 1.67 0 2.88 1.3 2.88 3v3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 3.181 2.586 5.767 5.767 5.767 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm0 9.5c-2.054 0-3.733-1.679-3.733-3.733s1.679-3.733 3.733-3.733 3.733 1.679 3.733 3.733-1.679 3.733-3.733 3.733zM18.5 5.8c0 .744-.604 1.348-1.348 1.348-.744 0-1.348-.604-1.348-1.348 0-.744.604-1.348 1.348-1.348.744 0 1.348.604 1.348 1.348z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">info@softsell.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  123 Tech Boulevard, <br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SoftSell. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-400">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
