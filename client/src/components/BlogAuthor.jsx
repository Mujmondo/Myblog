const BlogAuthor = ({post}) => {
    return ( 
        <div className="bg-white dark:bg-slate-900 dark:border dark:border-slate-800 px-4 author text-center py-5">
            <div className="mx-auto text-center">
            <img src="https://lledogrupo.com/wp-content/uploads/2018/04/user-img-1.png" 
            className="rounded-full mx-auto mb-2"
            alt=""
            width={80}
            height={80} />
            <p className="text-[#2065b4] text-sm font-medium mb-1">{post?.author?.username}</p>
            <p className="text-slate-800 dark:text-white mb-2">Writer, Communicator, Storyteller</p>
            <p className="text-slate-600 dark:text-slate-300 font-[monospace]">I am a millennial on a mission to serve others through grace and empathy. I tend to write about being present, personal growth, relationships, pain and all the other stuff they never taught you in school.</p>
            </div>
        </div>
     );
}
 
export default BlogAuthor;