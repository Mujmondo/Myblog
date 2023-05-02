import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <div className="signup bg-white container max-w-[1100px] mx-auto flex justify-center items-center shadow-xl rounded-2xl my-10">
            <div className="cover w-[50%] h-full rounded-l-2xl">
            </div>
            <div className="signup-form w-[50%] px-24">
                <h1 className='text-2xl font-medium text-slate-600 text-center mb-4'>Login to your account</h1>
                <form>
                    <label className='w-100'>Username</label><br />
                    <input 
                    className='w-full p-1 border-b border-slate-400 focus:border-[#2065b4] focus:outline-0 focus:border-0] mb-3' 
                    type="text" /><br />
                    <label className='w-100'>Password</label><br />
                    <input 
                    className='w-full p-1 border-b border-slate-400 focus:border-[#2065b4] focus:outline-0 focus:border-0] mb-3' 
                    type="password" /><br />
                    <p className='mb-2 text-slate-700'>Don't have account? <Link to='/signup' className='text-[#2065b4]'>Sign up</Link></p>
                    <button className='bg-[#2065b4] w-full p-2 text-white'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;