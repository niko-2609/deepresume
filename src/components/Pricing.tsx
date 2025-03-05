export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      features: ["1 Resume Template", "Basic AI Suggestions", "PDF Export", "ATS-Friendly Format"],
      buttonText: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$15",
      features: ["All Templates", "Advanced AI Writing", "Unlimited Exports", "Keyword Optimization"],
      buttonText: "Go Pro",
      popular: true
    },
    {
      name: "Team",
      price: "$49",
      features: ["5 User Accounts", "Custom Branding", "Priority Support", "API Access"],
      buttonText: "Get Team",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm p-6 ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-3xl font-bold mt-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.price === "$0" ? "forever" : "/month"}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-md ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 