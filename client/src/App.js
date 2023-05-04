import { Navbar } from "./components";
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from "./pages/Home";
import { CreatePost, Login, PostPage, Signup } from "./pages";
import PostsPage from "./pages/PostsPage";
import { useContext, useEffect } from "react";
import { authContext } from "./context/authContext";

function App() {
    const {user, dispatch} = useContext(authContext)
    // useEffect(() => {
    //   const getUser = async () => {
    //     const response = await fetch('http://localhost:4000/api/user', {
    //         credentials: 'include'
    //     })
    //     const json = await response.json()

    //     if(json){
    //       dispatch({type: 'LOGIN', payload: json})
    //     }
    // }

    // getUser()

    // }, []);
  return (
    <div className="App bg-[#f0f0f0] min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path='/' element={!user? <Home /> : <PostsPage />} /> 
        <Route path='/login' element={!user? <Login /> : <Navigate to="/" />} /> 
        <Route path='/signup' element={!user? <Signup /> : <Navigate to="/" />} /> 
        <Route path='/post/:id' element={user? <PostPage /> : <Navigate to="/login" />} /> 
        <Route path='/create' element={user? <CreatePost /> : <Navigate to="/login" />} /> 
      </Routes>
    </div>
  );
}

export default App;
