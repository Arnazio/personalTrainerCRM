// components/NavigationBar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/logo.png'
import './NavigationBar.css'
const NavigationBar = () => {
  return (
    <>
      <div className="relative h-[600px]">
        <div className="relative top h-[420px] ">
          <header className="absolute mb-10 top-0 left-0 right-0 bottom-0 custom-clip-top bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 pb-4">
            <div className='flex justify-between items-center mt-4'>
              <h1 className="text-3xl font-bold underline ml-10">
                <Link href="/"></Link>
              </h1>
              <div className="flex items-center mr-4">
                <div className="nav-options space-x-4 text-white">
                  <Link href="/page1">Option 1</Link>
                  <Link href="/page2">Option 2</Link>
                  <Link href="/page3">Option 3</Link>
                </div>
                <div className="border border-white text-white rounded-full px-4 py-2 ml-4">
                  <Link href="/get-started">Get Started</Link>
                </div>
              </div>
            </div>
          </header>
          <div className="">
            <div className="relative top-[300px] left-0 right-0 ml-20 absolute w-full h-750 font-sans font-bold text-8xl leading-5 text-gray-800 border-3 border-gray-800 text-shadow-md z-20">
              THE SOFTWARE
            </div>
            <div className="relative top-[368px] top-[368px]left-0 right-0 ml-10 absolute w-full h-750 font-sans font-bold text-8xl leading-5 text-gray-800 border-3 border-gray-800 text-shadow-md z-20">
              FOR PROFESSIONALS
            </div>
            <div>
            <div>
              <p className="relative text-gray-800 top-[410px] font-bold text-2xl ml-12">
                the drag & drop software service to customize your clients interface
              </p>
            </div>
            <div>
              {/* BETWEEN THESE DIVS */}
              <div className="flex relative top-[420px] ml-10">
                <Link
                  href="/your-link-here"
                  className="bg-blue-500 text-white font-semibold rounded-full px-4 py-2 transition-colors duration-300 border hover:border-blue-500 hover:bg-white hover:text-blue-500"
                  >
                  TRY NOW
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavigationBar;