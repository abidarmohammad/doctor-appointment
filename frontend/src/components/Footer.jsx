import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  
  return (
    <footer className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-8 sm:gap-14 my-10 mt-20 text-sm'>
        <div>
          <h1 className="text-2xl font-bold text-primary mb-5">Maristan</h1>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Maristan is your trusted healthcare platform, connecting you with expert medical professionals. 
            We make healthcare accessible and convenient, ensuring you receive the best medical care when you need it.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('/')}>Home</li>
            <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('/about')}>About us</li>
            <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('/doctors')}>Doctors</li>
            <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('/contact')}>Contact</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+212 123-456-789</li>
            <li>contact@maristan.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-gray-200" />
        <p className='py-5 text-sm text-center text-gray-600'>Copyright 2024 @ Maristan - All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
