import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';
const Navbar = () => {
    const {user, dispatch} = useContext(authContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <header className="h-[65px] bg-white px-2">
            {/* border-2 border-solid border-b-[#2065b4] */}
            <div className="container py-3 mx-auto flex justify-between items-center">
                <div className="logo">
                    <Link to="/"><h1 className="text-3xl font-semibold text-slate-600">My<span className="font-bold text-[#2065b4]">Blog</span></h1></Link>
                </div>
                <div className="links">
                    {!user && (
                        <>
                    <Link to="/signup" className="rounded text-[#2065b4] bg-slate-50 border border-solid border-[#2065b4] px-3 py-1.5">Sign up</Link>
                    <Link to="/login" className="rounded mx-2 text-slate-50 bg-[#2065b4] px-3 py-1.5">Login</Link>
                    </>
                    )}
                    {user && (<div className='flex items-center gap-x-2'>
                        <p className='font-semibold text-[#2065b4] bg-[#f0f0f0] rounded-lg py-[5px] px-5 shadow-lg'><span className='text-sm text-slate-600'>welcome, </span>{user.username}</p>
                        <Link to="/create" className="rounded text-[#2065b4] bg-slate-50 border border-solid border-[#2065b4] px-3 py-1.5">create post</Link>
                    <button onClick={handleLogout} className="rounded text-slate-50 bg-[#2065b4] px-3 py-1.5">Logout</button>
                    </div>)}
                    </div>
            </div>
        </header>
    );
}

export default Navbar;