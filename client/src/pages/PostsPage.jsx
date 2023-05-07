import React, { useEffect, useState } from "react";
import { BlogAuthor, BlogPost, Loader } from "../components";
import { useLocation } from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const {search} = useLocation()
    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            const response = await fetch(`http://localhost:4000/api/posts${search}`, {
                credentials: 'include'
            })
            const json = await response.json()
            setPosts(json)
            setIsLoading(false)
        }
        fetchPosts()
    }, [search]);

    if(isLoading){
        return <Loader />
    }
    return ( 
        <>
        {/* <div className="search_bar container max-w-[800px] mx-auto border border-slate-300 mt-3 inline-block flex items-center justify-center text-center">
        <input 
        type="text" 
        className="max-w-[800px] w-full  dark:text-slate-600 bg-white p-2 focus:outline-0 focus:border-0]"
        placeholder="Search for a username" />
        <button className="bg-blue-500 text-white py-2 px-5">Search</button>    
        </div>     */}
        {posts && posts.map((post) => (
        <div key={post._id} className="container lg:grid lg:grid-cols-5 lg:gap-x-5 mx-auto py-4">
        <div className="lg:col-span-4 lg:ms-20  max-w-[1200px] shadow-lg">
        <BlogPost post={post} type="home" />
        </div>
        <div className="lg:col-span-1 h-fit md:sticky md:top-0 shadow-lg">
        <BlogAuthor post={post} />
        </div>
    </div>
    ))} 
    </>
     );
}
 
export default PostsPage;