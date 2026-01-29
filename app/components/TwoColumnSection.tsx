'use client'

const TwoColumnSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Static Image */}
          <div className="order-2 lg:order-1 p-10">
            <div 
              className="h-[600px] lg:h-[700px] w-auto overflow-hidden"
              style={{
                backgroundImage: 'url(/food.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="h-full flex items-center justify-center">
                {/* Optional: Add overlay or content here if needed */}
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Small Uppercase Heading */}
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-600">
              OUR RESTAURANT
            </h3>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-marcellus text-gray-900">
              Prize winning Balinese bistro
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                The food at Damai is easy to enjoy. Simple brasserie dishes. Balinese classics. Tropical, local and good.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our cuisine has won international awards and have been featured in two cook books.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 overflow-hidden">
                {/* Left decorative icon */}
                <span className="absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Button text */}
                <span className="px-4">Explore our restaurant</span>
                
                {/* Right decorative icon */}
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnSection
