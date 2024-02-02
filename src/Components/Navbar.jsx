import React, { useState } from "react";

const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbarr = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300 shadow-lg mb-[80px] ">
      <div className="flex items-center justify-between w-full min-h-[45px] p-3">
        <span className='hidden md:block'>🔍</span>
        <h2 className='text-2xl font-extrabold'>Businessly</h2>
        <button className='hidden px-4 py-1 text-xs border border-black hover:bg-orange-300 hover:text-white md:block'>Subscribe</button>
      </div >
      <div className="flex items-center  justify-between h-16">
        <div className="flex items-center ">
          <div className="hidden md:block gap-3 ">
            <a
              href="#"
              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Stock Market
            </a>
            <a
              href="#"
              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              technology
            </a>
            <a
              href="#"
              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              politics
            </a>
            <a
              href="#"
              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Automobile
            </a>
            <a
              href="#"
              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Health
            </a>
            <a
              href="#"
              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Interactive Sessions
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbarr}
              className='relative px-4 py-1 text-xs  hover:text-white md:hidden'
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5a2 2 0 100 4 2 2 0 000-4zM18 5a2 2 0 100 4 2 2 0 000-4zM4 11a2 2 0 100 4 2 2 0 000-4zM18 11a2 2 0 100 4 2 2 0 000-4zM4 17a2 2 0 100 4 2 2 0 000-4zM18 17a2 2 0 100 4 2 2 0 000-4z"
                    fill="black"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18a2 2 0 002-2h8a2 2 0 002 2a1 1 0 001 1a1 1 0 001 1a1 1 0 001 1a1 1 0 001 1a1 1 0 001 1a1 1 0 001 1a1 1 0 001 1a1 1 0 001 1h2a2 2 0 002-2a2 2 0 002-2V4a2 2 0 00-2-2a2 2 0 00-2-2H8a2 2 0 00-2 2a2 2 0 00-2 2v12a2 2 0 002 2z"
                    fill="black"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {
        isOpen && (
          <div className="md:hidden">
            <div className="space-x-1 sm:px-5">
              <a
                href="#"
                className="text-black hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a> <br />
              <a
                href="#"
                className="text-black hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              >
                Stock Market
              </a><br />
              <a
                href="#"
                className="text-black hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              >
                technology
              </a><br />
              <a
                href="#"
                className="text-black hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              >
                politics
              </a><br />
              <a
                href="#"
                className="text-black hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              >
                Automobile
              </a><br />
              <a
                href="#"
                className="text-black hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              >
                Health
              </a><br />
              <a
                href="#"
                className="text-black hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              >
                Interactive Sessions
              </a><br />
            </div>
          </div>
        )
      }
    </nav >
  );
};


export default Navbarr;
