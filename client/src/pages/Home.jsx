import {Link} from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
            <div className="container w-full h-full flex justify-center items-center mx-auto text-center">
                <div className="info-container">
                <h1 className='text-3xl font-medium text-white text-center uppercase'>Create your online blog now!</h1>
                <p className="text-white text-[19px] leading-8">March was travel madness for me. From going to the UK</p>
                <div className="links my-3">
                    <Link to="/signup" className="text-white hover:text-slate-800 border border-solid border-white hover:bg-white rounded px-3 py-1.5">Sign up</Link>
                    <Link to="/login" className="mx-2 text-slate-50 bg-[#e82222] rounded px-3 py-1.5">Login</Link>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;