import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <img 
            className="w-full rounded-lg shadow-md" 
            src={assets.contact_image} 
            alt="Contact us" 
          />
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h2>
            <p className="text-gray-600">
              123 Healthcare Avenue<br />
              Casablanca, Morocco
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
            <p className="text-gray-600">
              Phone: +212 123-456-789<br />
              Email: contact@maristan.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Working Hours</h2>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 1:00 PM<br />
              Sunday: Closed
            </p>
          </div>

          <button 
            onClick={() => window.location.href = 'mailto:contact@maristan.com'}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Send us an email
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
