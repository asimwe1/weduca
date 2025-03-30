import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-[400px] sm:min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741448432/hero_zbwqon_1_1_wo5qhh.png"
          alt="Students collaborating"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center text-center mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl space-y-4 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Your Future Goes Beyond Borders
          </h1>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 items-center justify-center">
            <a
              href="#"
              className="w-full sm:w-auto text-center rounded-md bg-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-green-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              I want to study abroad
            </a>

            <a
              href="#"
              className="w-full sm:w-auto text-center rounded-md border-2 border-white bg-transparent px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              I want to guide international students
            </a>

            <a
              href="/services/schools"
              className="w-full sm:w-auto text-center rounded-md border-2 border-white bg-transparent px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              I want to welcome students to my campus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
