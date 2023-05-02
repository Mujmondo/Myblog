import { BlogPost } from "../components";

const Post = () => {
    return ( 
        <div className="container grid md:grid-cols-5 md:gap-x-5 mx-auto py-4">
        <BlogPost />
        <div className="order-1 md:order-2 col-span-1 px-4 author border-solid border-l border-slate-300 text-center">
            <div className="mx-auto text-center">
            <img src="https://lledogrupo.com/wp-content/uploads/2018/04/user-img-1.png" 
            className="rounded-full mx-auto mb-2"
            alt=""
            width={80}
            height={80} />
            <p className="text-[#2065b4] text-sm font-medium mb-1">Karen Dominique</p>
            <p className="text-slate-500 mb-2">Writer, Communicator, Storyteller</p>
            <p className="text-slate-600">I am a millennial on a mission to serve others through grace and empathy. I tend to write about being present, personal growth, relationships, pain and all the other stuff they never taught you in school.</p>
            </div>
        </div>
    </div>
     );
}
 
export default Post;