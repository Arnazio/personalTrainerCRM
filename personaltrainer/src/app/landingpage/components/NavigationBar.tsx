// components/NavigationBar.tsx
import React from 'react';
import Link from 'next/link';
import './NavigationBar.css'
const NavigationBar = () => {
  return (
    <>
      <div className="relative">
        <div className=" relative top h-[350px] overflow-hidden">
         <header className=" absolute mb-10 top-0 left-0 right-0 bottom-0 custom-clip-top bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 pb-4 ">
            <div className='flex justify-between items-center mt-4'>
            <h1 className="text-3xl font-bold underline ml-10">
              <Link href="/">
                <img src="" alt="Logo" className="h-12" />
              </Link>
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
          <div className="relative top-[300px] left-0 right-0 ml-10 absolute w-1082 h-466 font-sans font-bold text-6xl leading-5 text-gray-800 border-3 border-gray-800 text-shadow-md z-20"> {/* Added z-20 */}
          THE SOFTWARE FOR PROFESSIONALS 
        </div>
        </div>
      </div>
    </>
  );
  }  
export default NavigationBar;