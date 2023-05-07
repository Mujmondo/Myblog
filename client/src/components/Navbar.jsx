import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';
const Navbar = ({darkMode, setDarkMode}) => {
    const {user, dispatch} = useContext(authContext)
    const navigate = useNavigate()
    
    // useEffect(() => {
    //     if(document.body.classList.contains('dark')){
    //       dispatch({type: 'DARKMODE', payload: true})
    //     } else{
    //       dispatch({type: 'DARKMODE', payload: false})
    //     }
    //   }, [document.body.classList]);

    const handleLogout = async () => {
        await fetch('http://localhost:4000/api/user/logout', {
            method: 'POST',
            credentials: 'include'
        }).then(()=> {
        dispatch({type: 'LOGOUT'})
        localStorage.removeItem('user')
        navigate('/login')
    }).catch((error)=> {
        console.log(error)
    })
    }


    return (
        <header className="h-[65px] bg-white dark:bg-slate-900 px-2 ">
            {/* border-2 border-solid border-b-[#2065b4] */}
            <div className="container py-3 mx-auto flex justify-between items-center">
                <div className="logo">
                    <Link to="/"><h1 className="text-3xl font-semibold text-slate-600 dark:text-white">My<span className="font-bold text-[#2065b4]">Blog</span></h1></Link>
                </div>
                <div className="links flex items-center gap-x-2">
                    {!user && (
                        <>
                    <Link to="/signup" className="rounded-lg text-[#2065b4] bg-slate-50 border border-solid border-[#2065b4] px-3 py-1.5">Sign up</Link>
                    <Link to="/login" className="rounded-lg mx-2 text-slate-50 bg-[#2065b4] px-3 py-1.5">Login</Link>
                    </>
                    )}
                    {user && (<div className='flex items-center gap-x-2'>
                        <p className='font-semibold text-[#2065b4] bg-[#f0f0f0] dark:bg-slate-200 rounded-lg shadow-lg  py-[5px] px-5'><span className='text-sm text-slate-600 '>welcome, </span>{user.username}</p>
                        <Link to="/create" className="rounded-lg text-white bg-slate-700 dark:bg-slate-900  px-4 py-1.5">create post</Link>
                    <button onClick={handleLogout} className="rounded-lg text-slate-50 bg-[#2065b4] px-3 py-1.5">Logout</button>
                    </div>)}
                  <button 
                  onClick={()=> setDarkMode(darkMode === false? true : false)}
                  >
                  {darkMode? <i  className='bx bx-sun text-xl dark:bg-slate-200 rounded-xl cursor-pointer py-1 px-2'></i>:
                  <i 
                  className='bx bx-moon text-xl  rounded-xl cursor-pointer text-white bg-slate-800 py-1 px-2'></i>}
                  </button>
                    </div>
            </div>
        </header>
    );
}

export default Navbar;