export default function Features() {
  const features = [
    {
      title: "AI-Powered Resume Creation",
      subtitle: "Professional in Seconds",
      description: "Instantly generate professional resumes based on your skills and job descriptions. Our AI understands what recruiters are looking for."
    },
    {
      title: "ATS Optimization",
      subtitle: "Pass the First Round",
      description: "Ensure your resume gets past applicant tracking systems with optimized keywords and formatting that matches the job requirements."
    },
    {
      title: "Smart Content Suggestions",
      subtitle: "Perfect Your Content",
      description: "Get AI-generated work experience descriptions, skills, and professional summaries that highlight your achievements effectively."
    },
    {
      title: "Instant PDF Export",
      subtitle: "Ready to Apply",
      description: "Review, customize, and export your polished resume in PDF format with just a few clicks. Multiple templates available."
    }
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-lg text-blue-600">{feature.subtitle}</p>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 