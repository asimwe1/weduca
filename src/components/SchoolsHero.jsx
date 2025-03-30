const HeroSection = () => (
  <div 
    className="bg-cover bg-center h-[64vh] relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
    style={{ backgroundImage: 'url(https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741442689/Frame-31693-1_trodoz_1_fgi9ar.png)' }}
  >
    <div className="max-w-4xl text-white space-y-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
        One Global Platform—Millions of Student Searches
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
        Revolutionize your international student enrolment with the smartest all-in-one platform for global student mobility, trusted by over 1,500 institutions worldwide.
      </p>
      <div>
        <button className="text-green-600 font-semibold bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:cursor-pointer transition duration-300">
          Open Your Campus To The World
        </button>
      </div>
    </div>
  </div>
);

export default HeroSection;
