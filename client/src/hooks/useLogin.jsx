import { useState, useContext } from "react";
import { authContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const {dispatch} = useContext(authContext)
    const navigate = useNavigate()
    
    const login = async (username, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // save the user to localStorage
            const {username, token} = json
            localStorage.setItem('user', JSON.stringify({username, token}))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            navigate('/')
        }
    }
    return  { login, isLoading, error }
}