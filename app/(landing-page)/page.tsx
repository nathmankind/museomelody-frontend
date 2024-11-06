"use client";

import { HomepageIndex } from "@/views/homepage";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <HomepageIndex />
    </div>
    // <div className="bg-white">

    //   <nav className="bg-gray-900 text-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
    //       <div className="text-2xl font-bold">MUSEOMELODY</div>
    //       <div className="space-x-4 hidden md:flex">
    //         <Link href="/" className="hover:text-gray-300">
    //           Home
    //         </Link>
    //         <Link href="/exhibitions" className="hover:text-gray-300">
    //           Exhibitions
    //         </Link>
    //         <Link href="/events" className="hover:text-gray-300">
    //           Events
    //         </Link>
    //         <Link href="/pricing" className="hover:text-gray-300">
    //           Pricing
    //         </Link>
    //       </div>
    //       <div className="hidden md:block">
    //         <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
    //           Become a member
    //         </button>
    //       </div>
    //     </div>
    //   </nav>

    //   {/* Hero Section */}
    //   <section
    //     className="relative h-[500px] bg-cover bg-center"
    //     style={{ backgroundImage: `url('/your-image-url.jpg')` }}
    //   >
    //     <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center">
    //       <h1 className="text-4xl md:text-5xl font-bold text-white">
    //         Experience the Harmony of Museums and Music
    //       </h1>
    //       <p className="text-gray-200 mt-4 max-w-xl">
    //         Discover the Rhythm of History and the Melody of Creativity. Dive
    //         into a world where every gallery tells a story, and every note
    //         echoes the spirit of creativity.
    //       </p>
    //       <Link
    //         href="/exhibitions"
    //         className="mt-8 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg"
    //       >
    //         Check Exhibitions
    //       </Link>
    //     </div>
    //   </section>

    //   {/* Exhibitions and Art Section */}
    //   <section className="py-12 bg-gray-100">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h2 className="text-3xl font-bold text-gray-900">
    //         EXHIBITIONS AND ART
    //       </h2>
    //       <p className="text-gray-700 mt-4 max-w-3xl">
    //         Join us on a journey that celebrates the intersection of visual art
    //         and musical expression. MuseoMelody invites you to explore curated
    //         exhibitions that not only showcase captivating artworks but also
    //         immerse you in the sounds that inspire them.
    //       </p>
    //       <div className="mt-8 flex justify-center">
    //         <img
    //           src="/your-image-url2.jpg"
    //           alt="Exhibition Image"
    //           className="rounded-lg shadow-lg w-full md:w-1/2"
    //         />
    //       </div>
    //     </div>
    //   </section>

    //   {/* Tours and Events Section */}
    //   <section className="py-12">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h2 className="text-3xl font-bold text-gray-900">Tours and Events</h2>
    //       <p className="text-gray-700 mt-2">
    //         Dive into a world where every gallery tells a story, and every note
    //         echoes the spirit of creativity.
    //       </p>
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
    //         {Array(6)
    //           .fill(null)
    //           .map((_, index) => (
    //             <div
    //               key={index}
    //               className="bg-white shadow-lg rounded-lg overflow-hidden"
    //             >
    //               <img
    //                 src="/your-event-image.jpg"
    //                 alt="Event Image"
    //                 className="w-full h-48 object-cover"
    //               />
    //               <div className="p-4">
    //                 <h3 className="text-xl font-bold text-gray-900">
    //                   Evolution of Musical Instruments
    //                 </h3>
    //                 <p className="text-gray-600 mt-2">
    //                   Explore how instruments like the piano, violin, and guitar
    //                   evolved through different eras.
    //                 </p>
    //                 <div className="mt-4 space-x-2">
    //                   <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
    //                     Exhibition
    //                   </span>
    //                   <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
    //                     Sound Innovation
    //                   </span>
    //                   <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">
    //                     Digital Music Art
    //                   </span>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //       </div>
    //       <div className="mt-8 text-center">
    //         <Link href="/events" className="text-blue-600 hover:underline">
    //           See all →
    //         </Link>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Newsletter Section */}
    //   <section className="py-12 bg-gray-100">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //       <h2 className="text-3xl font-bold text-gray-900">
    //         Sign up for our newsletter
    //       </h2>
    //       <p className="text-gray-600 mt-2">
    //         Be the first to know about releases and industry news and insights.
    //       </p>
    //       <div className="mt-6 flex justify-center">
    //         <input
    //           type="email"
    //           className="w-64 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
    //           placeholder="Enter your email"
    //         />
    //         <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-r-lg">
    //           Subscribe
    //         </button>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Footer Section */}
    //   {/* <footer className="bg-purple-900 text-white py-8">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex justify-between">
    //         <div>
    //           <div className="text-2xl font-bold">MUSEOMELODY</div>
    //           <p className="mt-2 text-gray-400">
    //             © 2024 MuseoMelody. All rights reserved.
    //           </p>
    //         </div>
    //         <div className="space-x-4">
    //           <Link href="/overview" className="hover:underline">
    //             Overview
    //           </Link>
    //           <Link href="/features" className="hover:underline">
    //             Features
    //           </Link>
    //           <Link href="/pricing" className="hover:underline">
    //             Pricing
    //           </Link>
    //           <Link href="/careers" className="hover:underline">
    //             Careers
    //           </Link>
    //         </div>
    //         <div>
    //           <h3 className="font-semibold">Stay up to date</h3>
    //           <div className="mt-2 flex">
    //             <input
    //               type="email"
    //               className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
    //               placeholder="Enter your email"
    //             />
    //             <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg">
    //               Subscribe
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer> */}
    // </div>
  );
}

// export default LandingPage;
