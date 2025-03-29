import React from 'react';

const countries = [
  {
    name: "United States",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743210393/united-states-of-america-flag-square-icon-256_ujscr4.png",
    schools: 1200,
  },
  {
    name: "Canada",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743208536/ca-square-01-XL_ohsii4.png",
    schools: 800,
  },
  {
    name: "Australia",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743225489/australia-flag-large_b88mzl.jpg",
    schools: 700,
  },
  {
    name: "Germany",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228150/germany-flag-large_jxs0fd.png",
    schools: 600,
  },
  {
    name: "France",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228273/france-flag-large_erqu5i.png",
    schools: 500,
  },
  {
    name: "Spain",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228411/spain-flag-large_tsis2u.png",
    schools: 400,
  },
  {
    name: "Italy",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228549/italy-flag-large_prurrs.png",
    schools: 300,
  },
  {
    name: "Netherlands",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228623/netherlands-flag-large_xjraf2.png",
    schools: 200,
  },
  {
    name: "Sweden",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228722/sweden-flag-large_kpvqqs.png",
    schools: 100,
  },
  {
    name: "Switzerland",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228842/switzerland-flag-large_k9w5oj.png",
    schools: 50,
  },
];

const TopCountries = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Top Countries</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap">
            {[...countries, ...countries].map((country, index) => (
              <div
                key={`${country.name}-${index}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow mx-4 flex-shrink-0 w-[300px]"
              >
                <img 
                  src={country.image} 
                  alt={`country-${country.name}`} 
                  className="w-full h-[200px] object-cover" 
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{country.name}</h3>
                  <p className="text-gray-600">{country.schools} schools</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TopCountries;