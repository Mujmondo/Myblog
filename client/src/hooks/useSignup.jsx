import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    
    const signup = async (username, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const json = await response.json()
        if(response.ok){
            setIsLoading(false)
            alert('Your account has been created successfully')
            navigate('/login')
        }   
        
        else{
            setIsLoading(false)
            setError(json.error)
        }
    }
    return  { signup, isLoading, error }
}