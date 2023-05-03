import { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({username, password}),
             headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)
    }
    return (
        <div className="signup bg-white max-w-[550px] h-[450px] mx-auto flex justify-center items-center shadow-xl rounded-2xl my-10">
            <div className="signup-form">
                <h1 className='text-2xl font-medium text-slate-600 text-center mb-4'>Create a new account</h1>
                <form onSubmit={handleSubmit} className="w-[350px]">
                    <label className='w-100'>Username</label><br />
                    <input 
                    className='w-full p-1 border-b border-slate-400 focus:border-[#2065b4] focus:outline-0 focus:border-0] mb-3' 
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    /> <br />
                    <label className='w-100'>Password</label><br />
                    <input 
                    className='w-full p-1 border-b border-slate-400 focus:border-[#2065b4] focus:outline-0 focus:border-0] mb-3' 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    /><br />
                    <button className='bg-[#2065b4] w-full p-2 text-white'>Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;