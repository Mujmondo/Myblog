import { BlogAuthor, BlogPost } from "../components";

const PostsPage = () => {
    return ( 
        <div className="container lg:grid lg:grid-cols-5 lg:gap-x-5 mx-auto py-4">
        <div className="lg:col-span-4 lg:ms-20  max-w-[1200px]">
        <BlogPost />
        </div>
        <div className="lg:col-span-1 h-fit md:sticky md:top-0">
        <BlogAuthor />
        </div>
    </div>
     );
}
 
export default PostsPage;