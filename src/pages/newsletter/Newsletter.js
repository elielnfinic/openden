import React from "react";

import open_den_logo from "../../res/icon.png";

export default function Newsletter() {
    return (
      <div className="bg-white text-center">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
          <div className="text-center inline-flex">
            <img src={open_den_logo} className="w-20 rounded-3xl"/>
          </div>

          <div className="mt-10">
            <h2 className="inline text-3xl font-bold tracking-tight text-gray-900 sm:block sm:text-4xl">
              Want product news and updates?
            </h2>
            <p className="inline text-3xl font-bold tracking-tight text-openden2 sm:block sm:text-4xl">
              Sign up for our newsletter.
            </p>
          
              <form className="mt-8 flex inline-block items-center">
              <div class="flex-1 ">
    
  </div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full  flex-1 rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-openden2 focus:ring-openden1 sm:max-w-xs"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0 flex-1">
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-md border border-transparent bg-openden1 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Notify me
                  </button>
                </div>
              </form>
          
          </div>

        </div>
      </div>
    )
  }
  