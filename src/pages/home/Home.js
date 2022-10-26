import React, {Component} from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import WebMenus from '../../shared_components/web_site_menus';

import bgHomePic from '../../res/bg-home.png';


export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <WebMenus/>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Cheap and secure</span>{' '}
                <span className="block text-openden2 xl:inline">file wallet</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Openden is a file wallet that allows you to store your files in a secure and cheap way on the blockchain(IPFS).
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-openden1 px-8 py-3 text-base font-medium text-white hover:bg-openden2 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-openden1 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Learn how 
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        
      </div>
    </div>
  )
}

