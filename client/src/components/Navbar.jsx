import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className="h-[65px] bg-white px-2 ">
            {/* border-2 border-solid border-b-[#2065b4] */}
            <div className="container py-3 mx-auto flex justify-between items-center">
                <div className="logo">
                    <Link to="/"><h1 className="text-3xl font-semibold text-slate-600">My<span className="font-bold text-[#2065b4]">Blog</span></h1></Link>
                </div>
                <div className="links">
                    <Link to="/signup" className="text-slate-50 bg-slate-600 px-3 py-1.5">Sign up</Link>
                    <Link to="/login" className="mx-2 text-slate-50 bg-[#2065b4] px-3 py-1.5">Login</Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;