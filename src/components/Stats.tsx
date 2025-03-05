export default function Stats() {
  const stats = [
    { percentage: "90%", label: "ATS Pass Rate" },
    { percentage: "75%", label: "More Interview Callbacks" },
    { percentage: "5min", label: "Average Creation Time" }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-blue-600">{stat.percentage}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 