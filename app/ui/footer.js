import React from "react";

export default function Footer2() {
  return (
    <div>
      <footer className="bg-gray-700 text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-4">
            {/* <img src="your-logo.png" alt="Blood Donation Website Logo" className="w-20 h-20 mb-2"> */}
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l4 4L19 6"
                />
              </svg>
              <span>+(123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 16l4-4L19 14"
                />
              </svg>
              <span>contact@yourwebsite.com</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h-4l4 -4v12zM16 12h4l-4 4v-12zM3 8l4-4v12l4-4"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8 5v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2zM20 8l-1.68 1.68a1.125 1.125 0 0 0 0 1.58L15 16a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2l-3-3a2 2 0 0 1 0-2.8 L5.32 9.54a1.125 1.125 0 0 0 1.58 0L8 12l12-12z" />
              </svg>
            </a>
            <span>&copy; 2024 S6 CSE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
