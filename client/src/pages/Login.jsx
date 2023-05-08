import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useLogin } from '../hooks/useLogin';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isLoading, error, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

    return (
        <div className="signup bg-white dark:bg-slate-900 max-w-[550px] h-[450px] mx-auto flex justify-center items-center shadow-xl rounded-2xl my-10">
            <div className="signup-form ">
                <h1 className='text-2xl font-medium text-slate-600 dark:text-white text-center mb-4'>Login to your account</h1>
                <form onSubmit={handleSubmit} className='w-[350px]'>
                    <label className='w-100 dark:text-slate-200'>Username</label><br />
                    <input 
                    className='w-full dark:text-slate-200 bg-transparent p-1 border-b border-slate-400 focus:border-[#2065b4] focus:outline-0 focus:border-0] mb-3' 
                    type="text" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}/><br />
                    <label className='w-100 dark:text-slate-200'>Password</label><br />
                    <input 
                    className='w-full dark:text-slate-200 bg-transparent p-1 border-b border-slate-400 focus:border-[#2065b4] focus:outline-0 focus:border-0] mb-3' 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/><br />
                    <p className='mb-2 text-slate-700 dark:text-slate-200'>Don't have account? <Link to='/signup' className='text-[#2065b4]'>Sign up</Link></p>
                    <button 
                    className='bg-[#2065b4] w-full p-2 text-white'
                    disabled={isLoading}
                    >Login</button>
                    {error && <div className='text-red-500 my-1 text-center'> { error } </div>}
                </form>
            </div>
        </div>
    );
}

export default Login;