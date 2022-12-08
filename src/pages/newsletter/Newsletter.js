import React,{useState} from "react";
import {add_subscriber} from "../../net/subscribe";

import open_den_logo from "../../res/icon.png";
import loading_animation from "../../res/loading.gif";


import finish_line from "./res/finish_line.svg";

export default function Newsletter() {
    const [email_addr, set_email_addr] = useState("");
    const [error, set_error_msg] = useState("");
    const [success, set_success_msg] = useState("");
    const [loading, set_loading] = useState(false);

    const handleChange = (e) => {
      set_email_addr(e.target.value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      set_loading(true);
      add_subscriber(email_addr).then(response => {
        set_loading(false);
        console.log(response);
        if(response.includes("error")){
          set_error_msg("You are already subscribed or something went wrong.");
        }else if(response.includes("success")){
          set_success_msg("Thanks for subscribing.");
        }
      })
      .catch(err => {
        set_loading(false);
        alert("Something went wrong, please try again");
      });
    }

    return (
      <div className="bg-white text-center">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
      
          {success === "" ? (<div className="mt-10">
            <div className="text-center">
              <img src={open_den_logo} className="w-20 rounded-3xl inline"/>
            </div>
            <div className="my-6">
              <h2 className="inline text-3xl font-bold tracking-tight text-gray-900 sm:block sm:text-4xl">
                Get ready for the personal files wallet on the blockchain
              </h2>
            </div>
            <p>
              Store your personal photos - videos - documents - files on the blockchain
            </p>
            <p className="mt-6 inline text-3xl font-bold tracking-tight text-openden2 sm:block sm:text-4xl">
              Join the waitlist 
            </p>

            

              <form method="post" onSubmit={handleSubmit} className="mt-8 md:flex inline-block items-center">
              <div className="md:flex mx-auto ">
                <div className="md:flex-2">
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
                      className="w-full  md:flex-1 rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-openden2 focus:ring-openden1 sm:max-w-xs"
                      placeholder="Enter your email"
                    />
                </div>
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 md:flex-1 sm:w-full">
                    <button
                      type="submit"
                      className="flex items-center w-full justify-center rounded-md border border-transparent bg-openden1 px-5 py-3 text-base font-medium text-white hover:bg-openden2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      disabled={loading}
                    >
                      {loading ? (<img src={loading_animation} style={{height:"22px"}} alt="Loading animation"/>) :' Notify me' }
                    </button>
                  </div>
                               
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
  