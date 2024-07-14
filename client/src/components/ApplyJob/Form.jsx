import React from "react";

const Form = () => {
  return (
    <div className="relative bg-white border w-full border-gray-300 rounded-2xl p-5">
      <div className="flex flex-col gap-4 relative">
        <h1 className="text-3xl font-bold mb-8">Job Application</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 px-3 rounded-md shadow-sm focus:border-black focus:ring-black focus:outline-black py-3"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full focus:outline-black px-3 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black py-3"
              placeholder="john.doe@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              className="mt-1 block w-full px-3 focus:outline-black border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black py-3"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Resume
            </label>
            <input
              type="file"
              className="mt-1 block w-full focus:outline-black text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              LinkedIn Profile
            </label>
            <input
              type="url"
              className="mt-1 block w-full border-gray-300 px-3 rounded-md shadow-sm focus:border-black focus:ring-black focus:outline-black py-3"
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              GitHub Profile
            </label>
            <input
              type="url"
              className="mt-1 block w-full border-gray-300 px-3 rounded-md shadow-sm focus:border-black focus:ring-black focus:outline-black py-3"
              placeholder="https://github.com/username"
            />
          </div>

          <div>
            <label className="block px-3 text-sm font-medium text-gray-700">
              Cover Letter
            </label>
            <textarea
              rows="4"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black py-3"
              placeholder="Write your cover letter here..."
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
