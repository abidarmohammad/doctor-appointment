import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AppContext)

    if (!token || token === '') {
        toast.warning('Please login to access this page')
        return <Navigate to="/login" replace />
    }

    // Render children if authenticated
    return children
}

export default ProtectedRoute 