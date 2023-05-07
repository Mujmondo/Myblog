import { Navbar, ProtectedRoute } from "./components";
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "./pages/Home";
import { CreatePost, Login, PostPage, Signup } from "./pages";
import PostsPage from "./pages/PostsPage";
import { useContext, useEffect, useState } from "react";
import { authContext } from "./context/authContext";

function App() {
  const dark = localStorage.getItem('darkMode')
  const [darkMode, setDarkMode] = useState(dark || false);
  const { user } = useContext(authContext)
  localStorage.setItem('darkMode', darkMode)
  
  useEffect(() => {
    dark === true? setDarkMode(true) : setDarkMode(false)
    
  }, []);
  
  darkMode? document.body.classList.add('dark') : document.body.classList.remove('dark') 
  return (
    <div className="App bg-[#f0f0f0] dark:bg-slate-950 min-h-[100vh]">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={!user ? <Home /> : <PostsPage />} />
        <Route path='/login' element={!user? <Login /> : <Navigate to="/" />} />
        <Route path='/signup' element={!user? <Signup /> : <Navigate to="/" /> } />
        <Route path="*" element={<> 404 Not Found</>} />
            <Route element={<ProtectedRoute user={user} />}>
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/create' element={<CreatePost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
