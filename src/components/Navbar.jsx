import { useState } from "react"

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full shadow-md shadow-gray-400 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="text-xl sm:text-2xl font-bold items-center text-green-600 flex">
        <img src="/logo.png" alt="weduca logo" className="w-[56px]" />
          WEDUCA APPLY LTD
        </a>

        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600">
            Students
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600">
            Recruitment Partners
          </a>
          <a href="/services/schools" className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600">
            Institutions
          </a>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              <span>Discover</span>
              <svg
                className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  About Us
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Resources
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Blog
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* <div className="hidden items-center space-x-4 md:flex">
          <a
            href="/auth/login"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-green-600 hover:text-green-600"
          >
            Login
          </a>
          <a
            href="/auth/signup"
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600"
          >
            Register
          </a>
        </div> */}

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden text-gray-700"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="/" className="text-2xl font-bold text-green-600">
              WEDUCA APPLY LTD
            </a>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700" aria-label="Close menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="px-4 py-6">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-green-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Students
              </a>
              <a
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-green-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Recruitment Partners
              </a>
              <a
                href="/services/schools"
                className="text-lg font-medium text-gray-700 hover:text-green-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Institutions
              </a>
              <a
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-green-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discover
              </a>
              {/* <div className="pt-4">
                <a
                  href="/auth/login"
                  className="mb-3 block w-full rounded-md border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:border-green-600 hover:text-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </a>
                <a
                  href="/auth/signup"
                  className="block w-full rounded-md bg-green-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </a>
              </div> */}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

