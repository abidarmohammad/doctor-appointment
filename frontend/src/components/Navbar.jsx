import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    toast.success('Logged out successfully')
    navigate('/login')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <h1 className="text-2xl font-bold text-primary">Maristan</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/')} 
              className="text-gray-600 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
            >
              HOME
            </button>
            <button 
              onClick={() => navigate('/doctors')} 
              className="text-gray-600 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
            >
              ALL DOCTORS
            </button>
            <button 
              onClick={() => navigate('/about')} 
              className="text-gray-600 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
            >
              ABOUT
            </button>
            <button 
              onClick={() => navigate('/contact')} 
              className="text-gray-600 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
            >
              CONTACT
            </button>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {token && userData ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <img 
                    className="w-8 h-8 rounded-full object-cover border-2 border-primary" 
                    src={userData.image || assets.default_user} 
                    alt="Profile" 
                  />
                  <span className="text-gray-700 font-medium">{userData.name}</span>
                  <img className="w-4 h-4 transition-transform group-hover:rotate-180" src={assets.dropdown_icon} alt="" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <button 
                    onClick={() => navigate('/my-profile')} 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </button>
                  <button 
                    onClick={() => navigate('/my-appointments')} 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Appointments
                  </button>
                  <hr className="my-1" />
                  <button 
                    onClick={logout} 
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/login')} 
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
              >
                Create account
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <img className="w-6 h-6" src={assets.menu_icon} alt="Menu" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => { navigate('/'); setShowMenu(false); }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              HOME
            </button>
            <button
              onClick={() => { navigate('/doctors'); setShowMenu(false); }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              ALL DOCTORS
            </button>
            <button
              onClick={() => { navigate('/about'); setShowMenu(false); }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              ABOUT
            </button>
            <button
              onClick={() => { navigate('/contact'); setShowMenu(false); }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              CONTACT
            </button>
            {token && userData && (
              <>
                <hr className="my-2" />
                <button
                  onClick={() => { navigate('/my-profile'); setShowMenu(false); }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  My Profile
                </button>
                <button
                  onClick={() => { navigate('/my-appointments'); setShowMenu(false); }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  My Appointments
                </button>
                <button
                  onClick={() => { logout(); setShowMenu(false); }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar