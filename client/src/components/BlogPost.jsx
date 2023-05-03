const BlogPost = () => {
    return (
        <div className="blogpost bg-white">
            <div className="cover mb-4">
                <img src="https://marxcommunications.com/wp-content/uploads/2023/02/fe4aab9f654a6ce2/how-to-write-a-blog-post.jpeg"
                    className="w-100"
                    width="100%"
                    alt="post cover"
                />
            </div>
            <div className="info px-5">
                <h4 className="text-4xl mb-3">I Traveled Most Weeks for a Month & This is What I Learned</h4>
                <p className="inline-block text-lg py-2 border-b border-solid border-slate-300"><i>by <span className="text-[#2065b4]">Rachel Leist</span> on <span>April 29, 2020 </span></i></p>
                {/* <hr className="my-4" /> */}
                <p className="text-[19px] leading-8 my-3">March was travel madness for me. From going to the UK for work to Vegas to see Taylor Swift, to finally Mexico for more work, I am beyond exhausted. I have learned more about uncontrollable variables on airplanes than anyone should ever know. Did you know that pilots can be in the cockpit of a </p>
                <button className="text-sm font-semibold mb-4 border-b border-dotted border-slate-600 hover:text-[#2065b4]">READ MORE</button>
            </div>
        </div>
    );
}

export default BlogPost;