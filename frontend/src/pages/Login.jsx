import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const { backendUrl, setToken, setUserData } = useContext(AppContext)
    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (isLogin) {
                // Login
                const response = await axios.post(`${backendUrl}/api/user/login`, {
                    email: formData.email,
                    password: formData.password
                })
                if (response.data.success) {
                    const token = response.data.token
                    if (!token) {
                        throw new Error('No token received from server')
                    }
                    localStorage.setItem('token', token)
                    setToken(token)
                    setUserData(response.data.user)
                    toast.success('Login successful')
                    navigate('/')
                } else {
                    throw new Error(response.data.message || 'Login failed')
                }
            } else {
                // Signup
                if (!formData.name || !formData.email || !formData.password) {
                    toast.error('Please fill in all fields')
                    setLoading(false)
                    return
                }

                const response = await axios.post(`${backendUrl}/api/user/register`, {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                })
                if (response.data.success) {
                    toast.success('Account created successfully')
                    setIsLogin(true)
                    setFormData({ name: '', email: '', password: '' })
                } else {
                    throw new Error(response.data.message || 'Registration failed')
                }
            }
        } catch (error) {
            console.error('Error:', error)
            toast.error(error.response?.data?.message || error.message || 'Something went wrong')
            // Clear token and user data on error
            setToken('')
            localStorage.removeItem('token')
            setUserData(null)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900'>
                        {isLogin ? 'Login' : 'Create Account'}
                    </h2>
                </div>
                <form className='mt-8 space-y-6' onSubmit={onSubmitHandler}>
                    {!isLogin && (
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
                                value={formData.name}
                                onChange={onChangeHandler}
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
                            value={formData.email}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700'>
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
                            value={formData.password}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                        >
                            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Create Account')}
                        </button>
                    </div>
                </form>
                <div className='text-center'>
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin)
                            setFormData({ name: '', email: '', password: '' })
                        }}
                        className='text-sm text-primary hover:text-primary-dark'
                    >
                        {isLogin ? 'Create an account' : 'Already have an account? Login'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login