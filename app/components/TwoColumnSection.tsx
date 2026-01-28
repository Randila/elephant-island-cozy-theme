'use client'

import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion'

const TwoColumnSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Parallax Image */}
          <div className="order-2 lg:order-1 p-10">
            <Parallax
              bgImage="/food.jpg" // Replace with actual image path
              bgImageAlt="Restaurant interior"
              strength={50}
              className="h-[600px] lg:h-[700px] w-auto overflow-hidden"
            >
              <div className="h-full flex items-center justify-center">
                {/* Optional: Add overlay or content here if needed */}
              </div>
            </Parallax>
          </div>

          {/* Right Column - Text Content */}
          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Uppercase Heading */}
            <motion.h3 
              className="text-sm font-semibold tracking-widest uppercase text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              OUR RESTAURANT
            </motion.h3>

            {/* Main Heading */}
            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-marcellus text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Prize winning Balinese bistro
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                The food at Damai is easy to enjoy. Simple brasserie dishes. Balinese classics. Tropical, local and good.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our cuisine has won international awards and have been featured in two cook books.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnSection
