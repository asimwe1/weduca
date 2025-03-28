import { DollarSign, FileCheck, Headphones } from "lucide-react"

const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        {/* Features Grid - stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-center w-full mb-8 sm:mb-12">
          {/* Feature items - adjust sizing */}
          <div className="flex flex-col items-center text-center p-4 sm:p-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-700 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2d4836]">100% Free</h3>
          </div>

          {/* 95% Success Rate Feature */}
          <div className="flex flex-col items-center text-center p-4 sm:p-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-700 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <FileCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2d4836]">
              95% Application
              <br />
              Success Rate
            </h3>
          </div>

          {/* 24/7 Support Feature */}
          <div className="flex flex-col items-center text-center p-4 sm:p-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-700 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Headphones className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2d4836]">
              24/7 Live Chat
              <br />
              Support
            </h3>
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="w-full sm:w-auto bg-green-700 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-teal-800 transition-colors">
          Sign Up for Free
        </button>
      </div>
    </section>
  )
}

export default FeaturesSection

