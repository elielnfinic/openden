import React,{useState} from "react";
import {add_subscriber} from "../../net/subscribe";

import open_den_logo from "../../res/icon.png";


import finish_line from "./res/finish_line.svg";

export default function Newsletter() {
    const [email_addr, set_email_addr] = useState("");
    const [error, set_error_msg] = useState("");
    const [success, set_success_msg] = useState("");

    const handleChange = (e) => {
      set_email_addr(e.target.value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      add_subscriber(email_addr).then(response => {
        console.log(response);
        if(response.error){
          set_error_msg(response.error);
        }else{
          set_success_msg("Thanks for subscribing.");
        }
      });
      
      
    }

    return (
      <div className="bg-white text-center">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
         

          {success === "" ? (<div className="mt-10">
            <div className="text-center inline-flex">
              <img src={open_den_logo} className="w-20 rounded-3xl"/>
            </div>

            <h2 className="inline text-3xl font-bold tracking-tight text-gray-900 sm:block sm:text-4xl">
              Get ready for the personal files wallet on the blockchain
            </h2>
            <p>
              Store your personal photos - videos - documents - files on the blockchain
            </p>
            <p className="mt-2 inline text-3xl font-bold tracking-tight text-openden2 sm:block sm:text-4xl">
              Join the waitlist 
            </p>

          
              <form method="post" onSubmit={handleSubmit} className="mt-8 flex inline-block items-center">
              <div class="flex-1 ">
    
              </div>
                <label htmlFor="email-address" className="sr-only">
                  Email address 
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="w-full  flex-1 rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-openden2 focus:ring-openden1 sm:max-w-xs"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0 flex-1">
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-md border border-transparent bg-openden1 px-5 py-3 text-base font-medium text-white hover:bg-openden2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Notify me
                  </button>
                </div>
                
                <div>
               
                </div>
              </form>
              {error ? <div className="bg-red-300 px-6 py-2 mt-4 inline-block animate-pulse rounded-md">{error}</div> : '' }
        </div>): (
          <div className="mt-10 center">
            <img alt="Succes!" className="w-48 h-48 rounded-full inline" src={finish_line}/><br/>
            <h2 className="inline text-3xl font-bold tracking-tight text-gray-900 sm:block sm:text-4xl">
              {success}
            </h2>
            <div><strong>We will let you know when we launch</strong></div>
            <div className="mt-4">You can reach out to me here <a href="mailto:eliel@nfinic.com">eliel@nfinic.com</a></div>
            <div>Read more on my blog <a href="https://eliel.nfinic.com" rel="noreferrer" target="_blank">eliel.nfinic.com</a></div>
          </div>
        )}
      </div>
          
      </div>
    )
  }
  