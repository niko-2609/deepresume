import Image from 'next/image'

export default function Features() {
  const mainFeatures = [
    {
      title: "AI-Powered Resume Creation",
      subtitle: "Professional in Seconds",
      description: "Instantly generate professional resumes based on your skills and job descriptions. Our AI understands what recruiters are looking for.",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "ATS Optimization",
      subtitle: "Pass the First Round",
      description: "Ensure your resume gets past applicant tracking systems with optimized keywords and formatting that matches the job requirements.",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  const additionalFeatures = [
    {
      title: "Smart Content Suggestions",
      description: "Get AI-generated work experience descriptions, skills, and professional summaries that highlight your achievements effectively.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Multiple Export Formats",
      description: "Export your resume in PDF, Word, or plain text format. Perfect for different application requirements.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      title: "Real-time Preview",
      description: "See changes instantly as you edit your resume. What you see is exactly what employers will get.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Template Library",
      description: "Choose from dozens of professionally designed templates that stand out in your industry.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for the Modern Job Seeker
          </h2>
          <p className="text-lg text-gray-600">
            Create stunning, ATS-optimized resumes with our cutting-edge AI technology
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 mt-4 mr-6 w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-600 mb-4 font-semibold">{feature.subtitle}</p>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L50 100 L100 0 Z" fill="white"/>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Build Your Perfect Resume?
              </h3>
              <p className="text-blue-100 mb-6 font-semibold">
                Join thousands of job seekers who have successfully landed their dream jobs
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 hover:cursor-pointer">
                Get Started Free
              </button>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/resume-preview.png"
                alt="Resume Preview"
                width={300}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}