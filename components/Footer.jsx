import React from 'react'
export const Footer = () => {
  return (
    <footer className=" py-6 mt-14 text-black border-t-2 border-white-500 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full text-center md:w-1/3">
            <h2 className="text-green-500 text-lg font-semibold mb-2">TalentTrove</h2>
            <p className=" text-sm">Find your dream job now!</p>
          </div>
          <div className="w-full text-center md:w-1/3">
            <h4 className=" text-lg font-semibold mb-2">Quick Links</h4>
            <nav className="mb-2">
              <ul>
                <li className="inline-block mr-2">
                  <a href="#" className=" text-sm hover:text-black-200">Home</a>
                </li>
                <li className="inline-block mr-2">
                  <a href="#" className=" text-sm hover:text-black-200">Jobs</a>
                </li>
                <li className="inline-block mr-2">
                  <a href="#" className="t text-sm hover:text-black-200">About Us</a>
                </li>
                <li className="inline-block">
                  <a href="#" className=" text-sm hover:text-black-200">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full text-center md:w-1/3">
            <h4 className=" text-lg font-semibold mb-2">Connect with Us</h4>
            <div className="flex justify-center">
              <a href="#" className=" hover:text-black-200 mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </a>
              <a href="#" className=" hover:text-black-200mr-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a href="#" className=" hover:text-black-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l2 4V-4m-4 4h-4v12h4M7 12h4m-2-2v4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className=" text-sm">&copy; {new Date().getFullYear()} TalentTrove. All rights reserved.</p>
        </div>
      </footer>
  )
}
