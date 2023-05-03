import { Navbar } from "./components";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import { Login, PostPage, Signup } from "./pages";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div className="App bg-[#f0f0f0] min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/posts' element={<PostsPage />} /> 
        <Route path='/post' element={<PostPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
