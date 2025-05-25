import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors, setDoctors] = useState([])
    const [token, setToken] = useState('')
    const [userData, setUserData] = useState(null)

    // Logout function
    const logout = () => {
        setToken('');
        setUserData(null);
        localStorage.removeItem('token');
        toast.success('Logged out successfully');
    };

    // Check for token in localStorage on mount
    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
            setToken(storedToken)
        }
    }, [])

  
    

   

    const value = {
       
        currencySymbol,
        backendUrl,
        token, 
        userData, 
        
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider