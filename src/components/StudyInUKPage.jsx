import React from 'react';

const StudyInUKPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
              {/* All About the UK Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">All About the UK</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <img src="https://via.placeholder.com/600x300" alt="UK Landmark" className="w-full h-64 object-cover rounded-lg mb-4" />
              <p>
                Whether you're studying in England, Scotland, Wales, or Northern Ireland, the United Kingdom boasts a globally-recognized education system. UK universities consistently rank highly on global university ranking lists. Work-wise, you can benefit from the UK’s many placement, internship opportunities, and the Graduate Immigration Route. It’s also a perfect location for travel to Europe. Not to mention iconic London, England—widely considered the best student city in the world!
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h3 className="font-semibold">Economic Growth Rate</h3>
                <p className="text-green-600">↑ 7.5%</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h3 className="font-semibold">Work While Studying</h3>
                <p>20 Hrs per week</p>
                <p className="text-sm">Full-time international students in the UK studying in an undergraduate or graduate course can work up to 20 hours per week during the study term.</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="font-semibold">Work After Study</h3>
                <p>2-3 Years</p>
                <p className="text-sm">The UK’s recently launched Graduate Route allows international student graduates of a degree course to live and work in the UK for up to two years, or three years for PhD graduates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Yearly Tuition Expenses Section */}
            <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Yearly Tuition Expenses in UK</h2>
          <div className="flex justify-center mb-4">
            <div className="w-full max-w-2xl">
              <div className="flex">
                <div className="bg-blue-500 h-6" style={{ width: '20%' }}></div>
                <div className="bg-gray-200 h-6 flex-1"></div>
              </div>
              <p className="text-center">£11,400 GBP <span className="text-sm">Lowest Tuition Cost</span></p>
              <div className="flex mt-2">
                <div className="bg-pink-500 h-6" style={{ width: '60%' }}></div>
                <div className="bg-gray-200 h-6 flex-1"></div>
              </div>
              <p className="text-center">£39,000 GBP <span className="text-sm">Highest Tuition Cost</span></p>
            </div>
          </div>
          <p className="text-center text-sm">
            The data here is only an estimate of the average highest and lowest tuition fee per year in the UK. Actual tuition costs could vary greatly depending on the institution, course, and level of study.
          </p>
        </div>
      </section>

            {/* Getting a UK Student Visa Section */}
            <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Getting a UK Student Visa</h2>
          <p className="text-center mb-8">
            In order to study in the UK, you'll need to apply for a Student visa (formerly known as a Tier 4 "General" student visa). You can submit your visa application online within six months of starting your course.
          </p>
          <p className="text-center">
            As part of your application, you'll need to pay an annual Immigration Health Surcharge and submit several documents, including travel documentation, Confirmation of Acceptance for Studies (CAS) from your institution, biometric information, and proof of financial support. Finally, you may be asked to participate in a UK Credibility Interview to confirm your intentions to study are genuine.
          </p>
          <div className="flex justify-center mt-6">
            <div className="bg-blue-100 p-4 rounded-lg flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-4c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6z"></path>
              </svg>
              <p>Avg Visa Cost: £363 GBP</p>
            </div>
          </div>
        </div>
      </section>

            {/* Application Process Section */}
            <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-4c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6z"></path>
                </svg>
              </div>
              <p>Pay Application Fee</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m-9 3h18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p>Submission in Progress</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8"></path>
                </svg>
              </div>
              <p>Prepare Application</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18m-9-9v18"></path>
                </svg>
              </div>
              <p>Decision</p>
            </div>
          </div>
        </div>
      </section>



      {/* Proof of English Proficiency Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Proof of English Proficiency in the UK</h2>
          <p className="text-center mb-8">
            If you're studying with a Higher Education Provider in the UK (a university for example), the institution will assess your level of English instead of the UK government. Score requirements vary by university and course, so be sure to check the institution's website for their expectations. The popular English language tests listed below are commonly accepted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['TOEFL', 'IELTS', 'PTE', 'C1', 'Duolingo'].map((test) => (
              <button key={test} className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg">
                {test}
              </button>
            ))}
          </div>
          <p className="text-center mt-4">
            The Test of English as a Foreign Language (TOEFL) has been trusted by colleges and universities worldwide for over fifty years.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg">Apply to UK Courses Now</button>
            <button className="border border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-lg">Get Personalized Suggestions</button>
          </div>
        </div>
      </section>


      {/* Popular Fields of Study in the UK Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Popular Fields of Study in the UK</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Engineering', 'Sciences', 'Arts', 'Business', 'Law', 'English Language', 'Medicine', 'Economics'].map((field) => (
              <div key={field} className="bg-white p-4 rounded-lg shadow text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8"></path>
                </svg>
                <p>{field}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Top Courses in the UK Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Top Courses in the UK</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <img src="https://via.placeholder.com/300x150" alt="Cheshire College" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Cheshire College South & West</h3>
              <p className="text-sm text-gray-600">3400 North Charles Street</p>
              <p className="mt-2">T-Level - Design, Surveying and Planning for Construction</p>
              <p className="text-sm text-gray-600">
                T Levels are new two-year, Level 3 study programmes combining classroom theory, practical learning and a minimum 315 hours of industry placement with an employer to make sure students have real experience of the workplace.
              </p>
              <button className="text-blue-600 mt-4">Apply Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <img src="https://via.placeholder.com/300x150" alt="University of Edinburgh" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">The University of Edinburgh</h3>
              <p className="text-sm text-gray-600">Old College, South Bridge</p>
              <p className="mt-2">Integrated Masters - Master of Arts (Honours) - Accounting & Business</p>
              <p className="text-sm text-gray-600">
                Combine the study of accounting and business to prepare for the social, political and cultural challenges facing contemporary businesses, governments and not-for-profit organisations.
              </p>
              <button className="text-blue-600 mt-4">Apply Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <img src="https://via.placeholder.com/300x150" alt="University of Birmingham" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">University of Birmingham</h3>
              <p className="text-sm text-gray-600">75 Laurier Avenue East</p>
              <p className="mt-2">English for Academic Purposes Presessional Programme (6.0 overall)</p>
              <p className="text-sm text-gray-600">
                The Presessional English programme at the University of Birmingham is designed to develop students’ language and academic skills in preparation for their studies at the university.
              </p>
              <button className="text-blue-600 mt-4">Apply Now</button>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="border border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-lg">Explore More Courses</button>
          </div>
        </div>
      </section>




      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Study in the UK & Achieve Your Dreams</h1>
          <p className="text-lg md:text-xl mb-6">
            Ready to launch your study abroad journey? You can make it happen, but ApplyBoard makes it easy! Follow in the steps of 600,000+ other successful experts to guide you on the way.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200">
            Get Personalized Study Abroad Options
          </button>
        </div>
      </section>

      {/* Choose Your Study Abroad Destination Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Choose Your Study Abroad Destination</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Australia', 'Ireland', 'Canada', 'The UK', 'The US'].map((destination) => (
              <div key={destination} className="bg-white p-4 rounded-lg shadow text-center">
                <img src="https://via.placeholder.com/150" alt={destination} className="w-full h-32 object-cover rounded-lg mb-2" />
                <p>Study in {destination}</p>
                <button className="text-blue-600 mt-2">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Student Success Stories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Student Success Stories</h2>
          <div className="flex justify-center">
            <div className="relative">
              <img src="https://via.placeholder.com/600x300" alt="Student Success Story" className="w-full h-64 object-cover rounded-lg" />
              <button className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="border border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-lg">Get Started Today</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StudyInUKPage;