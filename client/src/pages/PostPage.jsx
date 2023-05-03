import { BlogAuthor, BlogPost } from "../components";

const Post = () => {
    return ( 
        <div className="container mx-auto py-4">
        <div className="mb-4">
        <BlogPost />
        </div>
        <div className="">
        <BlogAuthor />
        </div>
    </div>
     );
}
 
export default Post;