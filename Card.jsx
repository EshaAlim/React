import React from 'react';

const Card = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-[900px] h-[400px]">
        {/* Left Side - Contact Details */}
        <div className="w-1/2 p-8 bg-gray-100 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Let's get in touch With Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-teal-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.003 5.884l7.284 4.473a.5.5 0 00.426 0l7.284-4.473A.5.5 0 0017 5.5V4a2 2 0 00-2-2H5a2 2 0 00-2 2v1.5a.5.5 0 00.003.384z" />
                  <path d="M.57 6.828A2 2 0 000 8v6a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-.57-1.172l-7.282 4.471a1.5 1.5 0 01-1.295 0L.57 6.828z" />
                </svg>
              </span>
              <span>lorem@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-teal-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 12.586l-4.707-4.707a1 1 0 111.414-1.414L10 9.757l3.293-3.293a1 1 0 111.414 1.414L10 12.586z" />
                </svg>
              </span>
              <span>Khulna, Bagerhat</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-teal-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 5a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                  <path fillRule="evenodd" d="M14.83 5.598A1.5 1.5 0 0117 7v6a1.5 1.5 0 01-1.17 1.402l-4.83 1.21a.5.5 0 01-.66-.448V4.836a.5.5 0 01.66-.447l4.83 1.21zM4 10a1 1 0 100-2 1 1 0 000 2zm6-3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </span>
              <span>+8801231456708</span>
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Connect with me :</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-1/2 p-8 bg-teal-500 text-white flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Contact with us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-1">Username</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 rounded bg-teal-600 text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded bg-teal-600 text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 rounded bg-teal-600 text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded bg-teal-600 text-white focus:ring-2 focus:ring-teal-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-teal-500 font-semibold py-2 px-4 rounded hover:bg-gray-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
