import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        About Maristan
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <img 
          className="w-full md:w-1/2 rounded-lg shadow-md" 
          src={assets.about_image} 
          alt="Healthcare professionals" 
        />
        <div className="space-y-6">
          <p className="text-gray-600">
            Welcome to Maristan, your trusted healthcare companion. We're dedicated to making healthcare accessible 
            and convenient for everyone in Morocco.
          </p>
          <p className="text-gray-600">
            Our platform connects patients with qualified healthcare professionals, ensuring you receive 
            the care you need when you need it most.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
          <p className="text-gray-600">To provide accessible and quality healthcare services to all Moroccans.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
          <p className="text-gray-600">To become Morocco's leading digital healthcare platform.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-primary mb-3">Our Values</h3>
          <p className="text-gray-600">Trust, accessibility, and excellence in healthcare service.</p>
        </div>
      </div>
    </div>
  )
}

export default About
