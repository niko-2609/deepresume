import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600">
              DeepResume
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#features" className="text-gray-700 hover:text-blue-600">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600">
                Pricing
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Build Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 