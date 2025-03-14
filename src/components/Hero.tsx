import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">AI-Powered</span>
            <span className="block text-blue-600">Resume Builder</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Create ATS-friendly and professionally written resumes in seconds. Stand out in today&apos;s competitive job market with AI-optimized content.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer">
                Build Your Resume
              </button>
            </div>
          </div>
          <div className="mt-12">
            <Image
              src="/resume-builder.png"
              alt="DeepResume Builder Interface"
              width={800}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 