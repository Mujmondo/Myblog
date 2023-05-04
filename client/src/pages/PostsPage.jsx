import React, { useEffect, useState } from "react";
import { BlogAuthor, BlogPost } from "../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:4000/api/posts', {
                credentials: 'include'
            })
            const json = await response.json() 
            setPosts(json)
        }
        fetchPosts()
    }, []);
    return ( 
        <>
        {posts && posts.map((post) => (
        <div key={post._id} className="container lg:grid lg:grid-cols-5 lg:gap-x-5 mx-auto py-4">
        <div className="lg:col-span-4 lg:ms-20  max-w-[1200px] shadow-lg">
        <BlogPost post={post} />
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