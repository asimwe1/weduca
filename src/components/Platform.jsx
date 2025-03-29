import React, { useState } from 'react';

const tabs = [
  {
    tab: "INTERNATIONAL STUDENTS",
    title: "Students",
    message: "We believe in your dreams and work hard to make them a reality. Get matched with and apply to programs and institutions that align with your background, skills, and interests.",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/slide1_bk8hf0.png"
  },
  {
    tab: "RECRUITMENT PARTNERS",
    title: "Recruitment Partners",
    message: "Weduca Apply is more than a platform. We're your trusted partner, here to support you every step of the way. We help you find the right programs and institutions for you, and fulfill your international education dream.",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/slide2_uxm8ap.png"
  },
  {
    tab: "PARTNER INSTITUTIONS",
    title: "Partner Institutions",
    message: "Increase your global presence and the number of qualified student applicants from a single, easy-to-use platform trusted by more than 1,500 institutions worldwide.",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/slide3_phhlh6.png"
  }
];

const StudentPlatform = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">
        A Platform That Supports You End-to-End
      </h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${activeTab === index 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4 transition-opacity duration-500 ease-in-out opacity-100">
          <h2 className="text-2xl font-semibold">{tabs[activeTab].title}</h2>
          <p className="text-gray-600">{tabs[activeTab].message}</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
            Learn More
          </button>
        </div>

        {/* Right Content - Image */}
        <div className="relative overflow-hidden rounded-lg w-full aspect-[4/3] transition-opacity duration-500 ease-in-out opacity-100">
          <img 
            src={tabs[activeTab].image} 
            alt={tabs[activeTab].title} 
            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out scale-100"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentPlatform;