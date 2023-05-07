import { useEffect, useState } from "react";
import { BlogAuthor, BlogPost, Loader } from "../components";
import { useParams } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const {id} = useParams()

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            const response = await fetch(`http://localhost:4000/api/posts/${id}`, {
                credentials: 'include'
            })
            const json = await response.json() 
            setPost(json)
            setIsLoading(false)
        }
        fetchPosts()
        console.log(post)
    }, [id]);

    if(isLoading){
        return <Loader />
    }
    return ( 
        <div className="container mx-auto py-4">
        <div className="mb-4">
        <BlogPost post={post} type="postPage" />
        </div>
        <div className="">
        <BlogAuthor post={post} />
        </div>
    </div>
     );
}
 
export default Post;