'use client'

const TwoColumnSectionReverse = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="order-1 lg:order-1 space-y-6">
               {/* Small Uppercase Heading */}
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-600 text-center lg:text-left">
              OUR RESTAURANT
            </h3>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-marcellus text-gray-900 text-center lg:text-left">
              Tailor Made Itineraries
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 xl:max-w-lg">
              <p className="text-lg font-normal text-gray-700 leading-relaxed text-center lg:text-left">
                Please contact us if you are interested in discussing a tailor-made itinerary with our travel experts, designed around your personal interests and requirements.
              </p>
              <p className="text-lg font-normal text-gray-700 leading-relaxed text-center lg:text-left">
                 Every journey is privately curated to ensure a seamless, memorable Sri Lankan experience — crafted exclusively for you.
              </p>
            </div>

           {/* CTA Button */}
            <div>
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-marcellus font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 overflow-hidden cursor-pointer">
                
                {/* Button text */}
                <span className="px-4">Explore our restaurant</span>

                <img src="/elephant.png" className="invert w-8" alt="" />
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-none group-hover:transition-transform group-hover:duration-700" />
              </button>
            </div>
          </div>

          {/* Right Column - Static Image */}
          <div className="order-2 lg:order-2 p-10">
            <div 
              className="h-[400px] sm:h-[600px] lg:h-[700px] w-auto overflow-hidden"
              style={{
                backgroundImage: 'url(/food.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="h-full flex items-center justify-center">
                {/* Optional: Add overlay or content here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnSectionReverse
