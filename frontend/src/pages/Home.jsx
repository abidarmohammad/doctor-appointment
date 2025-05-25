import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { specialityData } from '../assets/assets'
import { toast } from 'react-toastify'

const Home = () => {
  const navigate = useNavigate()
  const { doctors, token } = useContext(AppContext)

  const handleAppointmentClick = (doctorId) => {
    if (!token) {
      toast.warning('Please login to book an appointment')
      navigate('/login')
      return
    }
    navigate(`/appointment/${doctorId}`)
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-primary via-primary to-primary-dark before:absolute before:inset-0 before:bg-black/10'>
        <div className='relative max-w-7xl mx-auto px-4 py-12 sm:py-24 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div className='text-center lg:text-left'>
              <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-sm'>
                Your Perfect Smile <br className="hidden sm:block" />
                Starts Here
              </h1>
              <p className='mt-4 sm:mt-6 text-base sm:text-lg text-white max-w-lg mx-auto lg:mx-0 drop-shadow-sm'>
                Book appointments with expert dentists. Quality dental care for you and your family.
              </p>
              <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <button 
                  onClick={() => navigate('/doctors')}
                  className='w-full sm:w-auto bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-md'
                >
                  Find Dentists
                </button>
                <button 
                  onClick={() => navigate('/login')}
                  className='w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors shadow-md'
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className='mt-8 lg:mt-0'>
              <img 
                src={assets.appointment_img} 
                alt="Dental Consultation" 
                className='w-full max-w-sm lg:max-w-lg mx-auto drop-shadow-lg rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-8 rounded-xl shadow-sm'>
            <div className='w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4'>
              <img src={assets.calendar_icon} alt="Easy Booking" className='w-6' />
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Easy Booking</h3>
            <p className='text-gray-600'>Book dental appointments in minutes, with flexible scheduling options.</p>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-sm'>
            <div className='w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4'>
              <img src={assets.verified_icon} alt="Expert Dentists" className='w-6' />
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Expert Dentists</h3>
            <p className='text-gray-600'>All our dentists are certified professionals with years of experience.</p>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-sm'>
            <div className='w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4'>
              <img src={assets.secure_icon} alt="Emergency Care" className='w-6' />
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Emergency Care</h3>
            <p className='text-gray-600'>24/7 emergency dental services available for urgent cases.</p>
          </div>
        </div>
      </div>

      {/* Dental Services Section */}
      <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800'>Our Dental Services</h2>
          <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
            Comprehensive dental care for all your oral health needs.
          </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {specialityData.map((item, index) => (
            <div 
              key={index}
              onClick={() => navigate(`/doctors/${item.speciality}`)}
              className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer'
            >
              <div className='w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center'>
                <img src={item.image} alt={item.speciality} className='w-8' />
              </div>
              <p className='text-center text-sm font-medium text-gray-800'>{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>

     

      {/* CTA Section */}
      <div className='bg-primary py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Ready for Your Dental Visit?</h2>
          <p className='text-gray-100 mb-8 max-w-2xl mx-auto'>
            Join thousands of satisfied patients who have found their perfect dentist through our platform.
          </p>
          <button 
            onClick={() => token ? navigate('/doctors') : navigate('/login')}
            className='bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors'
          >
            {token ? 'Book Your Appointment' : 'Login to Book'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home